import Navbar from '@/components/Navbar'
import React from 'react'

const page = ({params}) => {
    return (
        <div className='w-screen h-screen bg-gradient-to-br from-[#0F2027] via-[#2C5364] to-[#2C5364]'>
            <Navbar/>
            {params.course}
        </div>
    )
}

export default page