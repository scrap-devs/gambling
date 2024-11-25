"use client";
import { useSession, SessionProvider, signOut } from "next-auth/react";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";


export default function Profile() {
  const submit = 3; // handle database updates for profile pictures
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      // The user is not authenticated, handle it here.
      redirect("/login");
    },
  });
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <>
      <div className="w-full h-screen bg-slate-800 flex items-center justify-center text-white">
        <div className="m-2 border border-white rounded-md">
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
          <SessionProvider>
            <div className="px-2">
              <div className="pt-3">Account name: {session?.user?.name}</div>
              <div className="pt-3">Account email: {session?.user?.email}</div>
            </div>
          </SessionProvider>
          <div className="p-2">
            <button
              className="border border-solid border-white rounded p-1"
              onClick={() => {
                signOut({ redirect: false }).then(() => {
                  router.push("/login");
                });
              }}
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
