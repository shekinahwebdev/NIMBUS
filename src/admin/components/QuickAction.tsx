import { FiSettings } from "react-icons/fi";
import { GrDocument } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const QuickAction = () => {
  const navigate = useNavigate();
  const actions = [
    {
      id: "service",
      title: "Update Services",
      subtitle: "Edit service offer",
      icon: <FiSettings size={19} className="text-blue-tone" />,
    },
    {
      id: "home",
      title: "Edit Homepage",
      subtitle: "Update hero and content",
      icon: <GrDocument size={19} className="text-blue-tone" />,
    },
    {
      id: "about",
      title: "Edit Aboutpage",
      subtitle: "Update hero and content",
      icon: <GrDocument size={19} className="text-blue-tone" />,
    },
    {
      id: "contact",
      title: "Edit Contactpage",
      subtitle: "Update numbers and address",
      icon: <GrDocument size={19} className="text-blue-tone" />,
    },
  ];
  return (
    <section
      className="bg-panel-background rounded-xl flex mt-6 lg:mt-0 flex-col gap-5 px-5 py-5 lg:py-6 border-3 border-border-line shadow-[0_12px_30px_rgba(0,0,0,0.5)]
        hover:shadow-[0_16px_40px_rgba(0,0,0,0.6)]
        transition-shadow duration-300 hover:cursor-pointer w-full"
    >
      <h1 className="font-bold md:text-[15px] lg:text-[19px]">Quick Actions</h1>
      <div className="flex flex-col gap-4">
        {actions.map((action) => (
          <button
            key={action.title}
            onClick={() => navigate(action.id)}
            className="flex flex-row justify-between gap-5 items-center px-5 py-4 rounded-xl hover:bg-deep-dark border border-muted-gray"
          >
            <div className="flex text-left justify-center items-center gap-4">
              <div className="">{action.icon}</div>
              <div>
                <p className="font-bold text-light-gray">{action.title}</p>
                <p className="text-mold-yellow">{action.subtitle}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default QuickAction;
