import { Link } from "react-router-dom";

//---------------------------------------------------------------
const SocialIcons = ({ icon, link, }) => {
  // -------- JSX Code ---------
  return (
    <Link target="_blank" to={link}>
      <span
        className={`hover:scale-125 text-primary bg-white rounded-md flex justify-center items-center w-8 h-8 duration-300`}
      >
        {icon}
      </span>
    </Link>
  );
};

export default SocialIcons;
