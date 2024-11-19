"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./globals.css";
import "./page.module.css";
import Sidenav from "./components/Sidenav";

export default function Home() {
  return (
      <div className="w-screen h-screen bg-zinc-800">
          {/*Top Componenet */}
          <div className="bg-zinc-900 flex flex-row w-screen h-40">
            <div className="text-white basis-0 grow">alksdjflk;sadjf</div>
            <div className="text-white basis-0 grow">alksdjflk;sadjf</div>
          </div>
        {/*Middle Component */}
        <div className="bg-dark-black flex flex-row basis-0 grow-1 justify-between">
            askjdfnhkjasdf
            </div>
      </div>

  );
}
