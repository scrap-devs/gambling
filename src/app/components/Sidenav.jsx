'use client'

// Import necessary libraries and components
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { CiMenuBurger } from "react-icons/ci";
import { IoIosHome } from "react-icons/io";


// Define the Sidenav component
export default function Sidenav({ sidebarOpen, setSidebarOpen }) {
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
        className={`fixed inset-0 border-r bg-gray-800 border-gray-200 sm:translate-x-0 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`fixed flex flex-col bg-gray-800 z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar lg:sidebar-expanded:w-20 shrink-0 ${sidebarExpanded ? "w-56" : "w-20"
          } p-4 transition-all duration-200 ${sidebarOpen ? "translate-x-0" : "-translate-x-72"
          }`}
      >
        <div className="flex flex-column sm:px-2">
          {/* Expand / collapse button */}

          <div className="pb-3 justify-end">
            <div className="pb-5">
              <button
                onClick={() => {
                  setSidebarExpanded(!sidebarExpanded);
                }}
              >
                <CiMenuBurger color="white" size={25} />
              </button>
            </div>
            <div>
              <Link href="/">
                <IoIosHome color="white" size={25} className="inline-block" />
                <span className={`pl-6 text-white ${sidebarExpanded ? "opacity-100" : "hidden pointer-events-none"}`}>
                  Home
                </span>


              </Link >
            </div>
          </div>
        </div>





      </div>
    </>
  );
}
