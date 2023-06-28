import React from "react";
import SongsCarousel from "../../ui/SongsCarousel";
import Song from "./Song";

async function TodaysSelection() {
  return (
    <SongsCarousel>
      {/* {songs.data?.map((song: any) => (
        <Song
          duration={song.duration}
          image={song.image}
          title={song.title}
          url={song.url}
          key={song.id}
        />
      ))} */}
    </SongsCarousel>
  );
}

export default TodaysSelection;

