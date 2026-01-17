import { useState } from "react";
import MainBoard from "../components/MainBoard";
import PageEditor from "./PageEditor";

const Dashboard = () => {
  const [currentRoute, setCurrentRoute] = useState("/admin");

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
