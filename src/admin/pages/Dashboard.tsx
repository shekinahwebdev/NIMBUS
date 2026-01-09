import AdminSidebar from "../components/AdminSidebar";
import HeaderNav from "../components/layout/HeaderNav";
import { useState } from "react";
import MainBoard from "../components/MainBoard";
import PageEditor from "./PageEditor";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [currentRoute, setCurrentRoute] = useState("dashboard");

  // function for login
  // function to logout
  // function for navigate
  const handleNavigate = (view: string) => {
    setCurrentRoute(view);
  };

  return (
    <section className="md:px-0 flex flex-row text-white relative">
      {/* <HeaderNav open={open} setOpen={setOpen} /> */}

      {/* Desktop sidebar */}
      {/* <div className="hidden lg:flex">
        <AdminSidebar />
      </div>
      {open && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/40"
          onClick={() => setOpen(false)} //
        >
          <div
            className="w-72 h-full bg-panel-background"
            onClick={(e) => e.stopPropagation()}
          >
            <AdminSidebar />
          </div>
        </div>
      )} */}

      {currentRoute == "dashboard" ? (
        <MainBoard onNavigate={handleNavigate} />
      ) : (
        <PageEditor pageId={currentRoute} />
      )}
    </section>
  );
};

export default Dashboard;
