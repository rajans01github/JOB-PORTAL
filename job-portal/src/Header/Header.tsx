import { Avatar, Indicator, Tooltip } from '@mantine/core';
import {  IconBellSchool, IconDeviceTabletSearch, IconLocationHeart, IconSettings } from '@tabler/icons-react';
import NavLinks from './Naviations';
 

const Header = () => {
  return (
    <div className="w-full bg-mine-shaft-950 px-6 text-white h-20 flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex gap-3 text-center text-bright-sun-400 animate-pulse">
      <IconDeviceTabletSearch className="h-10 w-9" stroke={2} />
      <div className="text-3xl font-semibold">HireNest</div>
      </div>


      {NavLinks()}

      <div className="flex gap-5 items-center">
        <div className="flex gap-2 items-center">
          <div className="text-white">RAJAN</div>
          <Avatar
            component="a"
            href="https://github.com/rajans01github"
            target="_blank"
            src="avtar01.png"
            alt="RAJAN"
            radius="xl"
          />
        </div>
        <div className='bg-mine-shaft-900 p-1.5 rounded-full'>
            
            <Indicator color="brightSun.4" position="top-start" size={9} offset={4} processing>
            <IconBellSchool />
            </Indicator>
        </div >
        <div className='bg-mine-shaft-900 p-1.5 rounded-full'>
            <IconSettings />  
        </div>
      </div>
    </div>
  );
};

export default Header;
