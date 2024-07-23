import { Disclosure } from "@headlessui/react"
// Icons
import { FaMinus } from "react-icons/fa6"
// ------------------------------------------------------


export default function Accordion({
  open,
  title,
  desc,
  // secondDescription,
  textColor
}) {

  // ---- JSX Code -----
  return (

    <Disclosure
      defaultOpen={open}
      className='w-100 border-y-[1px] py-6 border-gray-400'
    >
      {({ open }) => (
        <div>
          <Disclosure.Button
            className="flex  items-center justify-between w-full  focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 "
          >
            <span className={`subtitle text-${textColor} flex items-center gap-2`}>
              <span>
                {/* <img src={star} alt="" /> */}
              </span>
              {title}
            </span>
            <FaMinus
              className={`${open ? "transform rotate-180" : ""
                } w-5 h-5 text-${textColor}`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className={`min-title leading-5 pt-6 pb-2 text-${textColor} `}>
            {desc}
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>

  )
}
