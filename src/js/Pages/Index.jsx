
import { Link, usePage } from '@inertiajs/react'
import React from 'react'

export default function Index() {
    const a = usePage().props

    return (
        <div>Hello world home
            <p>
                <Link href='/'>home</Link>
                <Link href='/404/'>404</Link>
            </p>
            <nav>
                <Link href="/this-page-does-not-exist">404 Page</Link>
                <Link href="/sample-page">Sample Page</Link>
            </nav>
        </div>

    )
}
