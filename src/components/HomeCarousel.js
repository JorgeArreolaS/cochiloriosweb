import React from 'react'
import Carousel from './shared/Carousel'

const HeroCarouselItem = (props) => {

    return (
        <div className='carousel-item hero is-fullheight-with-navbar has-background'
            style={{
                backgroundSize: 'cover',
                backgroundPositionY: 'center',
                backgroundPositionX: 'center',
                backgroundImage: `url('${props.imgUrl}')`
                }}>
            <div className="hero-body">
                <>{props.children}</>
            </div>
        </div>
    )
}
export default function HomeCarousel() {
    return (
        <section className="hero is-fullheight-with-navbar has-carousel is-primary">
            <Carousel
                id="Presentation"
                isHero={true}
                config={{
                    navigationSwipe: true,
                    slidesToScroll: 1,
                    slidesToShow: 1,
                    infinite: true,
                    duration: 300,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    pauseOnHover: true,
                }}>
                <HeroCarouselItem imgUrl="img/IMG_20200918_091951.jpg">
                    <div className="container">
                        <h1 className="title">
                            Hola familia
                        </h1>
                        <h2 className="subtitle">
                            Fullheight subtitle
                        </h2>
                    </div>
                </HeroCarouselItem>
                <HeroCarouselItem imgUrl="img/IMG_20201004_130834.jpg">
                    <div className="container">
                        <h1 className="title">
                            Fullheight title
                        </h1>
                        <h2 className="subtitle">
                            Fullheight subtitle
                        </h2>
                    </div>
                </HeroCarouselItem>
                <HeroCarouselItem imgUrl="img/IMG_20201014_184350.jpg">
                    <div className="container">
                        <h1 className="title">
                            Fullheight title
                        </h1>
                        <h2 className="subtitle">
                            Fullheight subtitle
                        </h2>
                    </div>
                </HeroCarouselItem>
                <HeroCarouselItem imgUrl="img/IMG_20201023_212514.jpg">
                    <div className="container">
                        <h1 className="title">
                            Fullheight title
                        </h1>
                        <h2 className="subtitle">
                            Fullheight subtitle
                        </h2>
                    </div>
                </HeroCarouselItem>
                <HeroCarouselItem imgUrl="img/IMG_20201026_211710.jpg">
                    <div className="container">
                        <h1 className="title">
                            Fullheight title
                        </h1>
                        <h2 className="subtitle">
                            Fullheight subtitle
                        </h2>
                    </div>
                </HeroCarouselItem>
            </Carousel>
        </section>
    )
}
