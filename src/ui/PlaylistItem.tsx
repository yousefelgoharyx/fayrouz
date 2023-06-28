"use client";
import React from "react";
import { useRouter } from "next/navigation";
type PlaylistItemProps = {
  title: string;
  songs: number;
  id: number;
};

const PlaylistItem = (props: PlaylistItemProps) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/playlists/${props.id}`)}
      className={`relative flex aspect-square h-auto cursor-pointer select-none flex-col items-center justify-center rounded-md bg-neutral-800 transition-transform active:scale-95`}
    >
      <h2 className="text-xl font-bold">{props.title}</h2>
      <h3 className="text-white/70">
        {props.songs} {props.songs > 1 ? "songs" : "song"}
      </h3>
    </div>
  );
};

export default PlaylistItem;
