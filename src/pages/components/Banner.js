import { useRef, useEffect, useState } from "react"
import Button from "./Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faArrowRight, faArrowLeft} from "@fortawesome/free-solid-svg-icons"

// fake response
async function getBannerData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                {
                    id: 1,
                    header: "Are you ready to lead the way",
                    sub_header: "asow ociqw  asow ociqw cqpapcm aamc asow ociqw cqpapcm aamc asow ociqw cqpapcm aamc asow ociqw cqpapcm aamc cqpapcm aamc asow ociqw cqpapcm aamc asow ociqw cqpapcm aamc  asow ociqw cqpapcm aamc",
                    link: "google.com",
                    btn_title: "Discover"
                },
                {
                    id:2,
                    header: "Are you ready to lead the way 2",
                    sub_header: "qw asow ociqw cqpapcm aamc asow ociqw cqpapcm aamc asow ociqw cqpapcm aamc asow ociqw cqpapcm aamc cqpapcm aamc asow ociqw cqpapcm aamc asow ociqw cqpapcm aamc asow ociqw cqpapcm aamc",
                    link: "google.com",
                    btn_title: "Discover"
                },
                {
                    id: 3,
                    header: "Are you ready to lead the way 3",
                    sub_header: "qw asow ociqw cqpapcm aamc asow ociqw cqpapcm aamc asow ociqw cqpapcm aamc asow ociqw cqpapcm aamc cqpapcm aamc asow ociqw cqpapcm aamc asow ociqw cqpapcm aamc asow ociqw cqpapcm aamc",
        
                    link: "google.com",
                    btn_title: "Discover"
                },
            ])
        }, 2000)
    })
}


const Banner = () => {

    const bannerDataRef = useRef()
    const [loading , setLoading] = useState(true)
    const [active, setActive] = useState(0)
    const bgColorsRef = useRef(['bg-gradient-to-r from-cyan-500 to-blue-500', 'bg-gradient-to-r from-violet-500 to-fuchsia-500',
     'bg-gradient-to-r from-purple-500 to-pink-500' ,'bg-gradient-to-r from-sky-500 to-indigo-500'])

    // fake api
    useEffect(() => {

        const getBanners = async () => {
            setLoading(true)
            bannerDataRef.current = await getBannerData()
            setLoading(false)
        }

        getBanners()

    }, [])

    const handleNextBtn = () => {
        if (active + 1 < bannerDataRef.current.length)
            setActive(prev => prev + 1)
    }
    const handlePrevBtn = () => {
        if (active > 0)
            setActive(prev => prev - 1)
    }

    return (
        <div className="banner h-[300px] w-full overflow-hidden flex items-center ">
            <div className="banner h-full w-full tablet:ml-16 tablet:mr-16 relative" >   

                {loading && !bannerDataRef.current && <BannerSkeleton />}
                {!loading && bannerDataRef.current &&
                <>
                    <Button className="absolute z-20 top-1/2 bg-white left-0 rounded-full shadow-md 
                                w-[40px] h-[40px] items-center justify-center -translate-x-1/2 -translate-y-1/2
                                hidden tablet:flex"
                        onClick={handlePrevBtn} 
                    >
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </Button>
                    <Button className="absolute z-20 top-1/2 bg-white right-0 rounded-full shadow-md  
                                w-[40px] h-[40px] items-center justify-center translate-x-1/2 -translate-y-1/2
                                hidden tablet:flex"
                        onClick={handleNextBtn} 
                    >   
                        <FontAwesomeIcon icon={faArrowRight} />
                    </Button>

                    <div className="absolute top-0 h-full grid transition-all duration-500"
                        style={{
                            gridTemplateColumns: `repeat(${bannerDataRef.current.length}, 1fr)`,
                            width: `${bannerDataRef.current.length * 100}%`,
                            left: `-${active*100}%`
                            }}
                    >
                        {bannerDataRef.current.map((banner, index) => {
                            const color = bgColorsRef.current[index % bgColorsRef.current.length]
                            return(
                                <BannerItem key={banner.id}
                                    header={banner.header}
                                    title={banner.btn_title}
                                    subHeader={banner.sub_header}
                                    link={banner.link}
                                    backGroundColor={color}
                                />
                            )
                        })}
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-3 flex gap-2">
                        {bannerDataRef.current.map((banner, index) => (
                            <Dot key={index} active={index===active} onClick={() => {setActive(index)}}/>
                        ))}
                    </div>
                </>}
            </div>
        </div>
    )
}

const BannerItem = ({backGroundColor, header, subHeader, link, title, ...props}) => {
    return (
        <div className={`${backGroundColor} h-full rounded-3xl ml-2 mr-2 flex justify-between `}
            {...props}
        >
            <div className=" w-full h-full tablet:pt-5 tablet:pl-14 pt-4 pl-5 pr-5 pb-4" >
                <h3 className=" text-3xl pb-2 w-full text-white">{header}</h3>
                <p className="w-full pb-3 max-h-[100px] text-white max-w-[600px]" > {subHeader}</p>
                <Button className="rounded-3xl pt-2.5 pb-2.5 pl-5 pr-5 text-center text-sm bg-black shadow-xl text-white">{title}</Button>
            </div>
            <div className="image h-full w-[400px] hidden overflow-hidden laptop:block">
                <img className="w-full h-full object-cover" src="banner.png" alt={header} />
            </div>
        </div>
    )
}

const Dot = ({active, onClick , ...props}) => {
    return (
        <button className={`${active ? "w-10" : "w-6"} h-1.5 rounded bg-black transition-all
        ${active ? "opactity-100": "opacity-20"}`}
            onClick={onClick}
        >
        </button>
    )
}

const BannerSkeleton = () => {
    return (
        <div className="h-full w-full bg-gray-200 rounded-3xl animate-pulse">

        </div>
    )
}

export default Banner