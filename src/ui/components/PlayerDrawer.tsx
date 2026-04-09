"use client";
import { PropsWithChildren, useState } from "react";
import { Drawer } from "vaul";

const PlayerDrawer = ({ children }: PropsWithChildren) => {
  const [snap, setSnap] = useState<number | string | null>("160px");

  return (
    <Drawer.Root
      snapPoints={["160px", 0.97]}
      open={true}
      dismissible={false}
      activeSnapPoint={snap}
      setActiveSnapPoint={setSnap}
      modal={false}
      noBodyStyles
    >
      <Drawer.Overlay className="fixed inset-0 bg-black/40" />
      <Drawer.Portal>
        <Drawer.Content className="fixed flex flex-col z-20 border-neutral-700 bg-neutral-800 rounded-t-[10px] bottom-0 left-0 right-0 h-full max-h-[100%]">
          {children}
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default PlayerDrawer;
