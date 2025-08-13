import { Divider } from "@mantine/core";
import SearchBar from "../FindJobs/Searchbar";

const FindJob = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['Poppins']">
      <Divider size="xs" m={0} />
      <SearchBar />
    </div>
  );
};

export default FindJob;
