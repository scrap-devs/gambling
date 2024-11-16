"use client";

import "./globals.css";
import { Provider } from "./provider";
import { Roboto } from 'next/font/google';
import Sidenav from "./components/Sidenav";
import Header from "./components/MobileHeader";
import Topbar from "./components/Topbar";
import React, { useEffect, useState } from 'react';


const roboto = Roboto({ subsets: ['latin'], weight: '300' });

export default function RootLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Marks the component as mounted
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    handleResize(); // Initial resize check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!mounted) return null; // Av oids rendering until mounted

  return (
    <html lang="en">
      <Provider>
        <body className={roboto.className}>
          <div className="flex h-screen ">
            <div>
              {/* Render the Sidenav component */}
              <Sidenav
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
            </div>

            <div className="relative flex flex-col flex-1 lg:overflow-y-auto lg:overflow-x-hidden">
              {/* Render the Header component if in mobile mode */}
              {isMobile && (
                <Header
                  setSidebarOpen={setSidebarOpen}
                  className="sticky top-0 bg-white border-b border-slate-200 z-30"
                />
              )}
              {/* Render the main content */}
              
              <div>
              {!isMobile && (
                <Topbar />
              )}
              </div>
              
              <main>{children}</main>
            </div>
          </div>
          <div className="flex w-screen bg-gray-800">
            <div>
              {/* Render the TopBar component */}
            </div>
          </div>
        </body>
      </Provider>
    </html>
  );
}