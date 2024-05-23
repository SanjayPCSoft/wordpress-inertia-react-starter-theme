import React from 'react'
import { Link } from '@inertiajs/react'


export default function MainLayout({ children }) {
    return (
        <>

            <main>
                {children}
            </main>
            <header style={{
                display: 'flex',
                gap: '2rem',
                padding: '1rem',
            }}>
                <Link href="/">Home</Link>
                <Link href="/sample-page">Sample</Link>
                <a href="/kndsalkfnaslkd">404</a>
            </header>
        </>

    )
}
