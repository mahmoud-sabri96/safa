// path
import { path } from './routes/pathes';

// Assets 
import { BsCart4, BsFillHeartFill, BsTelephone } from 'react-icons/bs'
import {
    FaBehance,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaLocationDot
} from 'react-icons/fa6';
import { MdEmail, MdLocationOn } from 'react-icons/md'
import { BiSolidUser } from 'react-icons/bi';
import { RiBillLine, RiLockPasswordFill } from 'react-icons/ri';
// import { FaShoppingBasket } from 'react-icons/fa';
//--------------------------------------------------------------------------------------



export const NavLinks = [
    { name: "home", href: path.home },
    { name: "shop", href: path.shop },
    { name: "next_gen_calculator", href: path.nextGenCalculator },
    { name: "blog", href: path.blogs },
    { name: "contact_us", href: path.contactUs},
];



export const ProductCategories = [
    {
        id: 1,
        name: 'الكل'
    },
    {
        id: 2,
        name: 'عجوة'
    },
    {
        id: 3,
        name: 'سكري'
    },
    {
        id: 4,
        name: 'صقعي'
    },
    {
        id: 5,
        name: 'مجدول'
    },
    {
        id: 6,
        name: 'صفاوي'
    },
    {
        id: 7,
        name: 'مبروم'
    },
    {
        id: 8,
        name: 'معمول'
    },
]

export const sortByPrices = [
    { name: " الأعلي سعراً", value: "DESC" },
    { name: " الأقل سعراً", value: "ASC", },
];

export const FindUs = [
    {
        id: 1,
        name: 'Makram Ebaid, Nasr City, Egypt',
        icon: <MdLocationOn />,
    },
    {
        id: 2,
        name: '+201011111111',
        icon: <BsTelephone />,
    },
    {
        id: 3,
        name: '02222222222',
        icon: <BsTelephone />,
    },
    {
        id: 4,
        name: 'Info@kits.com',
        icon: <MdEmail />,
    },
];

export const aboutUsLinks = [
    {
        id: 1,
        name: "missions",
    },
    {
        id: 2,
        name: "our_team",
    },
    {
        id: 3,
        name: "awards",
    },
    {
        id: 4,
        name: "testimonials",
    },
    {
        id: 5,
        name: "refund_and_returns_policy",
    },
]

export const shopLinks = [
    {
        id: 1,
        name: "protein",
    },
    {
        id: 2,
        name: "creatin",
    },
    {
        id: 3,
        name: "carb",
    },
    {
        id: 4,
        name: "casein",
    },
    {
        id: 5,
        name: "vitamins",
    },
]

export const contactUsLinks = [
    {
        id: 1,
        name: "Information",
    },
    {
        id: 2,
        name: "request_a_quote",
    },
    {
        id: 3,
        name: "consultation",
    },
    {
        id: 4,
        name: "help_center",
    },
    {
        id: 5,
        name: "terms_and_conditions",
    },
]

export const socials = [
    {
        id: 1,
        name: "facebook",
        url: "https://www.facebook.com/people/Tamrah-one",
    },
    {
        id: 5,
        name: "tiktok",
        url: "https://www.tiktok.com/@tamrahone",
    },
    {
        id: 2,
        name: "twitter",
        url: "https://twitter.com/TamrahOne",
    },
    {
        id: 4,
        name: "instagram",
        url: "https://www.instagram.com/tamrah_one/",
    },
]

export const SocialMedia = [
    {
        icon: <FaFacebookF className='text-white  h-[20px]' />,
        link: 'https://www.linkedin.com/',
        name: 'facebook',
        bg: 'hover:bg-[#1877F2]'
    },
    {
        icon: <FaInstagram className='text-white  h-[20px]' />,
        link: 'https://www.linkedin.com/',
        name: 'instagram',
        bg: 'hover:bg-[#e1306c]'
    },
    {
        icon: <FaLinkedinIn className='text-white  h-[20px]' />,
        link: 'https://www.linkedin.com/',
        name: 'linkedin',
        bg: 'hover:bg-[#0a66c2]'
    },
    {
        icon: <FaBehance className='text-white  h-[20px]' />,
        link: 'https://www.linkedin.com/',
        name: 'behance',
        bg: 'hover:bg-[#1769ff]'
    },
]

export const userLinks = [
    { href: path?.user?.profile, text: "profile", icon: <BiSolidUser size={20} /> },
    { href: path?.user?.security, text: "security", icon: <RiLockPasswordFill size={20} /> },
    { href: path?.user?.addresses, text: "addresses", icon: <FaLocationDot size={20} /> },
    { href: path?.user?.orders, text: "orders", icon: <RiBillLine size={20} /> },
    // { href: path?.user?.upComingOrders, text: "waiting_orders", icon: <FaShoppingBasket size={20} /> },
    { href: path?.cart, text: "cart", icon: <BsCart4 size={20} /> },
    { href: path?.user?.favourites, text: "favourite", icon: <BsFillHeartFill size={20} /> },
];

export const Gender = [
    {
        name: 'male',
        value:1
    },
    {
        name: 'female',
        value: 0
    },
]

export const Orders = [
    {
        id: 1,
        order_num: '#525',
        date: "25-05-2024",
        items_count: 7,
        total_price: ' 450 ر.س',
        order_status: "bending",
    },
    {
        id: 2,
        order_num: '#758',
        date: "25-05-2024",
        items_count: 9,
        total_price: ' 450 ر.س',
        order_status: "bending",
    },
    {
        id: 3,
        order_num: '#24574',
        date: "25-05-2024",
        items_count: 3,
        total_price: ' 450 ر.س',
        order_status: "bending",
    },
    {
        id: 4,
        order_num: "#5367",
        date: "25-05-2024",
        items_count: 5,
        total_price: ' 450 ر.س',
        order_status: "bending",
    },
    {
        id: 5,
        order_num: '#1652',
        date: "25-05-2024",
        items_count: 2,
        total_price: ' 450 ر.س',
        order_status: "bending",
    },
    {
        id: 6,
        order_num: '#25420',
        date: "25-05-2024",
        items_count: 4,
        total_price: ' 450 ر.س',
        order_status: "bending",
    },

];