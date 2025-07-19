import { Carousel } from "@mantine/carousel";
import { jobCategory } from "../Data/Data";

const JobCategory = () => {
  return (
    <div className="mt-20  pb-5 overflow-visible">
      <div className="text-4xl text-center font-semibold mb-3 text-mine-shaft-100">
        Browse <span className="text-bright-sun-400">Job</span> Category
      </div>
      <div className="text-lg mx-auto text-mine-shaft-300 text-center w-1/2">
        Explore diverse job opportunities tailored to your skills. Start your career journey today!
      </div>

      <Carousel
        slideSize="22%"
        slideGap="md"
        withControls
        draggable
        emblaOptions={{
          loop: true,
          dragFree:true
        }}
      >
        {jobCategory.map((category, index) => (
          <Carousel.Slide >
            <div className="flex flex-col items-center w-64 mx-auto mt-10 gap-2 border border-bright-sun-400 p-5 rounded-xl hover:cursor-pointer hover:shadow-[0_0_5px_2px_#ffbd20] my-5 !shadow-bright-sun-400 transition duration-300 ease-in-out">
              <div className="p-2 bg-bright-sun-300 rounded-full">
                <img
                  className="h-8 w-8"
                  src={`/Category/${category.name}.png`}
                  alt={category.name}
                />
              </div>
              <div className="text-mine-shaft-100 text-xl font-semibold mt-2">
                {category.name}
              </div>
              <div className="text-sm text-mine-shaft-300 text-center px-2">
                {category.desc}
              </div>
              <div className="text-bright-sun-300 text-lg mt-1">
                {category.jobs}+ New Jobs Posted
              </div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default JobCategory;
