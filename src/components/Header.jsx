import React from 'react'
import Menu from './Pages/menu'
function Header() {
    return (
        <header>
            <div className="container mx-auto [p-20px]">
                <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full md:w-[90%] bg-gradient-to-r from-[#00111F] via-[#0B2A40] to-[#00111F] backdrop-blur-lg rounded-b-2xl shadow-md z-50 font-poppins overflow-hidden"></div>
                <ul className='flex items-center gap-[20px]'>
                    <Menu text="Asosiy" />
                    <Menu text="Biz Haqimmizda" />
                    <Menu text="Loyihalar" />
                    <Menu text="Kontatklar" />
                </ul>
            </div>
        </header>
    )
}

export default Header
