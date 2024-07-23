// React-Router-dom
import { NavLink, useLocation } from 'react-router-dom'
// Locales
import useLocales from '../../locales/useLocales'
// Dummy Data
import { NavLinks } from '../../data'
// rsuite
import { Button } from 'rsuite'
// -------------------------------------------------------------

const MobileNavigation = ({ onClick }) => {

    const { translate } = useLocales()

    const location = useLocation();

    // ----- JSX Code -------
    return (
        <div className="space-y-1  mt-[0px] px-2 pb-3 pt-2">
            {NavLinks.map((item) => (
                <NavLink
                    key={item.name}
                    as="a"
                    to={item.href}
                    className={`text-gray-300 hover:bg-primary hover:bg-opacity-60 hover:text-white text-sm block rounded-md px-3 py-2    ${location.pathname === item.href ? 'bg-primary text-white font-bold' : 'font-medium'
                        }`}
                    aria-current={item.current ? 'page' : undefined}
                    onClick={onClick}
                >
                    {translate(item.name)}
                </NavLink>
            ))}

            <div className='flex flex-col items-center '>
                <Button
                    className='block sm:hidden  bg-primary  text-white hover:bg-primary hover:text-white w-[178px]  duration-200 h-10 rounded-sm  '
                >
                    {translate('free_consultation')}
                </Button>
            </div>

        </div>
    )
}
export default MobileNavigation