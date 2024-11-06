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

    const menuItems = [
      {
        label: "Top Games",
        href: "/profile",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
        ),
      },
      {
        label: "Profile",
        href: "/profile",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 12c2.485 0 4.5-2.015 4.5-4.5S14.485 3 12 3 7.5 5.015 7.5 7.5 9.515 12 12 12zm0 2.25c-2.691 0-8.25 1.354-8.25 4.5v1.5h16.5v-1.5c0-3.146-5.559-4.5-8.25-4.5z"
            />
          </svg>
        ),
      },
      {
        label: "Sign In",
        href: "/login", // Default href
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
        ),
        action: () => {
          if (status === "authenticated") {
            // If authenticated, sign out
            signOut({ redirect: false }).then(() => {
              router.push("/");
            });
          } else {
            // If not authenticated, navigate to login
            router.push("/login");
          }
        },
      },
    ];
  
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
        className={`fixed inset-0 border-r bg-gray-800 border-gray-200 sm:translate-x-0 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
  id="sidebar"
  ref={sidebar}
  className={`fixed flex flex-col bg-gray-700 z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar lg:sidebar-expanded:w-20 shrink-0 ${
    sidebarExpanded ? "w-56" : "w-20"
  } p-4 transition-all duration-200 ${
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
          className="mt-2 mb-8 h-100 w-100"
          src="/images/mainicon.png"
          height={32}
          width={32}
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
        src="/images/mainicon.png"
        height={32}
        width={32}
        alt="logo"
      />
    </Link>
  </div>

  {/* Links */}
 {/* Menu Items */}
 <div className="space-y-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                onClick={() => setSidebarOpen(false)}
                href={item.href}
                className="flex items-center p-3 text-base text-white rounded-lg hover:bg-gray-500 transition-colors duration-150"
              >
                <span className="flex items-center">
                  {item.icon}
                  <span
                    className={`${
                      sidebarExpanded ? "opacity-100 ml-3 block text-sm" : "lg:hidden opacity-0 ml-0"
                    } ml-3 whitespace-nowrap`}
                  >
                    {item.label}
                  </span>
                </span>
              </Link>
            </li>
          ))}
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
