// React-Router-dom
import { Link, useLocation } from 'react-router-dom'
// Icons
import { FaRegUser } from 'react-icons/fa6'
// Pathes
import { path as pathes } from '../../../routes/pathes'
//--------------------------------------------

const ProfileIcon = ({path,color}) => {
    const location = useLocation()

    const { pathname } = location
    // ------ JSX Code ------
    return (
        <Link
            to={path}
            className={`${pathname === pathes.user.profile ? 'bg-primary  text-white' : 'text-gray'} text-${color} duration-200  cursor-pointer flex items-center justify-center `}
        >
            <FaRegUser className='w-9 h-9 p-2' />
        </Link>
    )
}

export default ProfileIcon