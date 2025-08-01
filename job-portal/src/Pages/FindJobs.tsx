import SearchBar from "../FindJobs/Searchbar";
const FindJob = () => {
  return (
    <div className="min-h-screen bg-[#1a1a1a] font-['Poppins']">
      <SearchBar/>
     <h1> FIND JOBS PAGE</h1>
      <div className="pb-20" /> {/* bottom spacing to avoid white space clash */}
    </div>
  );
};

export default FindJob;
