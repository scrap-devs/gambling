"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { CiMenuBurger } from "react-icons/ci";

export default function Topbar() {
  const { status } = useSession();
  const redirect = () => {
    if (status === "authenticated") {
      return "/profile";
    } else {
      return "/login";
    }
  };

  return (
    <>
      <div className="flex w-full h-12 bg-zinc-900 justify-between items-center">
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
        <div className="text-white">Coins: {}</div>
        <div>
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
