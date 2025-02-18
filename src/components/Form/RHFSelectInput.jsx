import { Fragment } from "react";
// React-hooks-form
import { useFormContext, Controller } from "react-hook-form";
// Headlessui
import { Listbox, Transition } from "@headlessui/react";
// Icons
import { CheckIcon } from "@heroicons/react/24/outline";
import { FaAngleDown } from "react-icons/fa6";
// ------------------------------------------------------------

export default function RHFSelectInput({ name, label, className, options, placeholder, ...other }) {

    const { control } = useFormContext();

    // ----- JSX Code ------
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <>

                    <label className="text-sm pl-2 block text-black mb-2 font-[600]">
                        {label}
                    </label>

                    <Listbox
                        {...field}
                        // value={
                        //     typeof field?.value === "number" && field?.value === 0
                        //         ? ""
                        //         : field?.value
                        // }
                        {...other}
                    >
                        <div className="relative mt-1">
                            <Listbox.Button
                                className={`relative w-full ${className}`}>
                                <span className="truncate flex">
                                    {/* {field?.value || placeholder} */}
                                    {/* {field?.value || placeholder} */}
                                    {options?.find(option => option?.id === field?.value)?.name || placeholder}
                                    {/* {field?.value?.value || placeholder} */}
                                    {/* {console.log(field)} */}
                                </span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <FaAngleDown
                                        className="h-5 w-5 text-gray-400"
                                        aria-hidden="true"
                                    />
                                </span>
                            </Listbox.Button>
                            <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 z-[9999] ring-black/5 focus:outline-none sm:text-sm">
                                    {options.map((option, personIdx) => (
                                        <Listbox.Option
                                            key={personIdx}
                                            className={({ active }) =>
                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-gray-500  font-bold' : 'text-gray-900'
                                                }`
                                            }
                                            value={option?.id}
                                        // value={option}
                                        >
                                            {({ selected }) => (
                                                <>
                                                    <span
                                                        className={`block truncate ${selected ? 'font-bold text-primary' : 'font-normal'
                                                            }`}
                                                    >
                                                        {/* {option?.name || option} */}
                                                        {option?.name}
                                                    </span>
                                                    {selected ? (
                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary">
                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                        </span>
                                                    ) : null}
                                                </>
                                            )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </Listbox>


                    {
                        error &&
                        <p className="text-red-500 my-1 text-[14px] px-3">
                            {error?.message}
                        </p>
                    }

                </>
            )}
        />
    );
}