import { Outlet } from "react-router-dom";
import AdminSidebar from "./components/AdminSidebar";
import HeaderNav from "./components/layout/HeaderNav";
import { useState, useEffect } from "react";
import Login from "./pages/Login";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./../firebase/firebase";
import { Toaster } from "react-hot-toast";

const AdminLayout = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<any>(null); // current logged in admin
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(true);
    });
    return () => unsubscribe();
  }, []);

  const handleLogOut = async () => {
    await signOut(auth);
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#1e1e2f]">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-[rgb(170,143,82)] border-t-transparent"></div>
      </div>
    );
  }
  if (!user) return <Login onLogin={() => {}} />;

  return (
    <section className="flex min-h-screen text-white">
      <HeaderNav open={open} setOpen={setOpen} />

      <div className="hidden lg:flex">
        <AdminSidebar onLogOut={handleLogOut} />
      </div>

      {open && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/40"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-72 h-full bg-panel-background"
            onClick={(e) => e.stopPropagation()}
          >
            <AdminSidebar onLogOut={handleLogOut} />
          </div>
        </div>
      )}

      <div className="flex-1 flex flex-col">
        <main className="p-6">
          <Outlet />
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              success: {
                duration: 3000,
                iconTheme: { primary: "#1a243e", secondary: "#aa8f52" },
                style: { background: "white", color: "black" },
              },
              error: {
                iconTheme: { primary: "#dc2626", secondary: "#ffffff" },
                style: { background: "#fef2f2", color: "#991b1b" },
              },
            }}
          />
        </main>
      </div>
    </section>
  );
};

export default AdminLayout;
