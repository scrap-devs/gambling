// Import React library
import React from "react";
import Link from "next/link";
import Image from "next/image";

// Define the MobileHeader component
export default function MobileHeader({ sidebarOpen, setSidebarOpen }) {
  return (
    // Header container with sticky behavior, background, and border
    <header className="sticky top-0 bg-gray-800 border-b border-slate-200 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">
          {/* Header: Left side */}
          <div className="flex">
            {/* Hamburger button for toggling sidebar visibility */}
            <button
              className="text-slate-500 hover:text-slate-600 lg:hidden"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={(e) => {
                e.stopPropagation();
                setSidebarOpen(!sidebarOpen);
              }}
            >
              <span className="sr-only">Open sidebar</span>
              {/* Hamburger icon */}
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="4" y="5" width="16" height="2" />
                <rect x="4" y="11" width="16" height="2" />
                <rect x="4" y="17" width="16" height="2" />
              </svg>
            </button>
          </div>

          <div className="text-white">Coins: {}</div>

          <div>
            <Link href="/login">
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
      </div>
    </header>
  );
}
