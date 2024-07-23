/* eslint-disable react/prop-types */


const Container = ({ children, className, style }) => {

    // ----- JSX Code -----
    return (
        <div
            className={`px-[20px] sm:px-[50px] py-[80px] 3xl:px-[80px] ${className}`}
            style={style}
        >
            {children}
        </div>
    )
}

export default Container