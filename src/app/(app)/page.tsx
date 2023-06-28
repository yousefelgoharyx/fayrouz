import TodaysSelection from "../../components/home/TodaysSelection";
import { Suspense } from "react";
export default function Home() {
  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">Today&apos;s Selection</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <TodaysSelection />
      </Suspense>
    </div>
  );
}

