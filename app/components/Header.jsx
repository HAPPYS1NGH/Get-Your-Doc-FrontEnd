'use client'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from 'wagmi';

function Header() {
    const { isConnected } = useAccount()
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
            <div className='flex space-x-4'>
                <ConnectButton chainStatus="none" showBalance={false} />
                {
                    isConnected
                    &&
                    <div className='bg-gray-200 rounded-full p-1'>
                        <Link href="/profile">
                            <Image src="/images/user.png" alt="Profile" width={40} height={40} />
                        </Link>
                    </div>
                }
            </div>

        </header >
    )
}

export default Header