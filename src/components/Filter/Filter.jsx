// Locales
import useLocales from "../../locales/useLocales";
// Rsuite
import { RangeSlider } from "rsuite";
import "rsuite/dist/rsuite-no-reset.css";
// Icons
import {
    MinusIcon,
    PlusIcon
} from "@heroicons/react/24/outline";
// headlessui
import { Disclosure } from "@headlessui/react";
// Redux
import { useSelector } from "react-redux";
// Componets
import Loader from "../Loader/Loader";
// -----------------------------------------------------

const Filter = (props) => {

    const {
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

    // ------- JSX Code ---------
    return (
        <>
            <form>
                <Disclosure
                    as="div"
                    defaultOpen={true}
                    className="border-b border-gray-200 py-3"
                >
                    {({ open }) => (
                        <>
                            <h3 className="-my-3 flow-root">
                                <Disclosure.Button className="flex w-full items-center justify-between bg-white text-sm text-gray-400 hover:text-gray-500">
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
                                <div className="space-y-4 overflow-y-auto h-[150px]">

                                    {
                                        isLoadingProductsCategories
                                        &&
                                        <Loader size={50} />
                                    }

                                    {productsCategories?.map((raw) => (
                                        <div
                                            key={raw.id}
                                            className="flex items-center"
                                            onClick={() => onSelectCategory(raw.id)}
                                        >
                                            <label
                                                htmlFor={`filter-${raw.id}`}
                                                className={`ml-3 ${raw?.id === productsFilter?.category_ids?.[0] && "!font-[900] text-secondaryLight"}  text-sm cursor-pointer text-gray-600`}
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

            {/* Price Filter */}
            <form>
                <Disclosure
                    as="div"
                    defaultOpen={true}
                    className="border-b border-gray-200 py-3"
                >
                    {/* {({ open }) => ( */}
                    <>
                        <h3 className="flow-root">
                            <Disclosure.Button className="flex w-full items-center justify-between bg-white text-sm text-gray-400 hover:text-gray-500">
                                <span className="font-bold text-primary mb-2">
                                    {translate('price')}
                                </span>
                            </Disclosure.Button>
                            <div className="flex items-center flex-[.6] justify-between">
                                <p className="text-sm">
                                    {translate('from')} : <span>{rangeValue[0]}</span>
                                </p>{" "}
                                <p className="mt-0 text-sm">
                                    {translate('to')} : <span>
                                        {rangeValue[1]}
                                    </span>
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
                className="px-3 block mx-auto py-2 text-sm rounded-md mt-6 bg-secondaryLight hover:bg-primary duration-200 text-gray-50 w-[fit-content]"
                onClick={() => onResetFilter()}
            >
                {translate('reset')}
            </button>
        </>
    )
}

export default Filter