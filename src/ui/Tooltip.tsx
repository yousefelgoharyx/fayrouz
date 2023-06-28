"use client";
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useHover,
  useInteractions,
  FloatingPortal,
  useTransitionStyles,
} from "@floating-ui/react";
import React, { useState } from "react";
type TooltipProps = {
  children: React.ReactNode;
  title: string;
};

const Tooltip = ({ children, title }: TooltipProps) => {
  const [open, setOpen] = useState(false);
  const { x, y, strategy, refs, context } = useFloating({
    open,
    onOpenChange: setOpen,
    placement: "right",
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(5),
      flip({
        fallbackAxisSideDirection: "start",
        crossAxis: false,
      }),
      shift(),
    ],
  });
  const hover = useHover(context, { move: false });
  const { isMounted, styles } = useTransitionStyles(context, {
    open: {
      transform: "scale(1)",
      opacity: 1,
    },
    close: {
      transform: "scale(0.8)",
      opacity: 0,
    },
    duration: 300,
  });
  const { getReferenceProps, getFloatingProps } = useInteractions([hover]);

  return (
    <>
      <FloatingPortal>
        {isMounted && (
          <div
            className="z-50 hidden rounded-lg bg-neutral-800 bg-opacity-80 p-2 text-xs sm:block"
            ref={refs.setFloating}
            style={{
              position: strategy,
              top: y ?? 0,
              left: x ?? 0,
              ...styles,
            }}
            {...getFloatingProps()}
          >
            {title}
          </div>
        )}
      </FloatingPortal>
      <div ref={refs.setReference} {...getReferenceProps}>
        {children}
      </div>
    </>
  );
};

export default Tooltip;
