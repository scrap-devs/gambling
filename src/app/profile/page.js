"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";

import { redirect } from "next/navigation";



export default function Profile() {
  const submit = 3; // handle database updates for profile pictures
  const {data: session} = useSession()
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      // The user is not authenticated, handle it here.
      redirect('/login')
    },
  })

  return (
    <>
      <div className="w-full h-screen bg-slate-800 flex items-center justify-center text-white">
        <div className="border border-white rounded-md">
          <div className="flex p-3 items-center">
            <Image
              className="mr-3 rounded-full"
              src="/images/download.jpeg" // Need to be pulled from database
              width={64}
              height={64}
              alt="Profile picture"
            ></Image>
            <span>Profile Picture</span>
          </div>
          <div className="p-3">Account name: {}</div>
        </div>
      </div>
    </>
  );
}
