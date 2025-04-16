import Image from 'next/image'
import React from 'react'

function WithStyles({ description, headline, image, description2 }) {
    return (
        <div className='bg-[#0B3635] p-8 mx-3 rounded-xl h-full'>
            <p className='text-[22px] mb-3 text-[#00FFFC] Brockmann'>{headline}</p>
            <p className='text-[#95AAAD] Gilroy'>{description}</p>
            <div className='mt-3'>

                <p className='border-l-[1px] Gilroy border-[#00FFFC] text-[#95AAAD] pl-4' >Benefit : {description2}</p>
            </div>
        </div>
    )
}

export default WithStyles
