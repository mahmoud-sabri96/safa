import React, { useEffect } from 'react'
// Redux
import { useDispatch, useSelector } from 'react-redux';
// Icons
import { GiMailbox } from "react-icons/gi";
import { CgSpinner } from "react-icons/cg";
// Services
import { registerNewClient } from '../../redux/services/settings_services';
// -------------------------------------------------------------


const Submit = ({ onPrevious }) => {

  const dispatch = useDispatch()

  const { clientInfo, isLoadingRegisterNewClient } = useSelector(state => state.settings)

  const confirmHandler = () => {

    const {
      fullName,
      businessEmail,
      country,
      phoneNumber,
      password,
      repeatPassword,
      companyName,
      address,
      companyBusinessEmail,
      companyCountry,
      companyCity,
      companyPhoneNumber1,
      companyPhoneNumber2,
    } = clientInfo

    const clientForm = new FormData();



    clientForm.append("user_full_name", fullName);

    clientForm.append("user_email", businessEmail);

    clientForm.append("user_nationality", country);

    clientForm.append("user_position", 'the position');

    clientForm.append("user_phone", phoneNumber);

    clientForm.append("user_password", password);

    clientForm.append("user_password_confirmation", repeatPassword);
    //------------------------------------------------------------------------------
    clientForm.append("lang", 'ar');

    clientForm.append("company_name", companyName);

    clientForm.append("company_address", address);

    clientForm.append("company_phone", companyPhoneNumber1);

    clientForm.append("company_extra_data[phone]", companyPhoneNumber2);

    clientForm.append("company_business_email", companyBusinessEmail);

    clientForm.append("company_country_id", companyCountry);

    clientForm.append("company_city_id", companyCity);

    clientForm.append("company_avatar", null);


    dispatch(registerNewClient(clientForm))
  }


  // ------- JSX Code ----------
  return (
    <div>

      <h2 className='flex justify-center items-center font-extrabold pt-8 pb-3'>You all set, Ready ?</h2>

      <div className='w-full bg-[#F2F2F2] p-3'>

        <GiMailbox className='w-56 h-56 mx-auto text-primary' />

        <h4 className='flex text-red-500  justify-center items-center font-bold pt-6'>
          We will send amessage for this e-mail
        </h4>
        <p className='flex justify-center items-center font-normal pb-1'>
          example@example.com
        </p>

        {/* action Buttons */}
        <div className="flex w-full justify-end  gap-2 items-center mt-5">
          <button
            className="h-10 rounded-md bg-blue-gray-100 px-4 w-28 py-2 block text-base"
            onClick={() => onPrevious(1)}
          >
            Back
          </button>
          <button
            type="submit"
            className="h-10 rounded-md flex items-center justify-center px-4 w-48 py-2  bg-primary text-base font-[500] text-white"
            onClick={confirmHandler}
          >

            {isLoadingRegisterNewClient ?
              <CgSpinner
                size={35}
                className="mx-2 animate-spin"
              />
              :
              'Confirm'
            }

          </button>
        </div>

      </div>

    </div>
  )
}

export default Submit
