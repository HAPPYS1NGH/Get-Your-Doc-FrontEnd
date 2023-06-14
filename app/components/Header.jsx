import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { ConnectButton } from "@rainbow-me/rainbowkit";

function Header() {
    return (
        <header className='flex justify-between items-center py-4 px-24'>
            <div className=''>
                <Link href="/">
                    Get Your Doc
                </Link>
            </div>
            <div className='flex space-x-12'>
                <Link href="/">Home</Link>
                <Link href="/about">About Us</Link>
                <Link href="/services">Services</Link>
                <Link href="/contact">Contact Us</Link>
            </div>
            <ConnectButton chainStatus="none" />
        </header >
    )
}

export default Header