import React from "react";
import Grid from "../../../ui/Grid";
import Heading from "../../../ui/Heading";

const page = async () => {
  return (
    <div className="mb-8">
      <Heading title="Favourites" />
      <Grid>
        {/* {songs.data?.map((song: any) => (
          <Song
            duration={song.duration}
            image={song.image}
            title={song.title}
            url={song.url}
            key={song.id}
          />
        ))} */}
      </Grid>
    </div>
  );
};

export default page;

