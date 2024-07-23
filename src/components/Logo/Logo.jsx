// React-Router-dom
import { Link } from "react-router-dom";
// Assets
import logo from '../../assets/images/logo.png'
// Pathes
import { path } from "../../routes/pathes";
// ----------------------------------------------

const Logo = () => {

  // ----- JSX Code ------
  return (
    <Link to={path?.home}>
      <img
        className="h-[80px] w-auto py-1"
        src={logo}
        alt="logo Company"
      />
    </Link>
  );
};
export default Logo;
