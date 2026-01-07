import { FiSettings } from "react-icons/fi";
import { GrDocument } from "react-icons/gr";

const QuickAction = () => {
  return (
    <section className="bg-panel-background rounded-xl flex mt-6 flex-col gap-5 px-5 py-5 lg:py-6 border-3 border-border-line shadow-md shadow-[rgba(0,0,0,0.5)] hover:shadow-lg hover:cursor-pointer w-full">
      <h1 className="font-bold md:text-[15px] lg:text-[19px]">Quick Actions</h1>
      <div className="flex flex-row justify-between gap-5 items-center px-5 py-4 rounded-xl hover:bg-deep-dark border border-muted-gray">
        <div className="flex justify-center items-center gap-4">
          <div className="">
            <FiSettings size={25} className="text-blue-tone" />
          </div>
          <div>
            <p className="font-bold text-light-gray">Update Services</p>
            <p className="text-mold-yellow">Edit service offer</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between gap-5 items-center px-5 py-4 rounded-xl hover:bg-deep-dark border border-muted-gray">
        <div className="flex justify-center items-center gap-4">
          <div className="">
            <GrDocument size={25} className="text-blue-tone" />
          </div>
          <div>
            <p className="font-bold text-light-gray">Edit Homepage</p>
            <p className="text-mold-yellow">Update hero and content</p>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between gap-5 items-center px-5 py-4 rounded-xl hover:bg-deep-dark border border-muted-gray">
        <div className="flex justify-center items-center gap-4">
          <div className="">
            <GrDocument size={25} className="text-blue-tone" />
          </div>
          <div>
            <p className="font-bold text-light-gray">Edit Aboutpage</p>
            <p className="text-mold-yellow">Update hero and content</p>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between gap-5 items-center px-5 py-4 rounded-xl hover:bg-deep-dark border border-muted-gray">
        <div className="flex justify-center items-center gap-4">
          <div className="">
            <GrDocument size={25} className="text-blue-tone" />
          </div>
          <div>
            <p className="font-bold text-light-gray">Edit Contactpage</p>
            <p className="text-mold-yellow">Update numbers and address</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickAction;
