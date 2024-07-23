// Components
import FooterLinks from "./FooterLinks";
import SocialIcons from "../SocialIcons/SocialIcons";
// React-Router-dom
import { Link } from "react-router-dom";
// Locales
import useLocales from "../../locales/useLocales";
// Dummuy data
import {
  aboutUsLinks,
  contactUsLinks,
  shopLinks
} from "../../data";
// rsuite
import { Button } from "rsuite";
// Icons
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube
} from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
// Pathes
import { path } from "../../routes/pathes";
// Assets
import Logo from '../../assets/images/logo.png'
// --------------------------------------------------------------

const Footer = () => {


  const { translate } = useLocales()

  // let socials = []
  // for (const key in settings) {
  //   if (typeof settings[key] === "string" && settings?.[key]?.startsWith('https')) {
  //       socials.push({ name: key, url: settings[key] })
  //     }
  //   }

  // ---- JSX Code ----
  return (
    <div
      className="bg-gradient-to-br min-h-[536px] from-[#121212]  backdrop-blur-[250px] from-70% to-[#1b4d04]   "
    >

      <div className="w-[95%]  mx-auto text-white flex flex-col py-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  3xl:grid-cols-4  my-8 mb-16 gap-y-10 gap-x-10">

          <div className="">

            <Link
              to={path?.home}

            >
              <img
                className="h-[140px] mb-6 w-auto py-1"
                src={Logo}
                alt="logo Company"
              />
            </Link>


            <div className="flex items-center gap-3 ">
              <SocialIcons icon={<FaFacebookF />} />
              <SocialIcons icon={<BsTwitterX />} />
              <SocialIcons icon={<RiInstagramFill />} />
              <SocialIcons icon={<FaYoutube />} />
              <SocialIcons icon={<FaLinkedinIn />} />
            </div>

            <p className="text-white font-semibold mt-[24px] mb-3 ">
              {translate('get_the_latest_news_and_updates')}
            </p>

            <input
              name='email'
              type="email"
              placeholder={translate('enter_your_email_address')}
              className="w-[265px] bg-transparent h-12 py-2 px-3 border mb-3 border-white outline-none "
            />

            <Button
              className='block !bg-primary hover:bg-primary text-white hover:text-white w-[125px] rounded-none  duration-200 h-10 '
            >
              {translate('subscribe')}
            </Button>

          </div>

          <FooterLinks title="about_us" data={aboutUsLinks} />

          <FooterLinks title="shop" data={shopLinks} />

          <FooterLinks title="contact_us" data={contactUsLinks} />

        </div>

        <div className="h-[1px] w-full bg-blue-gray-200" />
      </div>

      <div className="flex flex-col  md:flex-row items-center justify-center ">
        <p className="text-grayLight underline px-2 md:border-r border-garyLight">
          Copyright © 2024 Next Gen
        </p>
        <p className="text-grayLight underline px-2 md:border-r border-garyLight">
          All Rights Reserved
        </p>
        <Link
          to=''
          className="text-white underline px-2 md:border-r border-garyLight">
          {translate('terms_and_conditions')}
        </Link>
        <Link
          to=''
          className="text-white underline px-2 ">
          {translate('privacy_policy')}
        </Link>
      </div>

    </div>
  )
}
export default Footer