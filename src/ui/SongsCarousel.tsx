"use client";

import useEmblaCarousel from "embla-carousel-react";

const SongsCarousel = ({ children }: { children: React.ReactNode }) => {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    inViewThreshold: 0.1,
  });

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="grid auto-cols-[80%] grid-flow-col gap-4 sm:auto-cols-[60%] md:auto-cols-[40%] lg:auto-cols-[45%] xl:auto-cols-[35%]">
        {children}
      </div>
    </div>
  );
};

export default SongsCarousel;
