const Jobcategory = () => {
  return (
    <div className="mt-20 pb-5">
      <div className="text-4xl text-center font-semibold mb-3 text-mine-shaft-100">
        Browse <span className="text-bright-sun-400">Job</span> Category
      </div>
      <div className="text-lg mx-auto text-mine-shaft-400 text-center w-1/2">
        Search top jobs aligned with your passion and skills. Start your dream journey today!
      </div>

      <div className="flex flex-col items-center w-64 mx-auto mt-10">
        <div className="p-2 bg-bright-sun-300 rounded-full">
          <img className="h-8 w-8" src="/Category/Digital Marketing.png" alt="Digital Marketing" />
        </div>
        <div className="text-mine-shaft-100 text-xl font-semibold mt-2">Digital Marketing</div>
        <div className="text-sm text-mine-shaft-300 text-center px-2">
          Discover marketing roles with leading brands and top startups.
        </div>
        <div className="text-bright-sun-300 text-lg mt-1">1K+ New Jobs Posted</div>
      </div>
    </div>
  );
};

export default Jobcategory;

