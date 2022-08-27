import Button from "react-bootstrap/Button"
import styles from './Galary.module.scss'
import classNames from "classnames/bind"
import { useEffect, useRef, useState } from "react"
import axios from "axios"

const cx = classNames.bind(styles)

const photoServices = (page) => {
    return axios
        .get('https://picsum.photos/v2/list', {
            params: {
                page: page,
                limit: 8
            }
        })
        .then(reps => {
            return reps.data
        })
        .catch(errors => {
            console.log(errors)
        })
}

function Galary() {
    const headerRef = useRef()
    const wrapperRef = useRef()
    const [photos, setPhoto] = useState([])
    const [page, setPage] = useState(1)
    
    useEffect(() => {
        const handleFixedHeader = (e) => {
            // hide header if scroll top >= 60
            if (e.target.scrollTop <= 60 ) {
                headerRef.current.style.transform = 'translateY(0)'
            }
            else {
                headerRef.current.style.transform = 'translateY(-100%)'
            }
        }
        const wrapper = wrapperRef.current
        wrapper.addEventListener('scroll', handleFixedHeader)
        return () => {
            wrapper.removeEventListener('scroll', handleFixedHeader)
        }
    }, [])

    useEffect(() => {
        const getPhotos = async () => {
            const resultPhotos = await photoServices(page)
            setPhoto(photos => [...photos, ...resultPhotos])
        }
        getPhotos()
    }, [page])

    const handleLoadMore = () => {
        setPage(page => page + 1)
    }

    return (
        <div ref={wrapperRef} className={cx('wrapper')}>
            <header ref={headerRef} className={cx('header')}></header>
            <div className={cx('body')}>
                <div className={cx('nav-wrapper')}>
                    <nav className={cx('nav')}></nav>
                </div>
                <div className={cx('content')}>
                    <div className={cx('content__body')}>
                        {photos.length &&
                        photos.map(photo => {
                            return (
                                <div className={cx('content__item')} key={photo.id}>
                                    <img src={photo.download_url} alt={photo.author} />
                                </div>
                            )
                        })}
                    </div>
                    <div className={cx('content__btn')}>
                        <Button
                            onClick={handleLoadMore}
                        >
                            Load more
                        </Button>
                    </div>
                </div>
            </div>
            <footer className={cx('footer')}>footer</footer>
        </div>
    )
}

export default Galary