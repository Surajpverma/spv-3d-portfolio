"use client"

import { Suspense, useState } from "react";
import CanvasThree from "./CanvasThree";
import { LoadingScreen } from "./components/LoadingScreen";


export default function Home() {

  const [started, setStarted] = useState(false);

  return (
    <main className="w-full h-full fixed top-0 left-0">

        {started && <CanvasThree />}

      <LoadingScreen started={started} setStarted={setStarted} />
    </main>
  )
}
