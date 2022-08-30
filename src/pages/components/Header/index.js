import Button from "../../../components/Button"
import { useEffect, useRef } from "react"
import useHover from "../../../hooks/useHover"
import Menu from '../Menu'


const Header = () => {

    const headRef = useRef()
    // auto hidden when scroll
    useEffect(() => {
        if (!headRef.current) return
        const handleFixedHeader = (e) => {
            if (window.oldScrollY < window.scrollY && window.scrollY >= 70 ) {
               headRef.current.style.transform = 'translateY(-100%)'
            }
            else {
                
                headRef.current.style.transform = 'translateY(0)'
            }
            window.oldScrollY = window.scrollY
        }

        window.addEventListener('scroll', handleFixedHeader)

        return () => {
            window.removeEventListener('scroll', handleFixedHeader)
        }
    }, [])

    return (
        <div className="header-wrapper mb-10 w-full h-[70px] transition-all bg-white shadow-sm"
            ref={headRef}
        >
            <div className="header grid grid-cols-3 pl-5 pr-5 w-full h-full 
                            tablet:pl-20 tablet:pr-20 ">
                <div className="header__group h-full flex items-center gap-2">
                    <Menu />
                    <Search />
                </div>

                <div className="header__group h-full flex items-center justify-center">
                    <a href="/" className="h-3/4 translate-y-1">
                        <svg className="h-full" width="74" height="70" viewBox="0 0 74 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M39.011 5.98099C39.011 2.28765 37.2847 0.440979 33.832 0.440979H26.263C22.8097 0.440979 21.0833 2.28765 21.084 5.98099V32.781H25.409V20.934L39.009 20.943L39.011 5.98099ZM34.687 17.015H25.408V6.25497C25.3722 5.99881 25.3964 5.73785 25.4786 5.49261C25.5608 5.24738 25.6988 5.02453 25.8817 4.84164C26.0646 4.65875 26.2874 4.52079 26.5326 4.4386C26.7778 4.35641 27.0388 4.33224 27.295 4.36798H32.795C33.0512 4.33224 33.3121 4.35641 33.5574 4.4386C33.8026 4.52079 34.0254 4.65875 34.2083 4.84164C34.3912 5.02453 34.5292 5.24738 34.6113 5.49261C34.6935 5.73785 34.7177 5.99881 34.682 6.25497L34.687 17.015Z" fill="#FF5E00"/>
                        <path d="M21.574 32.288V5.97801C21.4647 4.60359 21.8799 3.23877 22.736 2.158C23.2062 1.71957 23.7625 1.38388 24.3696 1.17228C24.9767 0.960685 25.6212 0.877827 26.262 0.928994H33.831C34.4719 0.877827 35.1163 0.960685 35.7234 1.17228C36.3304 1.38388 36.8868 1.71957 37.357 2.158C38.2134 3.23863 38.629 4.60346 38.52 5.97801V20.449L24.92 20.44V32.286L21.574 32.288ZM27.298 3.869C26.976 3.83172 26.6498 3.86774 26.3437 3.97431C26.0376 4.08089 25.7596 4.2553 25.5304 4.48448C25.3013 4.71365 25.1269 4.99165 25.0203 5.29774C24.9137 5.60382 24.8777 5.93007 24.915 6.25202V17.508H35.178V6.249C35.2153 5.92704 35.1793 5.60083 35.0727 5.29475C34.9661 4.98866 34.7917 4.71063 34.5625 4.48145C34.3334 4.25228 34.0553 4.0779 33.7492 3.97132C33.4432 3.86475 33.117 3.82873 32.795 3.86601L27.298 3.869Z" fill="#FF5E00"/>
                        <path d="M49.053 0.440979V26.741C49.053 28.1523 48.4676 28.8577 47.297 28.857H40.924C39.666 28.857 39.037 28.1516 39.037 26.741L39.031 22.478H34.707L34.713 26.605C34.713 30.719 36.4393 32.776 39.892 32.776H48.16C51.6427 32.776 53.384 30.734 53.384 26.65V0.440979H49.053Z" fill="url(#paint0_linear_1_175)"/>
                        <path d="M39.885 32.288C39.2361 32.3409 38.5837 32.2454 37.9772 32.0085C37.3708 31.7717 36.8262 31.3997 36.385 30.921C35.5043 29.6629 35.0873 28.1382 35.205 26.607L35.2 22.972H38.542L38.547 26.747C38.547 28.428 39.394 29.353 40.93 29.353H47.303C48.142 29.353 49.55 29.014 49.55 26.747V0.934998H52.891V26.656C53.0084 28.1764 52.5875 29.6896 51.702 30.931C51.2515 31.4098 50.6988 31.7807 50.0849 32.016C49.4711 32.2513 48.812 32.345 48.157 32.29L39.885 32.288Z" fill="url(#paint1_linear_1_175)"/>
                        <path d="M12.512 56.029C12.512 50.187 4.048 52.441 4.048 48.83C4.048 47.289 5.221 46.553 6.739 46.599C8.395 46.645 9.338 47.634 9.43 48.715H12.328C12.098 45.978 9.936 44.368 6.877 44.368C3.611 44.368 1.38 46.116 1.38 48.922C1.38 54.81 9.867 52.303 9.867 56.167C9.867 57.524 8.832 58.513 6.992 58.513C5.175 58.513 4.255 57.455 4.14 56.144H1.334C1.334 58.973 3.795 60.721 6.992 60.721C10.557 60.721 12.512 58.421 12.512 56.029ZM16.0199 57.041C16.0199 59.617 17.4229 60.56 19.6769 60.56H21.7469V58.375H20.1369C19.0329 58.375 18.6649 57.984 18.6649 57.041V50.026H21.7469V47.887H18.6649V44.736H16.0199V47.887H14.5249V50.026H16.0199V57.041ZM35.6405 47.887H33.0185V54.948C33.0185 57.271 31.7535 58.467 29.8215 58.467C27.9125 58.467 26.6475 57.271 26.6475 54.948V47.887H24.0485V55.339C24.0485 58.881 26.3025 60.744 29.2695 60.744C30.7645 60.744 32.1905 60.123 33.0185 59.042V60.56H35.6405V47.887ZM38.226 54.166C38.226 58.076 40.871 60.767 44.206 60.767C46.276 60.767 47.794 59.801 48.599 58.651V60.56H51.244V43.54H48.599V49.658C47.633 48.462 45.885 47.68 44.229 47.68C40.871 47.68 38.226 50.256 38.226 54.166ZM48.599 54.212C48.599 56.949 46.736 58.49 44.758 58.49C42.803 58.49 40.917 56.903 40.917 54.166C40.917 51.429 42.803 49.957 44.758 49.957C46.736 49.957 48.599 51.498 48.599 54.212ZM54.6879 60.56H57.3099V47.887H54.6879V60.56ZM56.0219 46.208C56.9419 46.208 57.6779 45.472 57.6779 44.529C57.6779 43.586 56.9419 42.85 56.0219 42.85C55.0789 42.85 54.3429 43.586 54.3429 44.529C54.3429 45.472 55.0789 46.208 56.0219 46.208ZM72.8273 54.212C72.8273 50.233 69.9753 47.68 66.3643 47.68C62.7533 47.68 59.9013 50.233 59.9013 54.212C59.9013 58.191 62.6383 60.767 66.2493 60.767C69.8833 60.767 72.8273 58.191 72.8273 54.212ZM62.5693 54.212C62.5693 51.337 64.3403 49.957 66.3183 49.957C68.2733 49.957 70.1363 51.337 70.1363 54.212C70.1363 57.087 68.2043 58.49 66.2493 58.49C64.2713 58.49 62.5693 57.087 62.5693 54.212Z" fill="black"/>
                        <defs>
                        <linearGradient id="paint0_linear_1_175" x1="63.7684" y1="-6.41404" x2="20.484" y2="7.08346" gradientUnits="userSpaceOnUse">
                        <stop/>
                        <stop offset="0.5"/>
                        <stop offset="1"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_1_175" x1="62.7653" y1="-5.71551" x2="21.53" y2="6.8627" gradientUnits="userSpaceOnUse">
                        <stop/>
                        <stop offset="0.5"/>
                        <stop offset="1"/>
                        </linearGradient>
                        </defs>
                        </svg>
                    </a>
                </div>

                <div className="header__group h-full flex items-center justify-end gap-10">
                    <div className="header__subgroup flex gap-4">
                        <Button className="hidden laptop:flex cursor-pointer rounded-2xl items-center justify-center gap-1 text-sm">
                            <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.751 19H2.26002C1.86606 18.9995 1.47912 18.8956 1.13789 18.6987C0.79666 18.5018 0.513095 18.2188 0.315503 17.878C0.117911 17.5372 0.0132261 17.1504 0.0119143 16.7565C0.0106026 16.3625 0.112678 15.9751 0.307996 15.633C0.122364 15.284 0.0239109 14.8953 0.0210086 14.5C0.0210086 12.724 2.12101 11.109 5.36201 10.386C4.80713 9.62117 4.50951 8.6999 4.51204 7.755V5.5C4.50315 4.90413 4.61279 4.31243 4.83467 3.75934C5.05655 3.20625 5.38622 2.70284 5.80446 2.27832C6.22269 1.8538 6.72117 1.51667 7.27089 1.28656C7.8206 1.05645 8.41055 0.937927 9.00648 0.937927C9.60242 0.937927 10.1924 1.05645 10.7421 1.28656C11.2919 1.51667 11.7904 1.8538 12.2086 2.27832C12.6269 2.70284 12.9565 3.20625 13.1784 3.75934C13.4002 4.31243 13.5099 4.90413 13.501 5.5V7.76001C13.5032 8.70409 13.206 9.62453 12.652 10.389C15.901 11.11 18.001 12.726 18.001 14.505C17.9976 14.9034 17.8974 15.295 17.709 15.646C17.9025 15.9883 18.003 16.3753 18.0005 16.7685C17.998 17.1617 17.8925 17.5474 17.6946 17.8871C17.4966 18.2269 17.2131 18.5089 16.8723 18.705C16.5315 18.9011 16.1452 19.0046 15.752 19.005L15.751 19ZM9.01002 12.25C5.28802 12.25 2.26002 13.259 2.26002 14.5V16.75H15.749V14.628C15.7563 14.5857 15.76 14.5429 15.76 14.5C15.76 13.259 12.732 12.25 9.01002 12.25ZM9.01002 3.25C8.41353 3.25079 7.84166 3.48813 7.41987 3.90991C6.99809 4.3317 6.76082 4.90351 6.76002 5.5V7.75C6.76002 8.34674 6.99706 8.91905 7.41902 9.341C7.84098 9.76296 8.41329 10 9.01002 10C9.60676 10 10.1791 9.76296 10.601 9.341C11.023 8.91905 11.26 8.34674 11.26 7.75V5.5C11.2592 4.90351 11.0219 4.3317 10.6001 3.90991C10.1783 3.48813 9.60652 3.25079 9.01002 3.25Z" fill="#11293B"/>
                            </svg>
                        </Button>
                        <Button className="hidden laptop:flex cursor-pointer rounded-2xl items-center justify-center gap-1 text-sm">
                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.01007 19C18.0101 14.091 18.0101 7.54602 18.0101 7.54602C18.0101 5.91002 18.0101 1.81897 13.5101 1.00097C9.01007 0.885971 9.01007 4.27301 9.01007 4.27301C9.01007 4.27301 9.01007 1.00097 4.51007 1.00097C0.0100679 1.81897 0.0100681 5.91002 0.0100681 7.54602C0.00806808 7.54602 0.00806808 14.091 9.01007 19ZM5.81012 3.29998C6.44619 3.5039 7.02769 3.84956 7.5108 4.31085C7.99391 4.77213 8.36597 5.33703 8.59906 5.96301C8.85006 6.01801 9.01007 6.06298 9.01007 6.06298L8.69 6.169C8.855 6.546 8.94001 6.78098 8.97601 6.70098V6.36999C8.97557 6.44669 8.98165 6.5233 8.99408 6.59899C8.99408 6.53999 9.00103 6.464 9.00103 6.354V6.62499C9.13103 7.06899 9.84007 3.87797 12.2131 3.30297C16.3701 2.76597 15.813 6.62 15.657 8.289C15.674 8.395 15.386 12.765 9.01104 16.138V16.187C2.76104 12.823 2.37303 8.39598 2.36603 8.28698V8.276L2.26104 8.31097C2.26411 8.12959 2.28351 7.94888 2.31903 7.77099C2.14803 5.94299 2.03502 2.81398 5.80902 3.29998H5.81012Z" fill="#11293B"/>
                            </svg>
                        </Button>
                        <Button className="hidden laptop:flex cursor-pointer rounded-2xl items-center justify-center gap-1 text-sm" >
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 1.81799L15.662 8.43799H15.585C15.4998 8.60481 15.3714 8.74563 15.213 8.84558C15.0546 8.94554 14.8723 9.00092 14.6851 9.00598H7.37305L7.65295 10.13H14.626C14.9243 10.13 15.2105 10.2486 15.4215 10.4595C15.6325 10.6705 15.751 10.9566 15.751 11.255C15.751 11.5534 15.6325 11.8395 15.4215 12.0505C15.2105 12.2615 14.9243 12.38 14.626 12.38H6.75598C6.45779 12.3797 6.17194 12.2611 5.96118 12.0502C5.75042 11.8392 5.63196 11.5532 5.63196 11.255C5.63876 11.192 5.65113 11.1298 5.66895 11.069L3.46899 2.255H2.81799V2.08301C2.64992 2.19067 2.45552 2.25016 2.25598 2.255H1.13196C0.833589 2.255 0.547526 2.13645 0.336548 1.92548C0.125569 1.7145 0.00695801 1.42837 0.00695801 1.13C0.00695801 0.831636 0.125569 0.545512 0.336548 0.334534C0.547526 0.123555 0.833589 0.00500488 1.13196 0.00500488H2.25598C2.45564 0.00999547 2.65009 0.0698219 2.81799 0.177979V0H16.8719C17.1701 0.000265063 17.4561 0.118884 17.6669 0.329834C17.8776 0.540784 17.996 0.826805 17.996 1.125C17.9911 1.37236 17.9031 1.61087 17.746 1.802L18 1.81799ZM5.68604 2.25L6.80798 6.75H14.041L15.63 2.25H5.68604ZM7.31396 14.625C7.6479 14.6246 7.97447 14.7233 8.25232 14.9085C8.53017 15.0937 8.74681 15.3572 8.87488 15.6656C9.00294 15.9741 9.03671 16.3135 8.9718 16.6411C8.9069 16.9687 8.74625 17.2696 8.51025 17.5059C8.27426 17.7421 7.97349 17.9032 7.646 17.9684C7.3185 18.0337 6.97909 18.0004 6.67053 17.8727C6.36197 17.745 6.09817 17.5287 5.9126 17.251C5.72703 16.9734 5.62805 16.6469 5.62805 16.313C5.62792 16.0914 5.67132 15.8721 5.75598 15.6674C5.84064 15.4626 5.9649 15.2766 6.12146 15.1198C6.27802 14.9631 6.46383 14.8387 6.66846 14.7538C6.87308 14.6689 7.09242 14.6251 7.31396 14.625ZM14.0601 14.625C14.394 14.6246 14.7204 14.7233 14.9983 14.9085C15.2761 15.0937 15.4929 15.3572 15.621 15.6656C15.749 15.9741 15.7827 16.3135 15.7178 16.6411C15.6529 16.9687 15.4923 17.2696 15.2563 17.5059C15.0204 17.7421 14.7196 17.9032 14.3921 17.9684C14.0646 18.0337 13.7251 18.0004 13.4165 17.8727C13.1079 17.745 12.8441 17.5287 12.6586 17.251C12.473 16.9734 12.374 16.6469 12.374 16.313C12.3739 16.0914 12.4174 15.8721 12.5021 15.6674C12.5867 15.4626 12.7109 15.2766 12.8674 15.1198C13.024 14.9631 13.2098 14.8387 13.4144 14.7538C13.6191 14.6689 13.8385 14.6251 14.0601 14.625Z" fill="#11293B"/>
                            </svg>
                        </Button>
                    </div>
                    <div className="header__subgroup flex gap-2">
                        <Button  className={`cursor-pointer rounded-2xl pt-1 pb-1 pl-3 pr-3 flex items-center justify-center gap-1
                                text-sm bg-gray-200 hover:bg-gray-300`}>
                            <span>Vn</span>
                            <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.30896 6.71002L1.25598 2.61902C1.07698 2.43735 0.976685 2.19254 0.976685 1.9375C0.976685 1.68246 1.07698 1.43765 1.25598 1.25598C1.34428 1.16636 1.4495 1.09521 1.56555 1.04663C1.6816 0.998056 1.8062 0.973022 1.93201 0.973022C2.05782 0.973022 2.18241 0.998056 2.29846 1.04663C2.41451 1.09521 2.51973 1.16636 2.60803 1.25598L5.98401 4.66498L9.36206 1.25598C9.45027 1.16639 9.55542 1.09525 9.67139 1.04669C9.78736 0.99813 9.91175 0.973145 10.0375 0.973145C10.1632 0.973145 10.2877 0.99813 10.4037 1.04669C10.5197 1.09525 10.6248 1.16639 10.713 1.25598C10.892 1.43765 10.9923 1.68246 10.9923 1.9375C10.9923 2.19254 10.892 2.43735 10.713 2.61902L6.65906 6.71002C6.57071 6.79937 6.46544 6.87029 6.34949 6.9187C6.23354 6.96711 6.10917 6.992 5.98352 6.992C5.85787 6.992 5.7335 6.96711 5.61755 6.9187C5.5016 6.87029 5.39633 6.79937 5.30798 6.71002H5.30896Z" fill="#677585"/>
                            </svg>
                        </Button>
                        <Button className={`cursor-pointer rounded-2xl pt-1 pb-1 pl-3 pr-3 flex items-center justify-center gap-1
                                text-sm bg-gray-200 hover:bg-gray-300`}>
                            <span>En</span>
                            <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.30896 6.71002L1.25598 2.61902C1.07698 2.43735 0.976685 2.19254 0.976685 1.9375C0.976685 1.68246 1.07698 1.43765 1.25598 1.25598C1.34428 1.16636 1.4495 1.09521 1.56555 1.04663C1.6816 0.998056 1.8062 0.973022 1.93201 0.973022C2.05782 0.973022 2.18241 0.998056 2.29846 1.04663C2.41451 1.09521 2.51973 1.16636 2.60803 1.25598L5.98401 4.66498L9.36206 1.25598C9.45027 1.16639 9.55542 1.09525 9.67139 1.04669C9.78736 0.99813 9.91175 0.973145 10.0375 0.973145C10.1632 0.973145 10.2877 0.99813 10.4037 1.04669C10.5197 1.09525 10.6248 1.16639 10.713 1.25598C10.892 1.43765 10.9923 1.68246 10.9923 1.9375C10.9923 2.19254 10.892 2.43735 10.713 2.61902L6.65906 6.71002C6.57071 6.79937 6.46544 6.87029 6.34949 6.9187C6.23354 6.96711 6.10917 6.992 5.98352 6.992C5.85787 6.992 5.7335 6.96711 5.61755 6.9187C5.5016 6.87029 5.39633 6.79937 5.30798 6.71002H5.30896Z" fill="#677585"/>
                            </svg>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}


const Search = () => {

    const [inputHovered, inputRef] = useHover()
    
    return (
        <label htmlFor="search" 
            className={`hidden laptop:flex items-center pl-4 pr-4 pt-2 pb-2 bg-gray-200 
            rounded-2xl cursor-pointer transition-all ${inputHovered && "bg-gray-200"}`}
            ref={inputRef}
        >   
        <svg className="" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.264969 16.395L4.45396 11.939C3.37303 10.6223 2.78367 8.97062 2.78694 7.26704C2.81824 5.86812 3.26168 4.50953 4.06169 3.36152C4.86171 2.21351 5.98273 1.32713 7.28429 0.813425C8.58584 0.299721 10.0101 0.181546 11.3785 0.473704C12.7469 0.765861 13.9987 1.45537 14.977 2.45582C15.9553 3.45627 16.6166 4.72316 16.878 6.09779C17.1394 7.47241 16.9894 8.89363 16.4467 10.1834C15.9039 11.4731 14.9926 12.5739 13.827 13.348C12.6614 14.1221 11.2932 14.535 9.89397 14.535C8.43174 14.5372 7.0063 14.0766 5.82195 13.219L1.60097 17.708C1.51761 17.7975 1.41709 17.8693 1.30544 17.9193C1.19378 17.9692 1.07326 17.9961 0.950974 17.9985C0.828692 18.001 0.707162 17.9788 0.593613 17.9334C0.480064 17.8879 0.376805 17.8201 0.289963 17.734C0.113332 17.5574 0.0120327 17.3192 0.00737047 17.0695C0.00270824 16.8198 0.0950526 16.5781 0.264969 16.395ZM9.89397 1.89503C8.82646 1.87118 7.77604 2.16589 6.87679 2.74165C5.97753 3.3174 5.27021 4.14807 4.84511 5.12757C4.42001 6.10708 4.29642 7.19103 4.49007 8.2411C4.68372 9.29117 5.18583 10.2597 5.93236 11.0231C6.67889 11.7866 7.63594 12.3103 8.68141 12.5274C9.72688 12.7445 10.8134 12.6453 11.8021 12.2422C12.7909 11.8391 13.6372 11.1506 14.2329 10.2645C14.8287 9.37834 15.1469 8.33481 15.147 7.26704C15.1598 5.85959 14.6142 4.5044 13.6298 3.49842C12.6454 2.49245 11.3023 1.91771 9.89494 1.90003L9.89397 1.89503Z" fill="#677585"/>
        </svg>
            <input className="outline-none bg-transparent ml-2"
                id="search"
            />
        </label>
    )
}

export default Header