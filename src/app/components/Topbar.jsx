'use client'

import React from "react"
import Image from "next/image";
import Link from "next/link";

export default function Topbar() {
    return (<>
        <div className="flex w-full h-12 bg-white justify-between">

            <Link href="/">
                <Image
                    className="mt-2 mb-8 h-100 w-100"
                    src="/images/mainicon.png"
                    height={32}
                    width={32}
                    alt="logo"
                />
            </Link>
            <div>Coin Craze</div>
            <div>
            Login
            </div>

        </div>
    </>);

}