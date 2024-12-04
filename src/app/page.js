"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./globals.css";
import "./page.module.css";
import Leaderboard from "./components/Leaderboard";

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
        <div className="flex items-center justify-center bg-zinc-800 w-full p-8 space-x-20">
          <div className="flex flex-col items-center p-6 rounded-lg shadow-lg w-400">
            <span className="text-white w-1/2">Fun starts here.</span>
            <button href="/Login" className="rounded-full pr-6 pl-6 content-center w-fit p-2 text-sm bg-blue-400">
              Register now
            </button>
            <span>OR</span>
            <div className="w-full flex flex-row justify-between">
              <button className="w-fit text-sm rounded-none content-center">
                Google
              </button>
              <button className="w-fit">
                Something
              </button>
              <button className="w-fit">
                Apple
              </button>
            </div>
          </div>
          <figure class="max-w-lg">
            <img class="h-auto max-w-full rounded-lg" src="/docs/images/examples/image-3@2x.jpg" alt="image description"></img>
            <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">Image caption</figcaption>
          </figure>
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
