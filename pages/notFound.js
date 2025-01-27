import Image from 'next/image'
import React from 'react'
import Image1 from '@/public/assets/images/404-error-page-templates.jpg'
export default function NotFound() {
    return (
        <div>
            <a href='/'>
                <Image title="Hero image description" src={Image1} className='h-screen mx-auto' alt="mask" />
            </a>
        </div>
    )
}
