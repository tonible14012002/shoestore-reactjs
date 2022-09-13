const ItemSkeleton = () => {

    return (
        <div className="item w-full flex flex-col animate-pulse">
            <div className={`w-full h-0 pb-[100%] overflow-hidden rounded-2xl bg-neutral-200`}>
            </div>
            <h4 className="text-transparent mt-4 font-semibold mb-1 text-base tablet:text-sm bg-neutral-200 w-fit rounded-2xl">This is temp text</h4>
            <span className="text-transparent text-lg mb-1 tablet:text-sm bg-neutral-200 w-fit rounded-2xl">temp text</span>
            <span className="text-transparent pl-3 pr-3 pt-1 pb-1 mb-3 bg-gradient-to-r bg-neutral-200
                     text-sm font-semibold text-center w-fit rounded-3xl"
            >
                temp text
            </span>

        </div>
    )
}

export default ItemSkeleton