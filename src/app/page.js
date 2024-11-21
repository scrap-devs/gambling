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
      <div className="bg-zinc-900 flex flex-row w-screen h-1/5">
        <div className="text-white basis-0 grow">alksdjflk;sadjf</div>
        <div className="text-white basis-0 grow">alksdjflk;sadjf</div>
      </div>
      {/*Middle Component */}
      <div className="bg-dark-black flex flex-row basis-0 grow-1 content-center justify-between h-1/5">
        askjdfnhkjasdf
      </div>
      {/*Leaderboard */}
      <div className="bg-zinc-700 h-3/5 w p-20 border-2 justify-center">
        <h1 className="text-white">Leaderboard</h1>
            <ul>
              <li>
                skjapdff
              </li>
            </ul>
          </div>
        </div>

  );
}
