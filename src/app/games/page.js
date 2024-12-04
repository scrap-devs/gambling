// Import necessary libraries and components
import React from 'react';
import Image from "next/image";
import Link from 'next/link';

export default function Games() {
    return (<>
    <div>
        Game selections
        <div>
            <Link href="/testGame">
            testGame
            </Link>
        </div>
    </div>
    </>)
}