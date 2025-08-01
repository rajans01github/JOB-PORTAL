import Companies from "../Landingpage/Companies";
import DreamJobs from "../Landingpage/Dreamjob";
import Jobcategory from "../Landingpage/JobCategory";
import Subscribe from "../Landingpage/Subscribe";
import Testimonials from "../Landingpage/Testimonials";
import Working from "../Landingpage/Working";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-[#1a1a1a] font-['Poppins']">
      <DreamJobs />
      <Companies />
      <Jobcategory />
      <Working />
      <Testimonials />
      <Subscribe />
      <div className="pb-20" /> {/* bottom spacing to avoid white space clash */}
    </div>
  );
};

export default Homepage;
