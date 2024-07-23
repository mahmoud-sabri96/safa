// React-Router-dom
import { Link, useLocation } from 'react-router-dom'
// Icons
import { FaRegHeart } from 'react-icons/fa6'
// Pathes
import { path as pathes } from '../../../routes/pathes'
//----------------------------------------------------------

const HeartIcon = ({ path, color }) => {
    
    const location = useLocation()

    const { pathname } = location

    // ----- JSX Code -----
    return (
        <Link
            to={path}
            className={`${pathname === pathes.user.favourite ? 'bg-primary  text-white' : 'text-gray'} text-${color} 
            duration-200 cursor-pointer  flex items-center justify-center `}
        >
            <FaRegHeart className='w-9 h-9 p-2' />
        </Link>
    )
}

export default HeartIcon