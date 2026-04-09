import { Suspense } from "react";
import TodaysSelection from "../../components/home/TodaysSelection";
import { SongAPI } from "@/server/network/songs";
export default async function Home() {
  const songs = await SongAPI.get();
  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">Today&apos;s Selection</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <TodaysSelection songs={songs} />
      </Suspense>
    </div>
  );
}
