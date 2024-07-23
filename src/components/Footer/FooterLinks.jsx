// React-Router-dom
import { Link } from "react-router-dom";
// Locales
import useLocales from "../../locales/useLocales";
//------------------------------------------------------

const FooterLinks = ({ title, data }) => {

    const { translate } = useLocales();
    
    // ------- JSX Code -------
    return (
        <div className="m">
            <h3 className="text-lg font-semibold mb-7">{translate(title)}</h3>
            <ul>
                {data.map((item) => (
                    <li key={item.id} className="flex items-center mb-5 gap-2">
                        {/* {item.icon && <span className="text-2xl">{item.icon}</span>} */}
                        <Link
                            className="text-gray hover:text-secondaryLight hover:underline duration-150"
                            to={item.url}
                        >
                            {translate(item.name)}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default FooterLinks