import { motion} from "framer-motion"

const PageTitle = ({ mainTitle, bigTitle, smallTitle, desc }) => {

  const animate = {
    viewport: { once: false },
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
    transition: { type: "linear", duration: 0.4, delay: 0.8 },
  }  
  // ------ JSX Code -------
  return (
    <motion.div className="w-[100%]" {...animate}>
      <h6
        className={`text-[14px] md:text-[16px] px-3 py-2 text-primary border-[1px] border-primary rounded-full w-[fit-content]`}>
        <span className="text-[14px]">#</span> {""}
        {mainTitle}
      </h6>
      {
        bigTitle && (
          <h2 className={` font-medium text-xl md:text-2xl lg:text-5xl mt-6 text-primary mb-[34px] `}>
            {
              bigTitle
            }
          </h2>
        )
      }
      {
        smallTitle && (
          <h2 className={`leading-[20px] font-bold text-lg md:text-xl lg:text-3xl mt-6 text-primary mb-[34px]`}>
            {smallTitle?.split(" ")?.slice(0, 3).join(" ")}
            <br className="my-4" />
            {smallTitle?.split(" ")?.slice(3).join(" ")}
          </h2>
        )
      }

      {desc && <p className={` text-primary lg:w-[50%] `}>{desc}</p>}
    </motion.div>
  );
};
export default PageTitle;
