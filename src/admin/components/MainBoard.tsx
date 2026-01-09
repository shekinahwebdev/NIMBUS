import { FiSettings } from "react-icons/fi";
import { GrDocumentText } from "react-icons/gr";
import RecentPages from "../components/RecentPages";
import QuickAction from "../components/QuickAction";
import { BsEye } from "react-icons/bs";
import { BiImage } from "react-icons/bi";

interface MainBoardProps {
  onNavigate: (view: string) => void;
}
const MainBoard = ({ onNavigate }: MainBoardProps) => {
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

  return (
    <div className="py-10 md:px-4 md:py-5 flex w-full flex-col justify-center text-white">
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
      <div className="flex flex-col lg:flex-row lg:gap-3 lg:items-start">
        <RecentPages />
        <QuickAction />
      </div>
    </div>
  );
};

export default MainBoard;
