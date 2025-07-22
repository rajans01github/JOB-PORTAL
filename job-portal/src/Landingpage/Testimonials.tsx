import { Avatar, Rating } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { testimonials } from "../Data/Data";
import "@mantine/carousel/styles.css";

const Testimonials = () => {
  return (
    <div className="mt-20  px-4 md:px-10">
      {/* Heading */}
      <div className="text-4xl text-center font-semibold mb-10 text-mine-shaft-100">
        What user <span className="text-bright-sun-400">Say's</span> About Us?
      </div>

      {/* Carousel */}
      <div className="group relative ">
        <Carousel
          slideSize="32%"
          slideGap="xl"
          withControls
          draggable
          className="relative"
          controlSize={30}
          styles={{
            control: {
              opacity: 0,
              transition: "opacity 0.3s ease-in-out",
              backgroundColor: "transparent",
              color: "#fcd34d",
              border: "2px solid #fcd34d",
            },
          }}
          emblaOptions={{
            loop: true,
            dragFree: true,
          }}
        >
          {testimonials.map((data, index) => (
            <Carousel.Slide key={index}>
              <div className="flex flex-col mb-10 mt-10 gap-5 border border-bright-sun-400 px-6 py-6 rounded-xl hover:cursor-pointer hover:shadow-[0_0_5px_2px_#ffbd20] my-5 transition duration-300 ease-in-out hover:scale-105">
                {/* Avatar + Name + Rating */}
                <div className="flex items-center gap-4">
                  <Avatar className="!h-14 !w-14" src="avatar.png" alt={data.name} />
                  <div className="flex justify-between items-center w-full">
                    <div className="text-base font-semibold text-mine-shaft-100">{data.name}</div>
                    <Rating value={data.rating} readOnly />
                  </div>
                </div>

                {/* Testimonial */}
                <div className="text-sm text-mine-shaft-200 leading-relaxed">
                  {data.testimonial}
                </div>
              </div>
            </Carousel.Slide>
          ))}
        </Carousel>

        {/* Hover Control Visibility */}
        <style>
          {`
            .group:hover .mantine-Carousel-control {
              opacity: 1 !important;
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default Testimonials;
