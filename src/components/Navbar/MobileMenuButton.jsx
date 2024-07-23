import { Disclosure } from '@headlessui/react'
// Icons
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
//--------------------------------------------------------------------


const MobileMenuButton = ({ open }) => (
    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-primary
     hover:bg-grayHover hover:text-xl focus:outline-none focus:ring-2  focus:ring-grayHover">
        <span className="absolute -inset-0.5" />
        <span className="sr-only">Open main menu</span>
        {open ? (
            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
        ) : ( 
            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
       )} 
    </Disclosure.Button>
);
export default MobileMenuButton