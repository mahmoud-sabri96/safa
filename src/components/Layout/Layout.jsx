// import { useEffect } from 'react'
// React-Router-dom
import { Outlet } from 'react-router-dom'
// Components
import { Navbar, Footer } from '../'
// Redux
// import { useDispatch } from 'react-redux'
// Services
// import { getSettings } from '../../redux/services/settings_services'
// -------------------------------------------------------------------
export default function Layout() {

  // const dispatch = useDispatch()

  // // useEffect(() => {
  //   dispatch(getSettings())
  // }, [])

  // ---- JSX Code ------
  return (
    <div className='3xl:w-2/3 mx-auto'>
      <Navbar />
      <main className='mx-auto min-h-[150vh] pt-[80px]  px-3 sm:px-6 md:px-12'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

