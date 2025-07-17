import Header from "../Header/Header";
import Companies from "../Landingpage/Companies";
import DreamJobs from "../Landingpage/Dreamjob";
import Jobcategory from "../Landingpage/JobCategory";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-mine-shaft-950 font-['poppins']">
      <Header />
      <DreamJobs />
      <Companies />
      <Jobcategory />
    </div>
  );
};

export default Homepage;
