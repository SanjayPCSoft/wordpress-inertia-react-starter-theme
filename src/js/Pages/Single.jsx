import React from 'react'
import MainLayout from '../Layouts/MainLayout'
import { usePage } from '@inertiajs/react'

export default function Single() {
    const a = usePage().props
    console.log(a);
    return (
        <MainLayout>
            <div>Single</div>
        </MainLayout>
    )
}
