const ProductGalerySkeleton = () => {
    return (
    <div className="laptop:w-[90%] ">
        <div className="w-[100%]">
            <div className="pb-[100%] rounded-2xl bg-gray-300 animate-pulse"></div>
            <div className="flex items-center justify-center mt-3 relative">
                <div className="w-[100%] laptop:w-[90%]">
                    <div className="slider grid grid-cols-4 transition-all"
                    >
                        {new Array(4).fill(null).map((image, index) => {
                            return (
                                <div className="bg-gray-300 pb-[100%] ml-1 mr-1 rounded-xl overflow-hidden hover:cursor-pointer"
                                    key={index}
                                >
                                </div>
                            )   
                        })}
                    </div>                       
                </div>
                
            </div>
        </div>      
    </div>  
    )

}


export default ProductGalerySkeleton