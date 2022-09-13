
const ProductDetailSkeleton = () => {
    return (
        <div className="flex flex-col gap-3"> 
            <h2 className=" text-3xl laptop:text-5xl rounded-xl bg-neutral-200 text-transparent font-semibold">Temp Temp Temp Temp </h2>
            <div>
                <span className="text-red-400 text-2xl font-semibold rounded-xl bg-neutral-200 text-transparent">temp temp</span>                
            </div>
            <div className="flex text-xl justify-between font-semibold ">
                <span className="rounded-xl bg-neutral-200 text-transparent ">Color:</span>
                <span className="rounded-xl bg-neutral-200 text-transparent ">temp</span>
            </div>

            <div className="w-full transition-all">
                <div className="rounded-xl bg-neutral-200 text-transparent h-[140px]">
                </div>
            </div>
            <div>
                <ProductFormSkeleton />
            </div>

        </div>
    )
}


const ProductFormSkeleton = () => {
    return (
            <form className="w-full">
                <div className="mb-5">
                    <span className="text-gray-500 font-semibold mb-3 w-fit block rounded-xl bg-neutral-200 text-transparent ">Color pattern</span>
                    <div>
                        <ul className="w-[80%] m-0 p-0 flex flex-wrap gap-5  ">
                            <div className="p-4 h-[45px] w-[45px] rounded-full bg-neutral-200 text-transparent  "
                            >
                            </div>
                        </ul>
                    </div>
                </div>
                <div className="mb-5 min-h-[170px]">
                    <span className="text-gray-500 w-fit font-semibold mb-3 block rounded-xl bg-neutral-200 text-transparent ">Size options</span>
                    <div className="flex gap-2 mb-4">
                        <div className="transition-all w-fit font-semibold pl-5 pr-5 pt-2 pb-2 border rounded-xl bg-neutral-200 text-transparent "
                            type="div"
                        >
                            Size
                        </div>

                        <div className="transition-all w-fit font-semibold pl-5 pr-5 pt-2 pb-2 border shadow-sm rounded-xl bg-neutral-200 text-transparent "
                            type="div"
                        >
                            Quantity
                        </div>
                    </div>
                 
                    <div className="">
                        <ul className="w-[80%] m-0 p-0 flex flex-wrap gap-5  ">
                            <div className="rounded-xl bg-neutral-200 text-transparent p-2">temp</div>
                            <div className="rounded-xl bg-neutral-200 text-transparent p-2">temp</div>
                        </ul>
                    </div>                
        
                    <span className="text-red-500 font-semibold block mt-3">

                    </span>
                </div>

                <div className="mb-5 flex justify-between items-baseline">
                    <span className="font-semibold block rounded-xl bg-neutral-200 text-transparent ">price:</span>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 hover:shadow-md rounded-xl bg-neutral-200 text-transparent  font-semibold">   
                        add
                    </div>

                    <div className="p-3 hover:shadow-md font-semibold rounded-xl bg-neutral-200 text-transparent "
                    >
                        Checkout
                    </div>                    
                </div>
            </form>
    )
}

export default ProductDetailSkeleton