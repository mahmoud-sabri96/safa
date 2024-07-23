// React-Router-dom
import {
    Link,
    useLocation
} from "react-router-dom";
// Dummy
import { userLinks } from "../../../data";
// Locales
import useLocales from "../../../locales/useLocales";
// Pathes
import { path as Path } from '../../../routes/pathes'
// Icons
import { MdExitToApp } from "react-icons/md";
// Assets
// import Profile from '../../../assets/images/profile.jpg'
// -----------------------------------------------------------

const Sidebar = () => {

    const path = useLocation();

    const { translate, currentLang } = useLocales()

    const dir = currentLang?.value === 'ar' ? 'rtl' : 'ltr'

    const lastPathIndex = (path.pathname.split('/')[2]) 
  

    // ------- JSX Code -------
    return (
        <div className="w-full min-h-[100vh] h-[100%] flex flex-col justify-between   bg-gray-100 shadow-lg pb-6 ">
            <div className="flex flex-col  ">
                <div className="flex items-center mb-2  border-b-[2px] shadow-lg py-2 px-3">
                    {/* <div className="text-center flex justify-center items-center text-primary text-lg font-bold w-full">
                        <p>
                            {translate('account_settings')}
                        </p>
                    </div> */}
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
                            className={`flex gap-4 items-center px-2 pl-4 py-3 border-gray-200 border-b-2
                        cursor-pointer hover:bg-secondaryLight duration-150 ${dir === 'rtl' ? 'rounded-l-2xl' : 'rounded-r-2xl'}  focus:bg-secondaryLight ${link.href.includes(lastPathIndex)  ? 'bg-secondaryLight' : ''}`}
                        >
                            {link.icon}{translate(link.text)}
                        </Link>
                    ))
                }
                < Link
                    to={Path.home}
                    className={`flex gap-4  items-center duration-150 ${dir === 'rtl' ? 'rounded-l-2xl' : 'rounded-r-2xl'} hover:bg-primary hover:text-secondaryLight  px-2 pl-4 py-3 border-gray-200 border-b-2
                        cursor-pointer`}
                >
                    <MdExitToApp size={25} />
                    {translate('logout')}
                </Link>
            </div>
        </div >
    )
}

export default Sidebar