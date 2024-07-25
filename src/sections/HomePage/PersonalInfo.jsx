import React, { Fragment, useState } from 'react'
// React-router-dom
import { Link } from 'react-router-dom';
// Components
import { FormProvider, RHFInput, RHFSelectInput } from "../../components";
// React-Hook-Form Yup
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// Icons
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FaCaretLeft } from 'react-icons/fa6';
import { countries } from '../../utils/data';
import { useDispatch, useSelector } from 'react-redux';
import { setClientInfo } from '../../redux/slices/settingsSlice';
//------------------------------------------------------------------------------------


const PersonalInfo = ({ onNext }) => {

    const dispatch = useDispatch()

    const { clientInfo } = useSelector(state => state.settings)

    const [show, setShow] = useState(false);

    const PersonalInfoSchema = Yup.object().shape({
        fullName: Yup.string().required("Full name is required"),
        businessEmail: Yup.string()
            .email('Email must be vaild')
            .required('Business email is  required'),
        country: Yup.string().required("Country is required"),
        phoneNumber: Yup.string().required("Phone Number is required"),
        password: Yup.string().required("Password is required"),
        repeatPassword: Yup.string().required("Repeat Password is required")
            .oneOf([Yup.ref("password")], "Password don't match"),
    });

    const defaultValues = {
        fullName: clientInfo?.fullName || '',
        businessEmail: clientInfo?.businessEmail || '',
        country: clientInfo?.country || '',
        phoneNumber: clientInfo?.phoneNumber || '',
        password: clientInfo?.password || '',
        repeatPassword: clientInfo?.repeatPassword || '',
    };

    const methods = useForm({
        mode: 'onChange',
        resolver: yupResolver(PersonalInfoSchema),
        defaultValues,
    });

    const {
        reset,
        handleSubmit,
    } = methods;

    const onSubmit = async (data) => {
        try {
            dispatch(setClientInfo(data))
            onNext(1)
        } catch (error) {
            reset();
        }
    };




    // -------- JSX Code --------
    return (
        <Fragment >

            <h2 className='flex justify-center items-center font-extrabold  pt-8 pb-3'>Tell usmore about you</h2>

            <div className="w-full bg-[#F2F2F2] p-3 md:px-5">

                <FormProvider
                    methods={methods}
                    onSubmit={handleSubmit(onSubmit)}
                >

                    <div className="w-full grid grid-cols-1 gap-y-6 ">
                        {/* fullName */}
                        <div >
                            <RHFInput
                                name="fullName"
                                type='text'
                                label='Full Name'
                                placeholder='Enter Your Full Name'
                                className='bg-white h-12 px-4 py-2 placeholder:text-grayLight text-black   outline-none w-[100%]'
                            />
                        </div>

                        {/* businessEmail */}
                        <div >
                            <RHFInput
                                name="businessEmail"
                                type='email'
                                label='Business Email'
                                placeholder='Enter your business email address'
                                className='bg-white h-12 px-4 py-2 placeholder:text-grayLight text-black   outline-none w-[100%]'
                            />
                        </div>

                        <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-x-3 gap-y-6'>
                            {/* country */}
                            <div >
                                <RHFSelectInput
                                    name="country"
                                    options={countries}
                                    label='Country'
                                    placeholder='Choose Your Country'
                                    className='bg-white h-12 px-4 py-2 placeholder:text-grayLight text-black   outline-none w-[100%]'
                                />
                            </div>
                            {/* phoneNumber */}
                            <div className='' >
                                <RHFInput
                                    name="phoneNumber"
                                    type='number'
                                    label='Phone Number'
                                    placeholder='Enter your phone number'
                                    className='bg-white h-12 px-4 py-2 placeholder:text-grayLight text-black   outline-none w-[100%]'
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div >
                            <RHFInput
                                endIcon={
                                    <span
                                        className={`cursor-pointer`}
                                        onClick={() => setShow(!show)}
                                    >
                                        {show ?
                                            <FaEye className="text-xl text-grayLight" />
                                            : <FaEyeSlash className="text-xl text-grayLight" />
                                        }
                                    </span>
                                }
                                name="password"
                                type={show ? 'text' : 'password'}
                                label={'Password'}
                                placeholder={'Choose a Password'}
                                className='bg-white h-12 px-4 py-2 placeholder:text-grayLight text-black   outline-none w-[100%]'
                            />
                        </div>

                        {/* repeatPassword */}
                        <div >
                            <RHFInput
                                endIcon={
                                    <span
                                        className={`cursor-pointer`}
                                        onClick={() => setShow(!show)}
                                    >
                                        {show ?
                                            <FaEye className="text-xl text-grayLight" />
                                            : <FaEyeSlash className="text-xl text-grayLight" />
                                        }
                                    </span>
                                }
                                name="repeatPassword"
                                type={show ? 'text' : 'password'}
                                label={'Reapeat Password'}
                                placeholder={'Repeat You Password Password'}
                                className='bg-white h-12 px-4 py-2 placeholder:text-grayLight text-black   outline-none w-[100%]'
                            />
                        </div>

                        {/* action Button */}
                        <div className="flex w-full justify-between items-center mt-5">
                            <Link
                                to={''}
                                className="h-12 px-4 w-48 py-2 flex items-center text-sm duration-200 hover:underline"
                            >
                                <FaCaretLeft />
                                Back to login
                            </Link>
                            <button
                                type="submit"
                                className="h-10 px-3 rounded-md  w-48 py-2 block bg-primary text-base font-[500] text-white"
                            >
                                next
                            </button>
                        </div>
                    </div>
                </FormProvider>

            </div>

        </Fragment>
    )
}

export default PersonalInfo
