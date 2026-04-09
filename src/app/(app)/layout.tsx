import SidebarLinks from "../../ui/SidebarLinks";
import Navbar from "../../ui/Navbar";
import Player from "@/ui/components/Player/Player";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-1 flex-col overflow-hidden md:flex-row-reverse">
      <div className="flex flex-1 overflow-auto">
        <div className="container relative flex flex-1 flex-col">
          <Navbar />
          <main className="mb-4 flex flex-1 flex-col">{children}</main>
        </div>
      </div>

      <div className=" flex-[0_0_300px] bg-neutral-700 hidden md:flex">
        <Player />
      </div>
      <div className="flex flex-[0_0_80px] bg-slate-700">
        <SidebarLinks />
      </div>

      <audio id="global-audio" autoPlay={false} />
    </div>
  );
}

export default RootLayout;
