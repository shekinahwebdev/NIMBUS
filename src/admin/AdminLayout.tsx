import { Outlet, useNavigate } from "react-router-dom";
import AdminSidebar from "./components/AdminSidebar";
import HeaderNav from "./components/layout/HeaderNav";
import { useState } from "react";
import Login from "./pages/Login";
const AdminLayout = () => {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggin] = useState(false);

  const handleLogIn = () => {
    setIsLoggin(true);
  };

  const handleLogOut = () => {
    setIsLoggin(false);
  };

  //   if (!isLoggedIn) {
  //     return <Login onLogin={handleLogIn} />;
  //   }

  return (
    <>
      {!isLoggedIn ? (
        <Login onLogin={handleLogIn} />
      ) : (
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
            </main>
          </div>
        </section>
      )}
    </>
  );
};

export default AdminLayout;
