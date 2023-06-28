"use client";

import { MagnifyingGlass } from "phosphor-react";
import { useSearchState } from "../atoms/searchAtom";

const NavbarSearch = () => {
  const [query, setQuery] = useSearchState();
  return (
    <div className="relative">
      <MagnifyingGlass
        className="absolute top-[12px] left-[16px]"
        size={24}
        weight="duotone"
      />
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Search"
        className="h-[48px] w-full rounded-full bg-neutral-800 px-4 pl-[48px] text-sm outline-none"
      />
    </div>
  );
};

export default NavbarSearch;
