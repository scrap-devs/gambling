'use client'

// Import necessary libraries and components
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

// Define the Sidenav component
export default function Sidenav({ sidebarOpen, setSidebarOpen}) {
    const { status } = useSession();
    const router = useRouter();
  
    const showSession = () => {
      if (status === "authenticated") {
        return (
          <button
            className=""
            onClick={() => {
              signOut({ redirect: false }).then(() => {
                router.push("/");
              });
  
            }}
          >
            Sign Out
          </button>
        )
      } else if (status === "loading") {
        return (
          <span className="text-[#888] text-sm mt-7">Loading...</span>
        )
      } else {
        return (
          <Link
            href="/login"
            className=""
          >
            Sign In
          </Link>
        )
      }
    }

  // Define state for sidebar expansion
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  // Create a reference to the sidebar element
  const sidebar = useRef(null);

  // Effect to add or remove a class to the body element based on sidebar expansion
  useEffect(() => {
    const body = document.querySelector("body");
    body.classList.toggle("sidebar-expanded", sidebarExpanded)
  }, [sidebarExpanded]);

  return (
    <>
      {/* Sidebar backdrop (visible on mobile only) */}
      <div
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className={`fixed inset-0 border-r border-gray-200 sm:translate-x-0 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
  id="sidebar"
  ref={sidebar}
  className={`fixed flex flex-col z-40 left-0 top-0 h-screen overflow-y-scroll no-scrollbar ${
    sidebarExpanded ? "w-64" : "w-20"
  } bg-white border-r border-gray-200 p-4 transition-all duration-200 ${
    sidebarOpen ? "translate-x-0" : "-translate-x-72"
  }`}
>
  {/* Sidebar header */}
  <div className="flex justify-between pr-3 sm:px-2">
    {/* Sidebar Logo */}
    <Link href="/">
      <span
        className={`${
          sidebarExpanded ? "lg:hidden" : "block"
        } welcome-step text-2xl font-medium tracking-tighter text-black focus:outline-none focus:ring whitespace-nowrap cursor-pointer`}
      >
        <Image
          className="mt-2 mb-8 h-100 w-32"
          src="/openai.png"
          height={32}
          width={300}
          alt="logo"
        />
      </span>
    </Link>

    {/* Sidebar Icon (Collapsed) */}
    <Link href="/">
      <Image
        className={`${
          !sidebarExpanded ? "lg:hidden" : "block"
        } mt-1 mb-8 h-8 w-8`}
        src="/openai-icon.png"
        height={100}
        width={100}
        alt="logo"
      />
    </Link>
  </div>

  {/* Links */}
  <div className="space-y-4">
    {/* Rest of the sidebar content here */}
    <ul className="space-y-2">
            <li>
              <Link
                onClick={() => setSidebarOpen(false)}
                href="/jobs"
                className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 transistion-colors duration-150"
              >
                <span className="flex items-center text-base text-gray-900 rounded-lg hover:bg-gray-100 transistion-colors duration-150">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>

                  <span
                    className={`${
                      sidebarExpanded
                        ? "opacity-100 ml-3 block"
                        :  "lg:hidden opacity-0 ml-0"
                    }ml-3 whitespace-nowrap `}
                  >
                    Games
                  </span>
                </span>
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setSidebarOpen(false)}
                href=""
                className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100  font-light transistion-colors duration-150"
              >
                <span className="flex items-center text-base text-gray-900 rounded-lg hover:bg-gray-100  transistion-colors duration-150">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>

                  <span
                    className={`${
                      sidebarExpanded
                        ? "opacity-100 ml-3 block"
                        :  "lg:hidden opacity-0 ml-0"
                    }ml-3 whitespace-nowrap `}
                  >
                    {showSession()}
                  </span>
                </span>
              </Link>
            </li>
            <li></li>
          </ul>
  </div>

  {/* Expand / collapse button */}
  <div className="pt-3 lg:inline-flex mt-auto">
    <div className="flex-1" />
    <div className="px-3 py-2 justify-end">
      <button
        onClick={() => {
          setSidebarExpanded(!sidebarExpanded);
        }}
      >
        <span className="sr-only">Expand / collapse sidebar</span>
        <svg
          className={`w-6 h-6 fill-current ${
            !sidebarExpanded ? "rotate-180" : "rotate-0"
          }`}
          viewBox="0 0 24 24"
        >
          <path
            d="M10.5 19.5L3 12M3 12L10.5 4.5M3 12H21"
            stroke="#0F172A"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  </div>
</div>
    </>
  );
}
