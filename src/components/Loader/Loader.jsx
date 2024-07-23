import { ImSpinner2 } from "react-icons/im";
// -----------------------------------------------------

const Loader = () => {
  // ------- JSX Code ----------
  return (
    <div className="flex w-[100%]  items-center justify-center h-full">
      <ImSpinner2
        className={`animate-spin text-[100px] text-secondaryLight`} />
    </div>
  )
}
export default Loader