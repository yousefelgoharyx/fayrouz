"use client";
import Image from "next/image";
import { DotsThreeCircleVertical, Heart, PlayCircle } from "phosphor-react";
import Spinner from "./Spinner";

export type UISongProps = {
  image: string;
  title: string;
  duration: string;
  isLiked: boolean;
  isLoading: boolean;
  onPlay: () => void;
  onLike: () => void;
};
const UISong = (props: UISongProps) => {
  const { image, title, duration, isLiked, isLoading } = props;
  const handleLike = () => {
    props.onLike();
  };
  const handlePlay = () => {
    props.onPlay();
  };

  return (
    <div className="relative aspect-[6/4.5] overflow-hidden rounded-2xl">
      <Image src={image} fill alt="Song 1" />
      <div className="absolute bottom-2 left-0 mx-2 w-[calc(100%_-_16px)] rounded-xl bg-neutral-700/30 p-3 px-4 backdrop-blur-sm">
        <div className="flex items-center justify-between gap-2">
          <div className="overflow-hidden">
            <h1 className="text-md flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
              {title}
            </h1>
            <h2 className="text-xs text-gray-400">{duration}</h2>
          </div>

          <div className="flex gap-2 ">
            <button onClick={handleLike}>
              <Heart
                size={28}
                weight={isLiked ? "fill" : "duotone"}
                color={isLiked ? "red" : "white"}
              />
            </button>
            {isLoading ? (
              <Spinner size={28} />
            ) : (
              <PlayCircle
                size={28}
                weight="duotone"
                className="cursor-pointer transition-transform active:scale-90"
                onClick={handlePlay}
              />
            )}
            <DotsThreeCircleVertical
              className="cursor-pointer"
              size={28}
              weight="duotone"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UISong;
