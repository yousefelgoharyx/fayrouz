"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  House,
  MusicNote,
  Bookmark,
  Books,
  Playlist,
  Gear,
  User,
} from "phosphor-react";
import React from "react";
import Tooltip from "./Tooltip";
const links = [
  {
    title: "Home",
    href: "/",
    icon: House,
  },
  {
    title: "Songs",
    href: "/all-songs",
    icon: MusicNote,
  },
  {
    title: "Favourites",
    href: "/favourites",
    icon: Bookmark,
  },
  {
    title: "Bio",
    href: "/bio",
    icon: Books,
  },
  {
    title: "Playlists",
    href: "/playlists",
    icon: Playlist,
  },
];
const SidebarLinks = () => {
  const pathname = usePathname();
  return (
    <div className=" z-50 flex flex-1 items-center justify-around gap-6 overflow-hidden border-t border-neutral-700 bg-neutral-800 py-6 lg:flex-col lg:justify-start ">
      {links.map((link) => {
        const weight = pathname === link.href ? "fill" : "duotone";
        return (
          <Tooltip key={link.title} title={link.title}>
            <Link href={link.href}>
              <link.icon size={24} weight={weight} />
            </Link>
          </Tooltip>
        );
      })}
    </div>
  );
};

export default SidebarLinks;
