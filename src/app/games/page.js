// Import necessary libraries and components
import React from 'react';
import Image from "next/image";
import Link from 'next/link';

export default function Games() {
    return (<>
    <div className="flex flex-col bg-black w-screen h-screen">
        <div className="flex h-20 w-screen bg-zinc-800 text-2xl align-middle"> Top Games</div>
        <div className="flex-row bg-zinc-700 p-2 pt-5 h-screen w-screen">
            <Link href="" className="text-black rounded-xl border border-blue bg-blue-50 hover:shadow-xl text-xl p-4"> Test Game </Link>
            <Link href="/games/blackjack" className="text-black rounded-xl border border-blue bg-blue-50 hover:bg-white text-xl p-4"> Blackjack </Link>
            <Link href="/games/" className="text-black rounded-xl border border-blue bg-blue-50 hover:shadow-xl text-xl p-4">  Plinko </Link>
        </div>
    </div>
    </>)
}