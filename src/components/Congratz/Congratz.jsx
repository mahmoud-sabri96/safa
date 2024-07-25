
import React from 'react'
// Icons
import { GiMailbox } from "react-icons/gi";
// -------------------------------------------------------------

const Congratz = () => {
    return (
        <div>

            <div className='w-full bg-[#F2F2F2] p-3'>

                <GiMailbox className='w-56 h-56 mx-auto text-primary' />

                <h2 className='flex   justify-center items-center font-extrabold pt-6'>
                    Congratz, you successfully created your account.
                </h2>
                <h4 className='flex   justify-center items-center '>
                    We will send you a configration email
                </h4>
                <p className='flex justify-center items-center font-normal pb-1'>
                    please check your E-mail
                </p>

                <div className='mt-10 flex flex-col justify-center items-center'>
                    <p className='text-md font-normal'>Didn't recieve it? </p>
                    <p className='text-md font-normal'>
                        Check your Spm folder or
                        <span className='text-red-600 underline text-md'>Resend Email</span>
                    </p>
                </div>



            </div>

        </div>
    )
}

export default Congratz
