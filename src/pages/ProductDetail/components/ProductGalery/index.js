import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import Button from "../../../../components/Button"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"


const ProductGalery = ({images}) => {
    const MAX_AMOUNT_DISPLAY = 4
    const imageCount = images.length

    const [imageIndex, setImageIndex] = useState(0)
    const imageUrl = `url('${images[imageIndex]?.image}')`
    const [sliderDistance, setSliderDistance] = useState(0)

    const handleLeftBtnClick = () => {
        if (imageCount <= MAX_AMOUNT_DISPLAY) return
        if (sliderDistance <= 0 ) {
            setSliderDistance(0)
            return
        }
        setSliderDistance(sliderDistance - 1)
    }
    const handleRightBtnClick = () => {
        if (imageCount <= MAX_AMOUNT_DISPLAY) return
        if (sliderDistance >= imageCount-MAX_AMOUNT_DISPLAY ) {

            setSliderDistance(imageCount-MAX_AMOUNT_DISPLAY)
            return
        }
        setSliderDistance(sliderDistance + 1)
    }

    return (
        <div className="laptop:w-[90%] mb-2">
            <div className="w-[100%]">
                <div className={`pb-[100%] rounded-2xl 
                        bg-cover bg-no-repeat`}
                    style={{
                        backgroundImage: imageUrl
                    }}
                ></div>

                <div className="flex items-center justify-center mt-3 relative">
                        <Button className="absolute left-0 flex items-center justify-center 
                                    w-[30px] h-[30px] rounded-full bg-white shadow-md top-1/2 -translate-y-1/2 "
                            onClick={handleLeftBtnClick}
                        >
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </Button>
                        <Button className="absolute right-0 flex items-center justify-center 
                                    w-[30px] h-[30px] rounded-full bg-white shadow-md top-1/2 -translate-y-1/2 "
                            onClick={handleRightBtnClick}
                        >
                            <FontAwesomeIcon icon={faChevronRight} />
                        </Button>
                    <div className="w-[100%] laptop:w-[90%] overflow-x-hidden">
                        <div className={`slider flex transition-all`}
                            style={{
                                width: (imageCount / MAX_AMOUNT_DISPLAY)*100 + '%',
                                transform: `translateX(${-(1/imageCount)*100*sliderDistance}%)`
                            }}
                        >
                            {images.map((image, index) => {
                                return (
                                    <div className="ml-1 mr-1 rounded-xl overflow-hidden hover:cursor-pointer"
                                        key={index}
                                        onClick={() => {setImageIndex(index)}}
                                    >
                                        <img src={image.image} alt="asd"/>
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


export default ProductGalery