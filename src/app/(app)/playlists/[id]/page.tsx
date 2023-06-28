import Link from "next/link";
import React from "react";
import PlaylistSettings from "../../../../components/playlists/PlaylistSettings";
import CaretLeftIcon from "../../../../icons/CaretLeft";
import PlaylistSong from "../../../../ui/PlaylistSong";

const page = async () => {
  return (
    <>
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2">
            <Link href="/playlists">
              <CaretLeftIcon size={32} weight="bold" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold uppercase">Morning</h1>
              <h3 className="text-sm text-neutral-400">1 Song</h3>
            </div>
          </div>

          <PlaylistSettings />
        </div>
        <div className="mt-6 flex flex-col gap-[1px] overflow-hidden rounded-md">
          {/* {songs.data?.map((song, i) => (
            <PlaylistSong
              title={song.title}
              duration={song.duration}
              image={song.image}
              rank={i}
              url={song.url}
              key={song.id}
            />
          ))} */}
        </div>
      </div>
    </>
  );
};

export default page;

