import { Fragment } from 'react'
// Locales
import useLocales from '../../locales/useLocales'
// headlessui
import { Menu, Transition } from '@headlessui/react'
// Icons
import ArFlag from '../../assets/images/lang/ar.png'
import UsFlag from '../../assets/images/lang/us.png'
import { FaAngleDown } from 'react-icons/fa6'
//--------------------------------------------------------

const LangSwitcher = () => {

  const { currentLang, onChangeLang } = useLocales()

  const lang = currentLang?.value

  // ---- JSX Code ----
  return (
    <div className='mx-2'>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button
            className="inline-flex min-w-[80px]  items-center justify-center gap-x-1.5 rounded-md bg-grayHover px-1 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset  ring-gray-300 hover:bg-gray-50">
            {
              lang === 'ar' ?
                <Fragment>
                  <span>
                    <img src={ArFlag} alt='arabic' className='w-6 h-6 rounded-full' />
                  </span>
                  <span className='text-sm font-bold'>(AR)</span>
                  <FaAngleDown />
                </Fragment>
                :
                (
                  <Fragment>
                    <span className='text-sm font-bold'>(EN)</span>
                    <span className='block w-6 h-6'>
                      <img src={UsFlag} alt='english' className='w-5 h-5 rounded-full' />
                    </span>
                    <FaAngleDown />
                  </Fragment>
                )
            }
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-[-10px] top-[30px] z-[9999] mt-2 w-[100px] origin-top-right rounded-md bg-white shadow-lg  ring-opacity-5 focus:outline-none">
            <div className="py-1">

              <Menu.Item  >
                {() => (
                  <div
                    onClick={() => {
                      onChangeLang('ar')
                    }}
                    className="inline-flex w-full items-center justify-end gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900  hover:bg-gray-50 cursor-pointer">
                    <span className='text-md'>(Ar)</span>
                    <span>
                      <img src={ArFlag} alt='arabic' className='w-6 h-6 rounded-full' />
                    </span>
                  </div>
                )}
              </Menu.Item>

              <Menu.Item  >
                {() => (
                  <div
                    onClick={() => {
                      onChangeLang('en')
                    }}
                    className="inline-flex w-full items-center justify-end gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900  hover:bg-gray-50 cursor-pointer">

                    <span className='text-sm'>
                      (EN)
                    </span>
                    <span>
                      <img src={UsFlag} alt='english' className='w-5 h-5 rounded-full' />
                    </span>
                  </div>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>

      </Menu>
    </div>
  )
}
export default LangSwitcher