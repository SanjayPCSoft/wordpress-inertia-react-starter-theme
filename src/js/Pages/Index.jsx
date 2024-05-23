
import { usePage } from '@inertiajs/react'
import React from 'react'
import MainLayout from '../Layouts/MainLayout'

export default function Index() {
    const a = usePage().props
    return (
        <MainLayout>
            <div>Homepage</div>
            <p dangerouslySetInnerHTML={{ __html: a?.page?.post_content }} />
            <p>Comming from Inertia js</p>
        </MainLayout>

    )
}
