"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";

import { redirect } from "next/navigation";

async function fetchTeam(id) {
  const res = await fetch("https://...");
  if (!res.ok) return undefined;
  return res.json();
}

export default function Profile() {
  const submit = 3; // handle database updates for profile pictures
  const { status } = useSession();
  if (status === "authenticated") { // CHANGE TO != LATER
    redirect("/login");
  }
  return (
    <>
      <div className="w-full h-screen bg-slate-800 flex items-center justify-center text-white">
        <div className="border border-white rounded-md">
          <div className="p-3">
            <Image
              className="mr-3 inline-block rounded-full"
              src="/images/download.jpeg" // Need to be pulled from database
              width={64}
              height={64}
            ></Image>
            Profile picture
          </div>
          <div className="p-3">Account name:</div>
        </div>
      </div>
    </>
  );
}
