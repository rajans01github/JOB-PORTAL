import { Carousel } from "@mantine/carousel";
import { jobCategory } from "../Data/Data";

const Jobcategory = () => {
  return (
    <div className="mt-20 pb-5">
      <div className="text-4xl text-center font-semibold mb-3 text-mine-shaft-100">
        Browse <span className="text-bright-sun-400">Job</span> Category
      </div>
      <div className="text-lg mb-10 mx-auto text-mine-shaft-400 text-center w-1/2">
        Search top jobs aligned with your passion and skills. Start your dream journey today!
      </div>

      <Carousel
       slideSize="22%"
       slideGap="md"
       emblaOptions={{
       loop: true,      // Enables infinite loop
       dragFree: true   // Allows smooth dragging without snapping
  }}
>
        {jobCategory.map((category, index) => (
          <Carousel.Slide >
            <div className="flex flex-col items-center w-64 mx-auto mt-10 gap-2 border border-bright-sun-400 p-5 rounded-xl hover:cursor-pointer hover:shadow-[0_0_5px_2px_black] my-5 transition duration-300 ease-in-out !shadow-bright-sun-300">
              <div className="p-2 bg-bright-sun-300 rounded-full">
                <img
                  className="h-8 w-8"
                  src={`/Category/${category.name}.png`} // ✅ Auto path if matched correctly
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

export default Jobcategory;
