// React-Router-dom
import { Link, useLocation } from 'react-router-dom'
// Icons
import { FiShoppingCart } from "react-icons/fi";
// Pathes
import { path as pathes } from '../../../routes/pathes'
//----------------------------------------------

const CartIcon = ({ path, color }) => {

    const location = useLocation()

    const { pathname } = location

    // ------ JSX Code ------
    return (
        <Link
            to={path}
            className='relative duration-200 cursor-pointer   flex items-center justify-center  '
        >
            <span className='absolute text-[11px] font-bold text-white items-center justify-center -right-2 -bottom-1 flex w-[20px] h-[20px] rounded-full bg-red-600'>
                5
            </span>

            <FiShoppingCart
                className={`w-9 h-9 p-2
                 ${pathname === pathes.shoppingCart ? 'bg-primary  text-white' : 'text-gray'} text-${color}
            `} />


        </Link>
    )
}

export default CartIcon