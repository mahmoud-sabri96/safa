import { useState } from 'react'
// React-Router-dom
import { useLocation } from 'react-router-dom'
// Locales
import useLocales from '../../locales/useLocales'
// headlessui
import { Disclosure, } from '@headlessui/react'
// Components
import {
  DesktopNavigation,
  MobileNavigation,
  MobileMenuButton,
  // LangSwitcher,
  // Header,
  SearchModal,
  Search,
  ProfileIcon,
  CartIcon,
  HeartIcon,
} from '../../components'
import Logo from '../Logo/Logo'
// rsuite
import { Button } from 'rsuite'
// Hooks
import useScroll from '../../hooks/useScroll'
// Pathes
import { path } from '../../routes/pathes'
// Icons
import { FaSearch } from "react-icons/fa";
//----------------------------------------------------------


export default function Navbar() {

  const { translate } = useLocales()

  const scrolling = useScroll()

  const location = useLocation()

  const { pathname } = location

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true)

  const handleClose = () => setOpen(false);

  // ---- JSX Code ----
  return (
    <>
      {/* // <Disclosure as="nav" className={`${scrolling ? `bg-primary shadow-2xl  fixed top-0 left-0 right-0 w-full` : 'fixed top-0 left-0 right-0 w-full'} z-[9999]`}> */}
      <Disclosure as="nav"
        className={`${pathname === '/' ? 'bg-transparent' : 'bg-white'}  
        shadow-md fixed  left-0 right-0 3xl:w-2/3 mx-auto w-full z-[999]
        ${scrolling ? 'bg-white ' : 'bg-transparent'}
        `} >
        {({ open, close }) => (
          <>
            <div className="mx-auto w-[100%] md:w-[95%] ">

              <div className="relative flex h-30 items-center justify-between">

                <div className=" w-full flex flex-1 items-center  sm:items-center  justify-between">

                  <div className="flex flex-shrink-0 items-center">
                    <Logo />
                  </div>

                  <DesktopNavigation />

                  <div className='flex flex-1 md:flex-initial justify-end w-[fit-content]  items-center' >

                    <button
                      onClick={() => handleOpen('sm')}
                      className='block md:hidden cursor-pointer'
                    >
                      <FaSearch className={`block md:hidden ${scrolling || pathname !== '/' ? 'text-gray' : 'text-white'} mx-6`} />
                    </button>

                    <div className='hidden mx-2 w-[144px] md:block cursor-pointer'>
                      <Search />
                    </div>

                    <div className='flex sm:flex md:flex-row  items-center'>

                        <div className='flex gap-1 items-center'>
                          <HeartIcon
                            path={path.user.favourite}
                            color={`${scrolling || pathname !== '/' ? 'gray' : 'white'}`}
                          />
                          <div className='w-[1px] h-3 bg-grayLight' />
                          <CartIcon
                            path={path.shoppingCart}
                            color={`${scrolling || pathname !== '/' ? 'gray' : 'white'}`}
                          />
                          <div className='w-[1px] h-3 bg-grayLight' />
                          <ProfileIcon
                            path={path.user.index}
                            color={`${scrolling || pathname !== '/' ? 'gray' : 'white'}`}
                          />
                        </div>

                    </div>

                    <Button
                      className='hidden sm:block mx-2 bg-primary hover:bg-secondary text-white hover:text-primary w-[178px]  duration-200 h-10 rounded-sm  '
                    >
                      {translate('free_consultation')}
                    </Button>

                    {/* <LangSwitcher /> */}

                    <span className='2xl:hidden mx-2'>
                      <MobileMenuButton open={open} />
                    </span>

                  </div>

                </div>

              </div>

            </div>

            <Disclosure.Panel className="2xl:hidden bg-secondary">
              <MobileNavigation onClick={close} />
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <SearchModal
        open={open}
        onClose={handleClose}
      />

    </>
  )
}
