"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./globals.css";
import "./page.module.css";
import Sidenav from "./components/Sidenav";

export default function Home() {
  
  return (
    <div style={{ '--header-zIndex': 100, paddingRight: '6px' }} className="relative z-[100] pr-1.5">
    <div className="flex h-full bg-gray-800 justify-center relative">
      <div className="w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            
            <Link
              href="/"
              aria-label="Home"
              className="inline-flex items-center gap-2 justify-center rounded font-semibold whitespace-nowrap transition disabled:pointer-events-none disabled:opacity-50 focus:outline-2 focus:outline-offset-2 active:scale-95 bg-transparent text-white hover:bg-transparent hover:text-white text-sm leading-none"
            >
              <div className="wrap normal" data-content="sweeps-hide">
                <svg id="Logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 499.9" className="text-gray-200">
                  {/* Add SVG paths here */}
                </svg>
              </div>
            </Link>
          </div>

          <section>
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                className="inline-flex items-center gap-2 justify-center rounded font-semibold whitespace-nowrap transition disabled:pointer-events-none disabled:opacity-50 focus:outline-2 focus:outline-offset-2 active:scale-95 bg-transparent text-white hover:bg-transparent hover:text-white text-sm py-3 px-4"
                data-testid="login-link"
              >
                Sign In
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-2 justify-center rounded font-semibold whitespace-nowrap transition disabled:pointer-events-none disabled:opacity-50 focus:outline-2 focus:outline-offset-2 active:scale-95 bg-blue-500 text-white hover:bg-blue-600 text-sm py-3 px-4 shadow-md"
                data-testid="register-link"
                
              >
                Register
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
  );
}
