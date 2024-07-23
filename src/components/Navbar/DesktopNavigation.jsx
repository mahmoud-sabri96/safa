// React-Router-Dom
import { NavLink, useLocation } from 'react-router-dom'
// @react-spring/web
import { useSpring, animated } from '@react-spring/web'
// Dummy Data
import { NavLinks } from '../../data'
// Locales
import useLocales from '../../locales/useLocales'
// icons
import { FaAngleDown } from 'react-icons/fa6'
// hooks
import useScroll from '../../hooks/useScroll'
// ------------------------------------------------------------

const DesktopNavigation = () => {

  const { translate } = useLocales()

  const location = useLocation();

  const { pathname } = location

  const scrolling = useScroll()

  const springs = useSpring({
    from: { y: 0 },
    to: { y: 0 },
  })

  // ------ JSX Code ------
  return (
    <animated.div style={{ ...springs }} className={`hidden md:mx-2 2xl:block px-1 py-2 rounded-2xl`}>
      <div className="flex space-x-6 ">
        {NavLinks.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={`py-1 text-md flex items-center gap-2 
               border-b-[3px] ${pathname !== '/' || scrolling ? 'text-gray' : 'text-white'}
                hover:border-primary duration-300
                ${pathname === item.href ? 'border-primary font-bold'
                :'border-transparent font-normal'
              }`}
            >
              {translate(item.name)}
              {item.name === 'shop' &&
                <FaAngleDown className='text-md' />
              }
          </NavLink>
        ))}
      </div>
    </animated.div>
  )
}

export default DesktopNavigation
