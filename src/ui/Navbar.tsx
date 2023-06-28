import Link from "next/link";
import React from "react";
import BellIcon from "../icons/Bell";
import CaretDownIcon from "../icons/CaretDown";
import GearIcon from "../icons/Gear";
import NavbarSearch from "./NavbarSearch";

const Navbar = () => {
  return (
    <nav className="my-6 flex flex-[0_1_48px] items-center gap-4">
      <div className="flex-1">
        <NavbarSearch />
      </div>
      <div className="flex h-full items-center gap-4">
        <Link href="/settings">
          <GearIcon size={32} weight="duotone" />
        </Link>
        <div className="flex h-full overflow-hidden rounded-full bg-neutral-800">
          <div className="h-[48px] w-[48px] rounded-full bg-red-400"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
