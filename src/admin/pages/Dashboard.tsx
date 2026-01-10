import { useState } from "react";
import MainBoard from "../components/MainBoard";
import PageEditor from "./PageEditor";

const Dashboard = () => {
  const [currentRoute, setCurrentRoute] = useState("/admin");

  // function for login
  // function to logout
  // function for navigate

  return (
    <section className="md:px-0 flex flex-row text-white relative">
      {currentRoute == "/admin" ? (
        <MainBoard />
      ) : (
        <PageEditor pageId={currentRoute} />
      )}
    </section>
  );
};

export default Dashboard;
