import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

function Header() {
    return (
        <header>
            <div>
                <Link href="/">
                    Get Your Doc
                </Link>
            </div>
            <div>
                <Link href="/">Home</Link>
                <Link href="/about">About Us</Link>
                <Link href="/services">Services</Link>
                <Link href="/contact">Contact Us</Link>
            </div>
        </header>
    )
}

export default Header