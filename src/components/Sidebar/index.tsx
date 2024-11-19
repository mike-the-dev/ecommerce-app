"use client";
import * as SolarIconSet from "solar-icon-set";
import Link from 'next/link'

const Sidebar: React.FC = (): React.ReactElement => {
  return (
    <div className="w-[300px] border-r-small min-h-screen p-[24px]">
      <div className="flex flex-col py-[90px]">
        <Link href="/desk">
          <div className="flex items-center h-[44px] py-[6px] px-[12px]">
            <SolarIconSet.Home2 color="#1C274C" size={24} /> <div className="pl-[10px] w-full">Home</div>
          </div>
        </Link>
        <Link href="/desk/create">
          <div className="flex items-center py-[6px] px-[12px]">
            <SolarIconSet.LayersMinimalistic color="#1C274C" size={24} /> <div className="pl-[10px] w-full">Integrations</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar