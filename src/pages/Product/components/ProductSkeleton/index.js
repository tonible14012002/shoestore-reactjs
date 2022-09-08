const ItemSkeleton = () => {

    return (
        <div className="item w-full flex flex-col animate-pulse">
            <div className={`w-full h-0 pb-[100%] overflow-hidden rounded-2xl bg-gray-200`}>
            </div>
            <h4 className="text-transparent mt-4 font-semibold mb-1 text-base tablet:text-sm bg-gray-200 w-fit rounded-2xl">This is temp text</h4>
            <span className="text-transparent text-red-500 text-lg mb-1 tablet:text-sm bg-gray-200 w-fit rounded-2xl">temp text</span>
            <span className="text-transparent pl-3 pr-3 pt-1 pb-1 mb-3 bg-gradient-to-r bg-gray-200
                     text-sm font-semibold text-center w-fit rounded-3xl"
            >
                temp text
            </span>
            <div className="text-transparent pl-3 pr-3 pt-2 pb-2 rounded-3xl text-lg bg-gray-200"
            >
                temp text
            </div>
        </div>
    )
}

export default ItemSkeleton