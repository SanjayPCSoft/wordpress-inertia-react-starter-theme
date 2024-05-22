import React from 'react'
import { Link } from '@inertiajs/react'


export default function MainLayout({ children }) {
    return (
        <>
            <header>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/kndsalkfnaslkd">Contact</Link>
            </header>
            <main>
                {children}
            </main>
        </>

    )
}
