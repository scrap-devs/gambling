"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./globals.css";
import "./page.module.css";
import Leaderboard from "./components/Leaderboard";
import Image from "next/image";

export default function Home() {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      // The user is not authenticated, handle it here.

      <p>register</p>
    },
  })
  const notLoggedin = () => {
    if (status != "authenticated") {
      return (
        <div className="flex flex-wrap items-center justify-center bg-zinc-800 w-full p-8 ">
          <div className="flex flex-col items-center p-6 rounded-lg shadow-lg w-400">
            <span className="text-white w-56">The fun starts here.</span>
            <Link href="/register" className="rounded-full text-center pr-6 pl-6 mr-24 content-center w-56 p-2 text-sm bg-blue-400">
              Register now
            </Link>
          </div>
          <div>
            <Image
            className="h-25 w-25 rounded-lg" 
            src="/images/coincraze.png"
            width={300}
            height={300}
            >


            </Image>
            <p className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">Image caption</p>
          </div>
        </div>)

    }
    else {
      return (
        <div>
          <span className="text-white size-60 text-xl">Welcome</span>
        </div>
      )
    }
  }


  return (
    <div className="bg-zinc-800 h-screen w-screen">
      {notLoggedin()}
      <Leaderboard />
      <div className="flex justify-between">
        <div className="flex flex-col">
          <span className="text-xl text-white pl-4 pb-1">Coin Craze</span>
          <span className="text-xs text-white pl-4">2024 Coin Craze | All Rights Reserved.</span>
        </div>
      </div>
    </div>


  );
}
