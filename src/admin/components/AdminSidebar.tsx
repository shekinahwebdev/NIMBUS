import { FiSettings } from "react-icons/fi";
import { GrDocumentText } from "react-icons/gr";
import { HiHome } from "react-icons/hi";
import { LuLogOut } from "react-icons/lu";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { Link } from "react-router";

const AdminSidebar = () => {
  const status = [
    { id: "home", label: "Home", icon: <HiHome size={20} /> },
    { id: "about", label: "About", icon: <GrDocumentText size={20} /> },
    {
      id: "service",
      label: "Services",
      icon: <FiSettings size={20} />,
    },
    {
      id: "contact",
      label: "Contact",
      icon: <GrDocumentText size={20} />,
    },
  ];
  return (
    <div className="lg:w-96 lg:flex flex-col relative justify-between py-4 bg-panel-background border-border-line border-r-2">
      <div className="flex flex-col">
        <div className="flex flex-row items-center px-5 gap-3 border-b-2 border-border-line py-9">
          <div className="p-3 bg-mold-yellow rounded-xl">
            <FiSettings size={20} />
          </div>
          <div className="flex-col flex gap-2 items-center justify-center">
            <p>Nimbus CMS</p>
            <p className="text-mold-yellow text-sm">Admin Panel</p>
          </div>
        </div>
        <div className="flex flex-col px-5 py-5">
          <Link
            to="/admin"
            className="flex flex-row items-center gap-4 text-blue-tone p-5 rounded-xl bg-deep-dark"
          >
            <MdOutlineSpaceDashboard size={25} className="" />
            <p className="text-xl">Dashboard</p>
          </Link>

          <div className="flex flex-col py-5 mt-9">
            <h1 className="uppercase">Pages</h1>
            <div>
              {status.map((stat) => (
                <Link
                  to={stat.id}
                  key={stat.id}
                  className="flex flex-row mt-5 hover:bg-deep-dark/30 items-center gap-4 rounded-xl"
                >
                  <button
                    // onClick={() => onNavigate(stat.id)}
                    className="flex flex-row items-center gap-2 py-4 px-5 w-full rounded-xl hover:bg-deep-dark/30"
                  >
                    {stat.icon}
                    <p className="text-[16px]">{stat.label}</p>
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Link
        to=""
        className="flex flex-row mt-5 items-center gap-4 px-5  text-red-error"
      >
        <button className="flex flex-row items-center gap-2 py-4 px-5 w-full rounded-xl hover:bg-red-300/10">
          <LuLogOut />
          <p>Logout</p>
        </button>
      </Link>
    </div>
  );
};

export default AdminSidebar;
