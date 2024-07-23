import { Fragment } from 'react'
// React-Router-dom
import { useNavigate } from 'react-router'
// Locales
import useLocales from '../../locales/useLocales'
// @headlessui
import { Dialog, Transition } from '@headlessui/react'
// @material-tailwind
import { Button } from '@material-tailwind/react'
// ----------------------------------------------------------

const PopupMessage = ({
    icon,
    title,
    message,
    buttonText,
    path,
    isOpen,
    onClose,
}) => {

    const { translate } = useLocales()

    const navigate = useNavigate()

    // ---- JSX Code -----
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-[999]" onClose={onClose}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all">

                                    <div className="text-center ">
                                        <img
                                            src={icon}
                                            className='mx-auto'
                                        />
                                    </div>

                                    <Dialog.Title
                                        as="h3"
                                        className="text-2xl mt-4 text-center font-medium leading-6 text-gray-800"
                                    >
                                        {translate(title)}
                                    </Dialog.Title>


                                    <div className="my-3">
                                        <p className="text-md text-center text-gray-500">
                                            {translate(message)}
                                        </p>
                                    </div>

                                    <div className="mt-4">
                                        {buttonText &&
                                            <Button
                                                onClick={() => navigate(path)}
                                                className="bg-secondaryLight mx-auto mt-4 h-10 w-[fit-content] min-w-[200px] px-2 py-3 flex justify-center items-center gap-4 text-xs rounded-md  text-white font-semibold"
                                            >
                                                {translate(buttonText)}
                                            </Button>
                                        }

                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default PopupMessage