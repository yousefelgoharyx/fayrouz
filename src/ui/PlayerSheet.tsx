"use client";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import { useRef, useLayoutEffect, ReactNode } from "react";

const PlayerSheet = ({ children }: { children: ReactNode }) => {
  const screenHeight = useRef(0);
  const lastPos = useRef(0);
  const isOpen = useRef(false);
  useLayoutEffect(() => {
    screenHeight.current = window.innerHeight - 160;
  }, []);
  const [{ y }, api] = useSpring(() => ({ y: 0 }));
  const bind = useDrag(
    (e) => {
      const my = e.movement[1];
      // if (my > 0 && my < 70 && !isOpen.current) e.cancel();

      // implement swipe down to close player
      if (e.last) {
        if (e.swipe[1] < 0) {
          api.start({ y: -screenHeight.current });
          lastPos.current = -screenHeight.current;
          isOpen.current = true;
        } else if (e.swipe[1] > 0) {
          api.start({ y: 0 });
          lastPos.current = 0;
          isOpen.current = false;
        }
      }
      // api.start({ y: my + lastPos.current });
    },
    {
      filterTaps: false,
      bounds: { bottom: 0 },
      rubberband: true,
    }
  );
  return (
    <animated.div
      {...bind()}
      style={{ y }}
      className="fixed  z-40 flex h-full w-full flex-1 touch-none select-none flex-col border-neutral-700 bg-neutral-800"
    >
      <div className="relative flex flex-1 flex-col overflow-hidden">
        {children}
      </div>
      <div className="mt-4 flex-[80px_0_0]"></div>
    </animated.div>
  );
};

export default PlayerSheet;
