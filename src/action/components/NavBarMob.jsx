import React from 'react'
import Logo from '../assets/logo.png'

const NavBarMob = () => {
    return (
        <div className='h-12 pt-2 px-5 mb-5 flex items-center gap-1'>
            <img src={Logo} alt="logo of the school" className='h-full' />
            <h2 className='font-consolas text-3xl font-bold'>C&G</h2>
            <div className='bg-green-500 rounded p-1 text-white font-semibold '>
                <h3 className='studShad' style={{textShadow:'2px 2px #000000'}} >Student desk</h3>
            </div>

        </div>
    )
}

export default NavBarMob