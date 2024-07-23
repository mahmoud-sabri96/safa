
import { Link } from "react-router-dom";
import useLocales from "../../locales/useLocales";

const FooterItem = ({ title, data }) => {
  const { translate } = useLocales();
  return (
    <div className="m">
      <h3 className="text-lg md:text-xl font-bold mb-2">{title}</h3>
      <ul>
        {data.map((item) => (
          <li key={item.id} className="flex items-center my-4 gap-2">
            {item.icon && <span className="text-2xl">{item.icon}</span>}
            {

            }
            <Link to={item.url}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
};
export default FooterItem