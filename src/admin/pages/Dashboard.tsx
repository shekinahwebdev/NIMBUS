import { FiSettings } from "react-icons/fi";
import { GrDocumentText } from "react-icons/gr";
import AdminSidebar from "../components/AdminSidebar";
import RecentPages from "../components/RecentPages";
import QuickAction from "../components/QuickAction";
import { BsEye } from "react-icons/bs";
import { BiImage } from "react-icons/bi";
import HeaderNav from "../components/layout/HeaderNav";
import { useState } from "react";

const usageOverview = [
  { title: "Total Pages", number: 5, icon: <GrDocumentText size={25} /> },
  {
    title: "Daily Visits",
    number: 400,
    icon: <BsEye size={25} />,
  },
  {
    title: "Images Uploaded",
    number: 10000,
    icon: <BiImage size={25} />,
  },
  { title: "Services Active", number: 9, icon: <FiSettings size={25} /> },
];

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className="px-6 md:px-0 flex flex-row text-white relative">
      <HeaderNav open={open} setOpen={setOpen} />

      {/* Desktop sidebar */}
      <div className="hidden lg:flex">
        <AdminSidebar />
      </div>
      {open && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/40"
          onClick={() => setOpen(false)} // 👈 click outside closes
        >
          <div
            className="w-72 h-full bg-panel-background"
            onClick={(e) => e.stopPropagation()} // 👈 prevent close when clicking sidebar
          >
            <AdminSidebar />
          </div>
        </div>
      )}

      <div className="py-10 md:px-4 md:py-5 lg:px-10 flex w-full flex-col justify-center text-white">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-extrabold">Nimbus Overview</h1>
          <p className="text-mold-yellow font-bold md:text-[15px]">
            Welcome back! Here's what's happening with your website
          </p>
        </div>
        <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {usageOverview.map((usaage) => (
            <div
              key={usaage.title}
              className="bg-panel-background rounded-xl flex flex-row justify-between lg:gap-10 items-center  px-3 py-5 lg:px-4 lg:py-6 border-3 border-border-line shadow-md shadow-[rgba(0,0,0,0.5)] hover:shadow-lg hover:cursor-pointer w-full"
            >
              <div className="text-white flex flex-col gap-3">
                <p className="font-light md:text-[15px]">{usaage.title}</p>
                <p className="md:text-[13px]">{usaage.number}</p>
              </div>
              <div className="p-3 bg-mold-yellow rounded-xl">{usaage.icon}</div>
            </div>
          ))}
        </div>
        <RecentPages />
        <QuickAction />
      </div>
    </section>
  );
};

export default Dashboard;
