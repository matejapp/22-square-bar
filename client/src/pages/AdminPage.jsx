import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
import api from "../api/axios";
import { formatPrice } from "../utils/format";

const SECTIONS = ["jelovnik", "fastfood", "pice"];

const EMPTY_FORM = {
  section: "jelovnik",
  category: "",
  category_order: 0,
  name: "",
  description: "",
  price: "",
  available: true,
  sort_order: 0,
};

export default function AdminPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState(EMPTY_FORM);
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [activeSection, setActiveSection] = useState("jelovnik");
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    fetchItems();
  }, []);

  async function fetchItems() {
    try {
      const res = await api.get("/admin/menu");
      setItems(res.data);
    } catch {
      toast.error("Neuspešno učitavanje menija");
    } finally {
      setLoading(false);
    }
  }

  function startEdit(item) {
    setForm({ ...item });
    setEditingId(item.id);
    setShowForm(true);
  }

  function startAdd() {
    setForm({ ...EMPTY_FORM, section: activeSection });
    setEditingId(null);
    setShowForm(true);
  }

  function cancelForm() {
    setShowForm(false);
    setEditingId(null);
    setForm(EMPTY_FORM);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (editingId) {
        await api.put(`/admin/menu/${editingId}`, form);
        toast.success("Stavka ažurirana");
      } else {
        await api.post("/admin/menu", form);
        toast.success("Stavka dodata");
      }
      cancelForm();
      fetchItems();
    } catch {
      toast.error("Greška pri čuvanju");
    }
  }

  async function handleDelete(id) {
    if (!window.confirm("Obrisati ovu stavku?")) return;
    try {
      await api.delete(`/admin/menu/${id}`);
      toast.success("Stavka obrisana");
      fetchItems();
    } catch {
      toast.error("Brisanje neuspešno");
    }
  }

  async function toggleAvailable(item) {
    try {
      await api.put(`/admin/menu/${item.id}`, {
        ...item,
        available: !item.available,
      });
      toast.success(
        item.available ? "Stavka sakrivena" : "Stavka prikazana",
      );
      fetchItems();
    } catch {
      toast.error("Greška pri ažuriranju");
    }
  }

  function handleLogout() {
    logout();
    navigate("/admin/login");
  }

  const filtered = useMemo(
    () => items.filter((i) => i.section === activeSection),
    [items, activeSection],
  );

  // Preserve DB ordering (category_order then alpha)
  const categories = useMemo(() => {
    const seen = new Set();
    const list = [];
    for (const i of filtered) {
      if (!seen.has(i.category)) {
        seen.add(i.category);
        list.push(i.category);
      }
    }
    return list;
  }, [filtered]);

  if (loading) return <div className="p-8 text-center">Učitavanje...</div>;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top bar */}
      <header className="bg-navy text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">22 Square Bar — Admin</h1>
        <button
          onClick={handleLogout}
          className="tap-target text-sm hover:text-orange transition-colors"
        >
          Odjava
        </button>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-6">
        {/* Section tabs */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {SECTIONS.map((s) => (
            <button
              key={s}
              onClick={() => setActiveSection(s)}
              className={`tap-target px-4 py-2 rounded-lg font-semibold capitalize transition-colors
                ${
                  activeSection === s
                    ? "bg-navy text-white"
                    : "bg-white text-navy hover:bg-gray-200"
                }`}
            >
              {s}
            </button>
          ))}
          <button
            onClick={startAdd}
            className="tap-target ml-auto px-4 py-2 bg-orange text-white font-bold rounded-lg hover:bg-orange-soft transition-colors"
          >
            + Dodaj stavku
          </button>
        </div>

        {/* Items grouped by category */}
        {categories.length === 0 && (
          <p className="text-gray-500 text-center py-10">
            Nema stavki. Dodaj prvu!
          </p>
        )}
        {categories.map((cat) => (
          <section key={cat} className="mb-6" aria-labelledby={`admin-cat-${cat}`}>
            <h2 id={`admin-cat-${cat}`} className="text-orange font-bold text-lg mb-2 uppercase">
              {cat}
            </h2>
            <div className="bg-white rounded-xl shadow-card overflow-hidden">
              {filtered
                .filter((i) => i.category === cat)
                .map((item) => (
                  <div
                    key={item.id}
                    className={`flex items-center justify-between gap-3 px-4 py-3 border-b last:border-0 transition-opacity
                      ${!item.available ? "opacity-60" : ""}`}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="font-semibold text-navy truncate">
                          {item.name}
                        </p>
                        {!item.available && (
                          <span className="text-[10px] uppercase tracking-wider font-bold bg-red-100 text-red-700 px-2 py-0.5 rounded-full">
                            Nedostupno
                          </span>
                        )}
                      </div>
                      {item.description && (
                        <p className="text-sm text-gray-500 truncate">
                          {item.description}
                        </p>
                      )}
                    </div>
                    <p className="font-bold text-navy mx-2 whitespace-nowrap tabular-nums">
                      {formatPrice(item.price)}
                    </p>
                    <div className="flex gap-2 flex-shrink-0">
                      <button
                        onClick={() => toggleAvailable(item)}
                        className={`tap-target text-xs px-2 py-1 rounded font-semibold transition-colors
                          ${
                            item.available
                              ? "bg-green-100 text-green-700 hover:bg-green-200"
                              : "bg-gray-200 text-gray-500 hover:bg-gray-300"
                          }`}
                        aria-pressed={item.available}
                      >
                        {item.available ? "Aktivno" : "Skriveno"}
                      </button>
                      <button
                        onClick={() => startEdit(item)}
                        className="tap-target text-xs px-2 py-1 bg-navy text-white rounded hover:bg-navy-deep transition-colors"
                      >
                        Izmeni
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="tap-target text-xs px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                      >
                        Obriši
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </section>
        ))}
      </main>

      {/* Add/Edit modal */}
      {showForm && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="form-title"
        >
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 animate-fade-up">
            <h2 id="form-title" className="text-xl font-bold text-navy mb-4">
              {editingId ? "Izmeni stavku" : "Dodaj stavku"}
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <select
                value={form.section}
                onChange={(e) => setForm({ ...form, section: e.target.value })}
                className="border rounded-lg px-3 py-2 tap-target"
              >
                {SECTIONS.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <input
                placeholder="Kategorija (npr. BURGERI)"
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="border rounded-lg px-3 py-2 tap-target"
                required
              />
              <input
                type="number"
                placeholder="Redosled kategorije (1 = prva)"
                value={form.category_order}
                onChange={(e) =>
                  setForm({ ...form, category_order: e.target.value })
                }
                className="border rounded-lg px-3 py-2 tap-target"
              />
              <input
                placeholder="Naziv"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="border rounded-lg px-3 py-2 tap-target"
                required
              />
              <input
                placeholder="Opis (opciono)"
                value={form.description || ""}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
                className="border rounded-lg px-3 py-2 tap-target"
              />
              <input
                type="number"
                placeholder="Cena"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                className="border rounded-lg px-3 py-2 tap-target"
                required
              />
              <input
                type="number"
                placeholder="Redosled u kategoriji (0 = prvo)"
                value={form.sort_order}
                onChange={(e) =>
                  setForm({ ...form, sort_order: e.target.value })
                }
                className="border rounded-lg px-3 py-2 tap-target"
              />
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={form.available}
                  onChange={(e) =>
                    setForm({ ...form, available: e.target.checked })
                  }
                />
                Vidljivo na javnom meniju
              </label>
              <div className="flex gap-2 mt-2">
                <button
                  type="submit"
                  className="tap-target flex-1 bg-navy text-white font-bold py-2 rounded-lg hover:bg-orange transition-colors"
                >
                  {editingId ? "Sačuvaj" : "Dodaj"}
                </button>
                <button
                  type="button"
                  onClick={cancelForm}
                  className="tap-target flex-1 bg-gray-200 text-gray-700 font-bold py-2 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Otkaži
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
