import { useState } from 'react';
// React-Router-dom
import { Outlet } from 'react-router-dom'
// Locales
import useLocales from '../../../locales/useLocales';
// Components
import {
    Navbar,
    Footer,
    Sidebar,
    MobileSidebar
} from '../..'
// Icons
import { BiMenuAltLeft } from 'react-icons/bi'
// -----------------------------------------------
export default function UserLayout() {

    const [showMobileSidebar, setShowMobileSidebar] = useState(false)

    const { currentLang } = useLocales()

    const toggleMobileSidebar = () => {
        setShowMobileSidebar(!showMobileSidebar);
    };

    const closeMobileSidebar = () => {
        setShowMobileSidebar(false);
    };

    const dir = currentLang?.value === 'ar' ? 'rtl' : 'ltr'

    // ---- JSX Code ------
    return (
        <div>
            <Navbar navBg='bg-primary' />
            <main className='mx-auto min-h-[100vh] pt-[240px] md:pt-[170px]'>

                <div className="relative mx-auto w-[100%] min-h-[100vh] text-gray-800 flex gap-2">

                    <div className="hidden md:block w-[230px]">
                        <Sidebar />
                    </div>

                    <div className="relative py-6 md:py-12 px-2 flex-1  ">
                        <span
                            className={`absolute ${dir === 'rtl' ? 'left-3' : 'right-3'} -top-1  text-orange-400 text-3xl z-[99] block md:hidden cursor-pointer`}
                            onClick={toggleMobileSidebar}
                        >
                            <BiMenuAltLeft />
                        </span>
                        <Outlet />
                    </div>

                    {showMobileSidebar &&
                        <div className="md:hidden">
                            <MobileSidebar isOpen={showMobileSidebar} closeSidebar={closeMobileSidebar} />
                        </div>
                    }

                </div>

            </main>
            <Footer />
        </div>
    )
}