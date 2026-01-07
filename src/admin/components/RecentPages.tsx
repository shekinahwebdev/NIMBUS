import { GrDocument } from "react-icons/gr";

const RecentPages = () => {
  return (
    <section className="bg-panel-background rounded-xl flex flex-col gap-5 px-5 py-5 lg:py-6 border-3 border-border-line shadow-md shadow-[rgba(0,0,0,0.5)] hover:shadow-lg hover:cursor-pointer w-full">
      <h1 className="font-bold md:text-[15px] lg:text-[19px]">Recent Pages</h1>
      <div className="flex flex-row justify-between gap-5 items-center px-5 py-4 rounded-xl hover:bg-deep-dark/30">
        <div className="flex justify-center items-center gap-4">
          <div className="bg-blue-tone px-2 py-3 rounded-sm">
            <GrDocument size={19} />
          </div>
          <div>
            <p className="font-bold text-light-gray">Home</p>
            <p className="text-mold-yellow">2 hours ago</p>
          </div>
        </div>
        <div className="bg-bright-green py-2 px-4 lg:text-sm text-deep-dark rounded-md">
          <p>Published</p>
        </div>
      </div>
      <div className="flex flex-row justify-between gap-5 items-center px-5 py-4 rounded-xl hover:bg-deep-dark/30">
        <div className="flex justify-center items-center gap-4">
          <div className="bg-blue-tone px-2 py-3 rounded-sm">
            <GrDocument size={19} />
          </div>
          <div>
            <p className="font-bold text-light-gray">About</p>
            <p className="text-mold-yellow">1 hour ago</p>
          </div>
        </div>
        <div className="bg-bright-green py-2 px-4 lg:text-sm text-deep-dark rounded-md">
          <p>Published</p>
        </div>
      </div>
      <div className="flex flex-row justify-between gap-5 items-center px-5 py-4 rounded-xl hover:bg-deep-dark/30">
        <div className="flex justify-center items-center gap-4">
          <div className="bg-blue-tone px-2 py-3 rounded-sm">
            <GrDocument size={19} />
          </div>
          <div>
            <p className="font-bold text-light-gray">Services</p>
            <p className="text-mold-yellow">2 days ago</p>
          </div>
        </div>
        <div className="bg-cyan-hightlight py-2 px-4 lg:text-sm text-deep-dark rounded-md">
          <p>Draft</p>
        </div>
      </div>
      <div className="flex flex-row justify-between gap-5 items-center px-5 py-4 rounded-xl hover:bg-deep-dark/30">
        <div className="flex justify-center items-center gap-4">
          <div className="bg-blue-tone px-2 py-3 rounded-sm">
            <GrDocument size={19} />
          </div>
          <div>
            <p className="font-bold text-light-gray">Contact</p>
            <p className="text-mold-yellow">3 days ago</p>
          </div>
        </div>
        <div className="bg-bright-green py-2 px-4 lg:text-sm text-deep-dark rounded-md">
          <p>Published</p>
        </div>
      </div>
    </section>
  );
};

export default RecentPages;
