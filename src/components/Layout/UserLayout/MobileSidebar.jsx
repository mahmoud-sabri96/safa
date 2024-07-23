// React-Router-dom
import { Link, useLocation } from "react-router-dom";
// Locales
import useLocales from "../../../locales/useLocales";
// Data
import { userLinks } from "../../../data";
// Icons
import { MdClose } from "react-icons/md";
import { MdExitToApp } from "react-icons/md";
// Pathes
import { path as Path } from '../../../routes/pathes'
// Assets
// import Profile from '../../../assets/images/profile.jpg'
//-------------------------------------------------

const MobileSidebar = ({ isOpen, closeSidebar }) => {

    const path = useLocation()

    const { translate, currentLang } = useLocales()

    const dir = currentLang?.value === 'ar' ? 'rtl' : 'ltr'

    const lastPathIndex = (path.pathname.split('/')[2])
    
    // ----- JSX Code ------
    return (
        <div
            className={`${isOpen ? "translate-x-0" : "translate-x-full"
                }  fixed top-0 right-0 h-[100vh] py-2  w-[250px] bg-gray-100 shadow-md border-r-2 border-orange-300  transition-transform ease-in-out flex flex-col duration-1000 z-[9999999]`}
        >
            <button
                className="absolute top-2 left-1 text-gray-700 text-2xl"
                onClick={closeSidebar}
            >
                <MdClose />
            </button>
            <div className="flex flex-col">
                <div className="flex items-center mb-2  border-b-[2px] border-gray-600 py-4 px-8">
                    {/* <p className="text-center font-bold w-full">
                        {translate('account_settings')}
                    </p> */}
                    <div className="flex justify-center items-center">
                        <img
                            // src={Profile}
                            alt=""
                            className="w-[50px] h-[50px] rounded-full object-contain"
                        />
                        <p className="px-2 text-sm font-semibold">
                            mahmoud sabri
                        </p>
                    </div>
                </div>
              
                {
                    userLinks.map((link) => (
                        < Link
                            key={link.href}
                            to={link.href}
                            onClick={closeSidebar}
                            className={`flex gap-4 items-center px-2 pl-2 py-2 text-sm border-gray-200 border-b-2
                        cursor-pointer hover:bg-secondaryLight duration-150 ${dir === 'rtl' ? 'rounded-l-2xl' : 'rounded-r-2xl'}  focus:bg-secondaryLight ${link.href.includes(lastPathIndex) ? 'bg-secondaryLight' : ''}`}
                        >
                            {link.icon}
                            {translate(link.text)}
                        </Link>
                    ))
                }
                < Link
                    to={Path.home}
                    className={`flex gap-4 mt-auto duration-150 items-center ${dir === 'rtl' ? 'rounded-l-2xl' : 'rounded-r-2xl'} hover:bg-primary hover:text-secondaryLight  px-2 pl-2 py-2 text-sm border-gray-200 border-b-2
                        cursor-pointer`}
                >
                    <MdExitToApp size={25} />
                    {translate('logout')}
                </Link>
            </div>

            
        </div>
    )
}

export default MobileSidebar