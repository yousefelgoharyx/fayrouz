import React from "react";
import SongsCarousel from "../../ui/SongsCarousel";
import Song from "@/ui/components/Song";
import { SongAPI } from "@/server/network/songs";
import converDuration from "@/utils/convertDuration";

type TodaysSelectionProps = {
  songs: SongAPI.TSong[];
};
function TodaysSelection({ songs }: TodaysSelectionProps) {
  return (
    <SongsCarousel>
      {songs.map((song) => (
        <Song
          duration={converDuration(song.duration)}
          image={`${process.env.SERVER_URL}/${song.image}`}
          url={`${process.env.SERVER_URL}/${song.url}`}
          name={song.name}
          liked={false}
          key={song.id}
          id={song.id}
        />
      ))}
    </SongsCarousel>
  );
}

export default TodaysSelection;
