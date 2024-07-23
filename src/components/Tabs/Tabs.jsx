// Locales
import useLocales from "../../locales/useLocales"
// Redux
// import { useDispatch } from "react-redux"
// Slice
// import { setSelectedBlogCategory } from "../../redux/slices/cartSlice"
// Services
// import { getBlogs } from "../../redux/services/blogsService"
// -----------------------------------------------------------------------

const Tabs = ({ items }) => {

    // const dispatch = useDispatch()


    const { translate } = useLocales()

    // const changeTabHandler = (item) => {
    //     dispatch(setSelectedBlogCategory({
    //         name: item?.title,
    //         id: item?.id
    //     }))
    //     dispatch(getBlogs(item?.id))
    // }

    // ---- JSX Code ----
    return (
        <div className="flex justify-center gap-1 flex-wrap">
            <h6
                // onClick={() => changeTabHandler({ title: 'all', id: null })}
                // className={`text-[14px] block  md:text-[16px] px-3 py-2
                //         font-[600] border-[1px] border-primary
                //         rounded-full w-[fit-content] cursor-pointer
                //         // ${selectedBlogCategory?.name === 'all' ? 'text-white bg-primary' : 'text-primary bg-white'}
                //         // `}
            >
                {translate('blogs.all')}
            </h6>
            {
                items?.map((item, index) =>
                    <h6
                        // onClick={() => changeTabHandler(item)}
                        key={index}
                        // className={`text-[14px] block  md:text-[16px] px-3 py-2
                        // font-[600] border-[1px] border-primary
                        // rounded-full w-[fit-content] cursor-pointer
                        // // ${item?.id === selectedBlogCategory?.id ? 'text-white bg-primary' : 'text-primary bg-white'}
                        // `}
                    >
                        {translate(item?.title)}
                    </h6>
                )
            }
        </div>
    )
}

export default Tabs