import SidebarLinks from "../../ui/SidebarLinks";
import Navbar from "../../ui/Navbar";
import Player from "../../ui/Player";
import LgPlayer from "../../ui/LgPlayer";

function SidebarSlot({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-[0_0_80px] bg-slate-700">{children}</div>;
}

function PlayerSlot({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-[0_0_80px] lg:hidden">{children}</div>;
}

function LgPlayerSlot({ children }: { children: React.ReactNode }) {
  return (
    <div className="hidden flex-[0_0_300px] bg-neutral-700 lg:flex">
      {children}
    </div>
  );
}

function ContentSlot({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1 overflow-auto">
      <div className="container relative flex flex-1 flex-col">{children}</div>
    </div>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-1 flex-col-reverse overflow-hidden lg:flex-row">
      {children}
    </div>
  );
}

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      <SidebarSlot>
        <SidebarLinks />
      </SidebarSlot>
      <PlayerSlot>
        <Player />
      </PlayerSlot>
      <LgPlayerSlot>
        <LgPlayer />
      </LgPlayerSlot>
      <ContentSlot>
        <Navbar />
        <main className="mb-4 flex flex-1 flex-col">{children}</main>
      </ContentSlot>
    </Layout>
  );
}

export default RootLayout;
