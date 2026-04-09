"use client";
import { useMediaQuery } from "@/client/hooks/use-media-query";
import PlayerDesktop from "./Player.desktop";
import PlayerMobile from "./Player.mobile";

const Player = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  if (isDesktop) return <PlayerDesktop />;
  return <PlayerMobile />;
};

export default Player;
