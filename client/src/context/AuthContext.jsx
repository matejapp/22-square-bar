import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AuthContext = createContext();

// Decode the JWT exp (epoch seconds) without verifying the signature.
// Verification happens server-side; we only use this to detect expiry locally.
function decodeExpMs(token) {
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return typeof payload.exp === "number" ? payload.exp * 1000 : null;
  } catch {
    return null;
  }
}

function isValid(token) {
  if (!token) return false;
  const expMs = decodeExpMs(token);
  return !!expMs && expMs > Date.now();
}

export function AuthProvider({ children }) {
  // Drop any stale token from localStorage at boot
  const [token, setToken] = useState(() => {
    const stored = localStorage.getItem("token");
    if (stored && isValid(stored)) return stored;
    if (stored) localStorage.removeItem("token");
    return null;
  });
  const navigate = useNavigate();

  const login = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  const logout = useCallback(
    ({ silent = false } = {}) => {
      localStorage.removeItem("token");
      setToken(null);
      if (!silent) navigate("/admin/login", { replace: true });
    },
    [navigate],
  );

  // Auto-logout from 401 responses (axios interceptor) — token rejected by server
  useEffect(() => {
    function onExpired() {
      if (!localStorage.getItem("token")) return;
      toast.error("Sesija je istekla, prijavite se ponovo");
      logout();
    }
    window.addEventListener("auth:expired", onExpired);
    return () => window.removeEventListener("auth:expired", onExpired);
  }, [logout]);

  // Auto-logout when the token's `exp` lapses while the tab is open
  useEffect(() => {
    if (!token) return;
    const expMs = decodeExpMs(token);
    if (!expMs) return;
    const ms = expMs - Date.now();
    if (ms <= 0) {
      logout();
      return;
    }
    const t = setTimeout(() => {
      toast.error("Sesija je istekla, prijavite se ponovo");
      logout();
    }, ms);
    return () => clearTimeout(t);
  }, [token, logout]);

  return (
    <AuthContext.Provider
      value={{ token, login, logout, isAuthenticated: isValid(token) }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
