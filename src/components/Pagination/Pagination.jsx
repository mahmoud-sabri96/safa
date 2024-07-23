// React
import { useState, useEffect } from "react"
// Icons
import {
    ChevronLeftIcon,
    ChevronRightIcon
} from "@heroicons/react/24/outline"
// Locales
import useLocales from "../../locales/useLocales"
//------------------------------------------------

// ---- Styles -----
const activeStyle = {
    background: '#000',
    color: '#f7d52c',
    fonWeight: 'bold',
}

const inActiveStyle = {
    color: '#000',
    fonWeight: 'semibold',
}

const disabledStyle = {
    color: '#a8a3a3',
    fonWeight: 'normal',
}


const Pagination = (props) => {
    const {
        currentPage,
        setCurrentPage,
        numOfExistPages,
        scrollTo = 0
    } = props

    const { currentLang } = useLocales()

    const dir = currentLang?.value === 'ar' ? 'rtl' : 'ltr'

    const [pages, setPages] = useState([...Array(5)].map((_, index) => index + 1))

    const [activePage, setActivePage] = useState(1)

    useEffect(() => {
        setCurrentPage(activePage)
    }, [activePage])

    const paginateHandler = (e) => {
        const itemValue = Number(e.target.innerHTML)
        if (itemValue <= numOfExistPages) {
            window.scrollTo({
                top: scrollTo,
                behavior: 'smooth'
            })
            setActivePage(itemValue)
            if ((itemValue / 5) >= 1) {
                setPages(Array.from({ length: 5 }, (_, a) => a + itemValue - 1))
            }
            if (itemValue.length >= 1 && (itemValue) > 2) {
                setPages(Array.from({ length: 5 }, (_, a) => a + itemValue - 2))
            }
        }
    }

    const nextPageHandler = () => {
        if (currentPage < numOfExistPages) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
            setActivePage((prev) => prev + 1)
            if ((currentPage / 5) >= 1) {
                setPages(Array.from({ length: 5 }, (_, a) => a + currentPage - 1))
            }
            if (currentPage >= 1 && (currentPage) > 2) {
                setPages(Array.from({ length: 5 }, (_, a) => a + currentPage - 2))
            }
        }
    }

    const previousPageHandler = () => {
        if (currentPage <= numOfExistPages && currentPage > 1) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
            setActivePage((prev) => prev - 1)
            if ((currentPage / 5) >= 1) {
                setPages(Array.from({ length: 5 }, (_, a) => a + currentPage - 1))
            }
            if (currentPage >= 1 && (currentPage) > 2) {
                setPages(Array.from({ length: 5 }, (_, a) => a + currentPage - 2))
            }
        }
    }


    // ---- JSX Code ----
    return (
        <div className="flex items-center justify-center py-3 sm:px-6" >
            <div className="sm:flex sm:flex-1 items-center justify-center">
                <div className="flex justify-center py-[10px] rounded-[15px] px-[25px] sm:px-[45px] bg-[#e3e3e37d]">

                    <nav
                        className="isolate inline-flex items-center -space-x-px rounded-md"
                        aria-label="Pagination"
                    >
                        <p
                            className={`relative ${currentPage === 1 ? 'cursor-default' : 'cursor-pointer'} w-[35px] h-[35px] inline-flex items-center rounded-md p-[3px] ${dir === 'rtl' ? 'ml-[8px!important]' :'mr-[8px!important]'}  border-[1px] border-gray-400 cursor-pointer text-gray-400  hover:bg-gray-50 focus:z-20 focus:outline-offset-0`}
                            onClick={previousPageHandler}
                        >
                            {
                                dir === 'rtl' ?
                                    <ChevronRightIcon
                                        className={`h-8 w-8 ${currentPage === 1 ? 'text-gray-500' : 'text-secondaryLight'}`}
                                        aria-hidden="true"
                                    />
                                    :
                                    <ChevronLeftIcon
                                        className={`h-8 w-8 ${currentPage === numOfExistPages ? 'text-gray-500' : 'text-secondaryLight'}`}
                                        aria-hidden="true"
                                    />
                            }
                            


                        </p>
                        {
                            pages.map((e, index) =>
                                <a
                                    key={index}
                                    onClick={paginateHandler}
                                    aria-current="page"
                                    className="relative w-[40px] h-[40px] justify-center rounded-full cursor-pointer text-lg z-10 inline-flex items-center px-3 py-2 font-semibold text-black focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    style={
                                        e === currentPage ?
                                            activeStyle
                                            :
                                            (e > numOfExistPages) ?
                                                disabledStyle
                                                :
                                                inActiveStyle
                                    }
                                >
                                    {e}
                                </a>
                            )
                        }
                        <p
                            className={`relative ${currentPage === numOfExistPages ? 'cursor-default' : 'cursor-pointer'} mr-[8px!important] w-[35px] h-[35px] inline-flex items-center rounded-md p-[3px] border-[1px] border-gray-400 cursor-pointer text-gray-400  hover:bg-gray-50 focus:z-20 focus:outline-offset-0`}
                            onClick={nextPageHandler}
                        >
                            {
                                dir === 'rtl' ?
                                    <ChevronLeftIcon
                                        className={`h-8 w-8 ${currentPage === numOfExistPages ? 'text-gray-500' : 'text-secondaryLight'}`}
                                        aria-hidden="true"
                                    />
                                    :
                                    <ChevronRightIcon
                                        className={`h-8 w-8 ${currentPage === 1 ? 'text-gray-500' : 'text-secondaryLight'}`}
                                        aria-hidden="true"
                                    /> 
                            }
                        </p>
                    </nav>

                </div>

            </div>
        </div>
    )
}

export default Pagination