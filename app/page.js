"use client"
import { useEffect, useState } from "react";
import DynamicGauge from "./components/DynamicGauge";

export default function Home() {
  const [score, setScore] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScore(Math.floor(Math.random() * 91)); // Generates a random number between 0 and 90
    }, 1000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#141415]">
      <div className="mx-auto w-[300px] h-auto">
        <DynamicGauge score={score} />
      </div>
    </main>
  );
}
