"use client";
import React, { useState } from "react";
import { usePlayer } from "../../atoms/playerAtom";
import UISong from "../../ui/Song.new";

export type SongProps = {
  url: string;
  title: string;
  image: string;
  duration: string;
};

const Song = (props: SongProps) => {
  const player = usePlayer();
  const [loading, setLoading] = useState(false);
  const { url, ...rest } = props;
  const handlePlay = async () => {
    try {
      setLoading(true);
      await player.playSong(props);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <UISong
      {...rest}
      isLoading={loading}
      isLiked={false}
      onPlay={handlePlay}
      onLike={() => console.log("like")}
    />
  );
};

export default Song;
