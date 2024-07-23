import { useState } from "react";
// Locales
import useLocales from "../../../locales/useLocales";
// Assets
import search from "../../../assets/icons/ic_search.svg";
// ----------------------------------------------------------

const Searchbar = () => {

    const { translate, currentLang } = useLocales()

    
    const [searchTerm, setSearchTerm] = useState("");
    
    const dir = currentLang?.value === 'ar' ? "rtl" : 'ltr'
    // const [show, setShow] = useState(true);

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // ----- JSX Code -----
    return (
        <div className="relative  mx-auto ">

            <input
                type="text"
                placeholder={translate('search')}
                className={`rounded-full ${dir === 'rtl' ? "pl-10 pr-4" : "pr-10 pl-4"}  border outline-none border-grayLight text-gr w-full md:max-w-[35rem] h-10  p-2`}
                value={searchTerm}
                onChange={handleChange}
            //   onMouseEnter={() => setShow(!show)}
            />
            <div className={`absolute inset-y-1 ${dir === 'rtl' ? 'left-2' : 'right-2' } flex items-center pl-1 pointer-events-none`}>
                <img src={search} alt="search icon" />
            </div>
            {/* <div onMouseLeave={() => setShow(!show)}>
              <SearchResults searchTerm={searchTerm} data={data} show={show} />
          </div> */}
        </div>
    )
}

export default Searchbar