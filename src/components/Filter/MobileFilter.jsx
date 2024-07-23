import { Fragment } from "react";
// Locales
import useLocales from "../../locales/useLocales";
// @headlessui/react
import { Dialog, Disclosure, Transition } from "@headlessui/react";
// Icons
import { MinusIcon, PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
// Resuite
import { Loader, RangeSlider } from "rsuite";
import "rsuite/dist/rsuite-no-reset.css";
import { useSelector } from "react-redux";
// -------------------------------------------------------------------------------

function MobileFilter(props) {

    const {
        isOpen,
        onClose,
        rangeValue,
        onChange,
        onChangeCommitted,
        onSelectCategory,
        onResetFilter
    } = props;

    const {
        productsCategories,
        isLoadingProductsCategories,
        productsFilter
    } = useSelector(state => state.products)

    const { translate } = useLocales()

    // ----- JSX Code -----
    return (
        <div className="h-full">

            <Transition.Root
                show={isOpen}
                as={Fragment}
            >
                <Dialog
                    as="span"
                    className="relative z-[999] lg:hidden"
                    onClose={onClose}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-40 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="translate-x-full"
                        >
                            <Dialog.Panel className="relative ml-auto flex h-full  w-full max-w-xs flex-col overflow-y-hidden bg-white py-4 pb-12 shadow-xl">
                                <div className="flex items-center justify-end">

                                    <button
                                        type="button"
                                        className="flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                                        onClick={onClose}
                                    >
                                        <XMarkIcon className="h-6 w-6 text-primary" aria-hidden="true" />
                                    </button>
                                </div>

                                <div className="px-[8px]">

                                    <form>
                                        <Disclosure
                                            as="div"
                                            defaultOpen={true}
                                            className="border-b border-gray-200 py-6"
                                        >
                                            {({ open }) => (
                                                <>
                                                    <h3 className="-my-3 flow-root">
                                                        <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                                            <span className="font-bold text-primary">
                                                                {translate('product_category')}
                                                            </span>
                                                            <span className="flex items-center">
                                                                {open ? (
                                                                    <MinusIcon
                                                                        className="h-5 w-5"
                                                                        aria-hidden="true"
                                                                    />
                                                                ) : (
                                                                    <PlusIcon
                                                                        className="h-5 w-5"
                                                                        aria-hidden="true"
                                                                    />
                                                                )}
                                                            </span>
                                                        </Disclosure.Button>
                                                    </h3>
                                                    <Disclosure.Panel className="pt-6">
                                                        <div className="space-y-4 overflow-y-auto h-[100px]">

                                                            {
                                                                isLoadingProductsCategories && <Loader />
                                                            }

                                                            {productsCategories?.map((raw) => (

                                                                <div
                                                                    key={raw.id}
                                                                    className="flex items-center"
                                                                    onClick={() => onSelectCategory(raw.name)}
                                                                >
                                                                    <label
                                                                        htmlFor={`filter-${raw.id}`}
                                                                        className={`ml-3 ${raw?.id === productsFilter?.category_ids?.[0] && "font-bold text-secondaryLight"} text-sm  cursor-pointer text-gray-600`}
                                                                    >
                                                                        {raw.category_name}
                                                                    </label>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                    </form>

                                    <form>
                                        <Disclosure
                                            as="div"
                                            defaultOpen={true}
                                            className="border-b border-gray-200 py-6"
                                        >
                                            {/* {({ open }) => ( */}
                                            <>
                                                <h3 className="-my-3 flow-root">
                                                    <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                                        <span className="font-medium text-gray-900">
                                                            {translate('price')}
                                                        </span>
                                                    </Disclosure.Button>
                                                    <div className="flex items-center flex-[.6] justify-between">
                                                        <p className="text-sm">
                                                            {translate('from')}: <span>{rangeValue[0]}</span>
                                                        </p>{" "}
                                                        <p className="mt-0 text-sm">
                                                            {translate('to')}: <span>{rangeValue[1]}</span>
                                                        </p>
                                                    </div>
                                                </h3>
                                                <Disclosure.Panel className="pt-6">
                                                    <RangeSlider
                                                        max={1000}
                                                        step={50}
                                                        value={rangeValue}
                                                        onChange={(value) => onChange(value)}
                                                        onChangeCommitted={(value) => { onChangeCommitted(value) }}
                                                    // constraint={([start, end]) =>
                                                    //   start <= 300 && end >= 35
                                                    // }
                                                    />
                                                </Disclosure.Panel>
                                            </>
                                            {/* )} */}
                                        </Disclosure>
                                    </form>

                                    <button
                                        className="px-3 py-2 text-sm mx-auto block mt-4 rounded-md bg-secondaryLight hover:bg-primary duration-200 text-gray-50 w-[fit-content]"
                                        onClick={onResetFilter}
                                    >
                                        {translate('reset')}
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    )
}

export default MobileFilter