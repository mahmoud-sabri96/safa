import React, { useState } from 'react'
// Components
import { FormProvider, RHFInput, RHFSelectInput } from "../../components";
// React-Hook-Form Yup
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// data
import { cities, countries } from '../../utils/data';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { setClientInfo } from '../../redux/slices/settingsSlice';

// --------------------------------------------------------------------


const CompanyInfo = ({ onNext, onPrevious }) => {

    const dispatch = useDispatch()

    const { clientInfo } = useSelector(state => state.settings)

    const CompanyInfoSchema = Yup.object().shape({
        companyName: Yup.string().required("please enter your comapny name"),
        address: Yup.string().required("please enter your address"),
        companyBusinessEmail: Yup.string()
            .email('Email must be vaild')
            .required('please enter your business email'),
        companyCountry: Yup.string().required("please enter your country"),
        companyCity: Yup.string().required("please enter your city"),
        companyPhoneNumber1: Yup.string().required("please enter your comapny phone number"),
        companyPhoneNumber2: Yup.string().required("please enter your comapny phone number"),
    });

    const defaultValues = {
        companyName: clientInfo?.companyName || '', 
        address: clientInfo?.address || '', 
        companyBusinessEmail: clientInfo?.companyBusinessEmail || '', 
        companyCountry: clientInfo?.companyCountry || '', 
        companyCity: clientInfo?.companyCity || '', 
        companyPhoneNumber1: clientInfo?.companyPhoneNumber1 || '', 
        companyPhoneNumber2: clientInfo?.companyPhoneNumber2 || '', 
    };

    const methods = useForm({
        mode: 'onChange',
        resolver: yupResolver(CompanyInfoSchema),
        defaultValues,
    });

    const {
        reset,
        handleSubmit,
    } = methods;

    const onSubmit = async (data) => {
        try {
            dispatch(setClientInfo(data))
            onNext(2)
        } catch (error) {
            reset();
        }
    };
    // ---------- JSX Code ----------
    return (
        <div>
            <h2 className='flex justify-center items-center font-extrabold pt-8 pb-3'>Verify Your Comapny</h2>

            <div className='w-full bg-[#F2F2F2] p-3'>

                <h4 className='flex text-sm justify-center items-center  py-8'>
                    Enter this information correctly will facilitate this company verfication process.
                </h4>

                <div className=" w-full md:px-5 ">

                    <FormProvider
                        methods={methods}
                        onSubmit={handleSubmit(onSubmit)}
                    >

                        <div className="w-full grid grid-cols-1 gap-y-6 ">

                            {/* companyName */}
                            <div >
                                <RHFInput
                                    name="companyName"
                                    type='text'
                                    label='Company Name'
                                    placeholder='Enter Your Company Name'
                                    className='bg-white h-12 px-4 py-2 placeholder:text-grayLight text-black   outline-none w-[100%]'
                                />
                            </div>

                            {/* fullName */}
                            <div >
                                <RHFInput
                                    name="address"
                                    type='text'
                                    label='Address'
                                    placeholder='Enter Your Address'
                                    className='bg-white h-12 px-4 py-2 placeholder:text-grayLight text-black   outline-none w-[100%]'
                                />
                            </div>

                            {/* businessEmail */}
                            <div >
                                <RHFInput
                                    name="companyBusinessEmail"
                                    type='email'
                                    label='Business Email'
                                    placeholder='Enter your business email address'
                                    className='bg-white h-12 px-4 py-2 placeholder:text-grayLight text-black   outline-none w-[100%]'
                                />
                            </div>


                            {/* Countries and Cities */}
                            <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-x-3 gap-y-6'>
                                {/* country */}
                                <div >
                                    <RHFSelectInput
                                        name="companyCountry"
                                        options={countries}
                                        label='Country'
                                        placeholder='Enter Your Country'
                                        className='bg-white h-12 px-4 py-2 placeholder:text-grayLight text-black   outline-none w-[100%]'
                                    />
                                </div>

                                {/* cities */}
                                <div >
                                    <RHFSelectInput
                                        name="companyCity"
                                        options={cities}
                                        label='City'
                                        placeholder='Choose Your Country'
                                        className='bg-white h-12 px-4 py-2 placeholder:text-grayLight text-black   outline-none w-[100%]'
                                    />
                                </div>
                            </div>

                            {/* Comapny phone number */}
                            <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-x-3 gap-y-6'>
                                {/* phone */}

                                <div className='' >
                                    <RHFInput
                                        name="companyPhoneNumber1"
                                        type='number'
                                        label='Company Phone Number'
                                        placeholder='Enter your phone number'
                                        className='bg-white h-12 px-4 py-2 placeholder:text-grayLight text-black   outline-none w-[100%]'
                                    />
                                </div>

                                {/* phoneNumber */}
                                <div className='' >
                                    <RHFInput
                                        name="companyPhoneNumber2"
                                        type='number'
                                        label='Company Phone Number'
                                        placeholder='Enter your phone number'
                                        className='bg-white h-12 px-4 py-2 placeholder:text-grayLight text-black   outline-none w-[100%]'
                                    />
                                </div>
                            </div>


                            {/* action Buttons */}
                            <div className="flex w-full justify-end  gap-2 items-center mt-5">
                                <button
                                    className="h-10 rounded-md bg-blue-gray-100 px-4 w-28 py-2 block text-base"
                                    onClick={() => onPrevious(0)}
                                >
                                    Back
                                </button>
                                <button
                                    type="submit"
                                    className="h-10 rounded-md px-4 w-48 py-2 block bg-primary text-base font-[500] text-white"
                                >
                                    next
                                </button>
                            </div>
                        </div>
                    </FormProvider>

                </div>

            </div>
        </div>
    )
}

export default CompanyInfo
