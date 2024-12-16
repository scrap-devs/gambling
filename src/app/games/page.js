// Import necessary libraries and components
import React from 'react';
import Image from "next/image";
import Link from 'next/link';

export default function Games() {
    return (<>
        <div className="bg-black w-screen h-screen box-border">

            <div id="card-container" className="flex justify-center flex-wrap">
                <div id="card" className="w-325px bg-white rounded overflow-hidden shadow-sm m-5 text-center">

                    <Image
                        src="/images/crash.png"
                        width={200}
                        height={200}>

                    </Image>
                    <div id="card-content">
                        <Link href="games/crashGame" className='p-2'>Crash Game</Link>
                    </div>
                </div>
                <div id="card" className="w-325px bg-white rounded overflow-hidden shadow-sm m-5 text-center">

                    <Image
                        src="/images/crash.png"
                        width={200}
                        height={200}>

                    </Image>
                    <div id="card-content">
                        <Link href="/crashGame/page.js"><p>Plinko</p></Link>
                    </div>
                </div>
                <div id="card" className="w-325px bg-white rounded overflow-hidden shadow-sm m-5 text-center">

                    <Image
                        src="/images/crash.png"
                        width={200}
                        height={200}>

                    </Image>
                    <div id="card-content">
                        <Link href="/crashGame">Blackjack</Link>
                    </div>
                </div>
            </div>

        </div>
    </>)
}