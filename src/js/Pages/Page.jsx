import React from 'react'
import MainLayout from '../Layouts/MainLayout'
import { usePage } from '@inertiajs/react';

export default function Page() {
    const a = usePage().props
    return (
        <MainLayout>
            <div>Page Content</div>
            <p dangerouslySetInnerHTML={{ __html: a?.page?.post_content }} />
            <p>Comming from Inertia js</p>
        </MainLayout>
    )
}
