import { lazy, Suspense } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useAuth } from "./context/AuthContext";

const HomePage = lazy(() => import("./pages/HomePage"));
const MenuPage = lazy(() => import("./pages/MenuPage"));
const KeteringPage = lazy(() => import("./pages/KeteringPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const AdminPage = lazy(() => import("./pages/AdminPage"));

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/admin/login" replace />;
}

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-cream">
      <div className="w-10 h-10 border-4 border-navy border-t-orange rounded-full animate-spin" />
    </div>
  );
}

const pageVariants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.32, ease: "easeOut" } },
  exit:    { opacity: 0, y: -8, transition: { duration: 0.2, ease: "easeIn" } },
};

function PageShell({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <Suspense fallback={<PageLoader />}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageShell><HomePage /></PageShell>} />
          <Route path="/menu" element={<PageShell><MenuPage /></PageShell>} />
          <Route path="/ketering" element={<PageShell><KeteringPage /></PageShell>} />
          <Route path="/kontakt" element={<PageShell><ContactPage /></PageShell>} />
          <Route path="/admin/login" element={<PageShell><LoginPage /></PageShell>} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <PageShell><AdminPage /></PageShell>
              </ProtectedRoute>
            }
          />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}
