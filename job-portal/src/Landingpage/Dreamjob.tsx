import { Avatar, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { motion } from "framer-motion";

const DreamJob = () => {
  return (
    <div className="flex items-center px-20 py-16">

      {/* Left Section */}
      <div className="flex flex-col w-[45%] gap-6">
        <motion.div
          className="text-6xl font-bold leading-tight text-mine-shaft-100 [&>span]:text-bright-sun-400"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Find your <span>dream <br /></span><span>job</span> with us
        </motion.div>

        <div className="text-mine-shaft-200 text-lg">
         Good life begins with a good company. Start exploring thousands of jobs in one place.
        </div>

        {/* Search Bar */}
        <div className="flex gap-3 items-center mt-5">
          <TextInput
            className="bg-mine-shaft-900 rounded-lg p-1 py-2 text-mine-shaft-100 w-full [&_input]:!text-mine-shaft-100"
            variant="unstyled"
            label="Job Title"
            placeholder="Software Engineer"
          />
          <TextInput
            className="bg-mine-shaft-900 rounded-lg p-1 py-2 text-mine-shaft-100 w-full [&_input]:!text-mine-shaft-100"
            variant="unstyled"
            label="Location"
            placeholder="Remote / City"
          />
          <div className="bg-bright-sun-400 p-3 rounded-lg cursor-pointer flex items-center h-full w-20 justify-center hover:bg-bright-sun-500">
            <IconSearch className="text-white w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-[55%] flex items-center justify-center">
        <div className="w-[30rem] relative">
          <img src="/Boy.png" alt="boy" />

          {/* Avatars Floating Box */}
          <div className="absolute top-[50%] -right-10 w-fit border-bright-sun-400 border rounded-lg p-2  backdrop-blur-md  shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="text-center mb-1 text-sm text-mine-shaft-100">
              20K+ Got Job
            </div>
            <Avatar.Group>
              <Avatar src="avatar.png" />
              <Avatar src="avatar1.png" />
              <Avatar src="avatar2.png" />
              <Avatar>+19K</Avatar>
            </Avatar.Group>
          </div>
          <div className="absolute top-[25%] -left-5 w-fit border-bright-sun-400 border rounded-lg p-2 backdrop-blur-md  transition-transform duration-300 hover:scale-105 shadow-lg gap-3 flex flex-col">
            <div className="flex gap-2 items-center">
             <div className="h-10 w-10 p-1 bg-mine-shaft-900 rounded-lg"> <img src="/Icons/Google.png" alt="" className="src" /></div>
             <div>
              <div className="text-sm text-mine-shaft-100">Software Engineer</div>
              <div className="text-mine-shaft-200 text-xs"> India </div>
             </div>
            </div>
            <div className="flex gap-2 justify-around text-mine-shaft-200 text-sm">
              <span> 1 day ago</span>
              <span>120 Applicants</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default DreamJob;