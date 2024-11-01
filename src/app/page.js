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
      <div className="bg-gray-900 h-screen"></div>
    </>
  );
}
