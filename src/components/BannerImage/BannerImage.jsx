
const BannerImage = ({ Imagsrc }) => {
    
    // ------ JSX Code --------
    return (
        <div className="w-[100%] h-[290px]">
            <img
                src={Imagsrc}
                alt=""
                className="w-full h-full"
            />
        </div>
    )
}

export default BannerImage