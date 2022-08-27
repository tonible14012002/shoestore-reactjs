const LoadingSkeleton = (props) => {

    return (
        <div {...props} className="p-3 animate-pulse">
            <div className="h-[300px] w-full bg-gray-200"></div>
            <div className="p-3">
                <h3 className="mb-2 text-transparent text-xl bg-gray-200">skeleton</h3>
                <p className="mb-6 text-transparent text-sm bg-gray-200 h-[50px]">skeleton</p>
                <div className="flex gap-2">
                    <div className="flex justify-center items-center w-fit">
                        <i className="w-20 h-5 bg-gray-200"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoadingSkeleton