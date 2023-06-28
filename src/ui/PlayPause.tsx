"use client";
import { PauseCircle, PlayCircle } from "phosphor-react";
import React from "react";

type PlayPauseProps = {
  state: "paused" | "playing";
  onClickPause: () => void;
  onClickPlay: () => void;
  size?: number;
};
const PlayPause = ({
  state,
  onClickPause,
  onClickPlay,
  size = 56,
}: PlayPauseProps) => {
  return state === "paused" ? (
    <button onClick={onClickPlay}>
      <PlayCircle weight="duotone" size={size} />
    </button>
  ) : (
    <button onClick={onClickPause}>
      <PauseCircle weight="duotone" size={size} />
    </button>
  );
};

export default PlayPause;
