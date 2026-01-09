import { GrDocument } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const RecentPages = () => {
  const navigate = useNavigate();
  const pages = [
    {
      id: "Home",
      time: "2 hours",
      state: "Published",
      icon: <GrDocument size={19} />,
    },
    {
      id: "About",
      time: "1 hour ago",
      state: "Published",
      icon: <GrDocument size={19} />,
    },
    {
      id: "Service",
      time: "2 days ago",
      state: "Draft",
      icon: <GrDocument size={19} />,
    },
    {
      id: "Contact",
      time: "3 days ago",
      state: "Published",
      icon: <GrDocument size={19} />,
    },
  ];
  return (
    <section
      className="bg-panel-background rounded-xl flex flex-col gap-5 px-5 py-5 lg:py-6 border-3 border-border-line shadow-[0_12px_30px_rgba(0,0,0,0.5)]
        hover:shadow-[0_16px_40px_rgba(0,0,0,0.6)]
        transition-shadow duration-300 hover:cursor-pointer w-full"
    >
      <h1 className="font-bold md:text-[15px] lg:text-[19px]">Recent Pages</h1>
      <div className="flex flex-col flex-wrap lg:gap-3">
        {pages.map((page) => (
          <button
            key={page.id}
            onClick={() => navigate(page.id)}
            className="flex flex-row flex-wrap justify-between gap-5 items-center px-5 py-4 rounded-xl hover:bg-deep-dark/30"
          >
            <div className="flex justify-center items-center gap-4">
              <div className="bg-blue-tone px-2 py-3 rounded-sm">
                {page.icon}
              </div>
              <div className="flex flex-col  gap-1 text-left">
                <p className="font-bold text-light-gray">{page.id}</p>
                <p className="text-mold-yellow ">{page.time}</p>
              </div>
            </div>
            <div className="lg:text-sm text-deep-dark">
              <p
                className={`py-2 px-4 rounded-md ${
                  page.state == "Published"
                    ? "bg-bright-green"
                    : "bg-cyan-hightlight"
                }`}
              >
                {page.state}
              </p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default RecentPages;
