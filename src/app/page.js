"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./globals.css";
import "./page.module.css";
import Sidenav from "./components/Sidenav";

export default function Home() {
  return (
    <>
      <div className="h-screen bg-gray-900"></div>
      <button class="bg-white text-black py-2 px-4">button</button>
    </>
  );
}
