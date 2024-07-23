// headlessui
import { Disclosure, } from '@headlessui/react'
// Components
import {
    CartIcon,
    HeartIcon,
    ProfileIcon,
    Search,
} from '../..'
//pathes
import { path } from '../../../routes/pathes'
// Cookies
import Cookies from 'js-cookie'
// --------------------------------------------------------


const Header = () => {

    const access_token = Cookies.get('access_token')

    // ---- JSX Code ----
    return (
        <Disclosure as="div" className={`bg-primary shadow-2xl fixed h-[50px] md:h-[65px] 3xl:w-2/3 mx-auto flex items-center sm:top-[80px]  md:top-[90px] w-full z-10`}>
            {/* {({ open }) => ( */}
            {() => (
                <div className="mx-auto w-[95%] md:w-[95%]  ">
                    <div className="relative flex h-[100%] items-center justify-between">

                        <div className=" w-full  flex flex-col sm:flex-row gap-2  flex-1 items-center  sm:items-center  justify-between">

                            <Search />

                            <div className='hidden w-[fit-content] items-center  md:flex' >
                                {
                                    (access_token) &&
                                    <div className='flex mx-3 gap-3 items-center '>
                                        <HeartIcon path={path.user.favourites} />
                                        <ProfileIcon path={path?.user.profile} />
                                    </div>
                                }

                                <CartIcon path={path.cart} />
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </Disclosure>
    )
}

export default Header