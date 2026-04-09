"use client";
import { useState } from "react";
import PlayerContent from "./PlayerContent.mobile";
import { Drawer } from "vaul";

const PlayerMobile = () => {
  const [snap, setSnap] = useState<number | string | null>("160px");

  return (
    <Drawer.Root
      snapPoints={["160px", 1]}
      open={true}
      dismissible={false}
      activeSnapPoint={snap}
      setActiveSnapPoint={setSnap}
      modal={false}
      noBodyStyles
    >
      <Drawer.Overlay className="fixed inset-0 bg-black/40" />
      <Drawer.Portal className="outline-none">
        <Drawer.Content className="fixed outline-none flex flex-col z-20  bottom-0 left-0 right-0 h-full max-h-[100%]">
          <PlayerContent open={snap === 1} />
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default PlayerMobile;
