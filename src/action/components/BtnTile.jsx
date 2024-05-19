import React from 'react'
import Vite from '../assets/logo.png'



const BtnTile = ({title, desc}) => {
    return (
        <div className='borderBox mb-3'>
            <button className='flex justify-start items-center  w-full gap-2'>
                <div className=' border-4 border-blue-900 rounded-[50%] p-1 h-14 w-14 overflow-hidden ' >
                    <img src={Vite} alt="" className='h-full' />
                </div>

                <div className='leading-3 border-b-2 border-black w-full text-left'>
                    <h3 className='font-bold  '>{title}</h3>
                    <p className='text-sm'>{desc}</p>
                </div>
            </button>
        </div>
    )
}

export default BtnTile