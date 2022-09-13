import { Fragment } from "react"

const CartDetailSkeleton = ({itemCount}) => {

    return (
        <div className="rounded-xl w-full gap-x-2 gap-y-4 grid grid-cols-[270px_1fr] animate-pulse">
            <div className="col-start-2 grid grid-cols-[1fr_1fr_1fr_50px]">
                <span className="w-fit m-auto p-2 font-semibold text-sm text-transparent bg-neutral-200 rounded-xl text-center">Size</span>
                <span className="w-fit m-auto p-2 font-semibold text-sm text-transparent bg-neutral-200 rounded-xl text-center">Quantity</span>
                <span className="w-fit m-auto p-2 font-semibold text-sm text-transparent bg-neutral-200 rounded-xl text-center ">Toltal SAR</span>                        
            </div>

            {Array(itemCount).fill(null).map((item, index) => (
                <Fragment key={index}>
                <div className="col-start-1">
                    <div className="bg-neutral-200 rounded-xl text-transparent w-[100px] h-[100px] float-left overflow-hidden">
                    </div>
                    
                    <div className="w-[170px] h-full float-right pl-4 flex flex-col justify-center gap-2">
                        <h3 className="w-fit font-semibold bg-neutral-200 rounded-xl text-transparent">
                            TempTemp Temp temp
                        </h3>
                        <span className="w-fit bg-neutral-200 rounded-xl text-transparent text-sm font-semibold">Temp temp</span>         
                        <span className="w-fit bg-neutral-200 rounded-xl text-transparent text-sm text-neutral-500">Temp </span>         
                    </div>
                </div>
                <div className="grid grid-cols-[1fr_1fr_1fr_50px]">
                    <div className="flex items-center justify-center">
                        <div className="bg-neutral-200 rounded-xl p-3 text-transparent block text-sm font-semibold">Temp</div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="bg-neutral-200 rounded-xl p-3 text-transparent block text-sm font-semibold">Temp</div>
                    </div>
                    
                    <div className="bg-neutral-200 rounded-xl text-transparent text-center font-semibold">Temp</div>    
                    <div className="">
                    </div>                
                </div>
                </Fragment>
            ))}
        </div>
    )
}

export default CartDetailSkeleton