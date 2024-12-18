"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SessionProvider, useSession } from "next-auth/react";
import { CiMenuBurger } from "react-icons/ci";
import { updateCoins } from "@/actions/updateCoins";

export default function Topbar() {
  const { status, data: session, update } = useSession();
  const redirect = () => {
    if (status === "authenticated") {
      return "/profile";
    } else {
      return "/login";
    }
  };

  const showLoggedin = () => {
    if (status === "authenticated") {
      return (
        <span className="text-white">Welcome, {session?.user?.name}</span>
      );
    }
  };

  return (
    <>
      <div className="flex w-full h-12 bg-zinc-900 justify-between items-center shadow-2xl">
        <div>
          <Link href="/" className="flex items-center">
            <Image
              className="ml-2 h-100 w-100"
              src="/images/mainicon.png"
              height={32}
              width={32}
              alt="logo"
            />
            <span className="flex ml-2 text-white content-center">
              Coin Craze
            </span>
          </Link>
        </div>
        <div className="text-white">
          Coins: {session?.user?.coins}
        </div>
        <div className="flex items-center">
          {showLoggedin()}
          <Link href={redirect()}>
            <Image
              className="ml-2 h-100 w-100"
              src="/images/loginicon.png"
              height={32}
              width={32}
              alt="logo"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
