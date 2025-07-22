import { Avatar } from "@mantine/core";
import { work } from "../Data/Data";
const Working = () => {
  return (
    <div className="mt-20 pb-5 overflow-visible">
      {/* Title */}
      <div className="text-4xl text-center font-semibold mb-3 text-mine-shaft-100">
        How It <span className="text-bright-sun-400">Works</span>
      </div>

      {/* Subtitle */}
      <p className="text-lg mx-auto text-mine-shaft-300 text-center w-1/2 mb-10">
        Let your skills guide the way — discover roles where you truly belong.
      </p>

      {/* Main Content Layout */}
      <div className="flex gap-12 px-16 items-center justify-between flex-wrap md:flex-nowrap">
        {/* Left - Girl Image + Avatar Inside */}
        <div className="w-full md:w-1/2 flex flex-col items-center gap-4 relative">
          <img
            className="w-[30rem] max-w-full"
            src="/Working/Girl.png"
            alt="Working girl illustration"
          />

          {/* Avatar card inside the image with hover animation */}
          <div className="absolute top-[15%] right-12 w-40 flex flex-col items-center gap-1 border border-bright-sun-300 rounded-xl py-3 px-2 backdrop-blur-md shadow-lg transition-transform duration-300 hover:scale-105">
            <Avatar className="!h-16 !w-16" src="/avatar1.png" alt="It's me" size="lg" />
            <div className="text-sm font-semibold text-mine-shaft-300 text-center">
              Complete your profile
            </div>
            <div className="text-sm font-semibold text-mine-shaft-300 text-center">
              75% completed
            </div>
          </div>
        </div>

        {/* Right - Work Steps */}
        <div className="flex flex-col gap-10 w-full md:w-1/2">
          {work.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="p-2.5 bg-bright-sun-300 rounded-full">
                <img
                  className="h-12 w-12"
                  src={`/Working/${item.name}.png`}
                  alt={item.name}
                />
              </div>
              <div>
                <div className="text-mine-shaft-200 text-xl font-semibold">
                  {item.name}
                </div>
                <div className="text-mine-shaft-300">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Working;
