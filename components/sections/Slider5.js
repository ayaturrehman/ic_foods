import Link from "next/link"

import { Autoplay, Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.owl-next',
        prevEl: '.owl-prev',
    },
    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
}
export default function Slider5() {
    return (
        <>
            <section className="slider style_six">
                <Swiper {...swiperOptions} className="owl_nav_block owl_dots_none theme_carousel">
                    {/*-sldier*/}
                    <SwiperSlide className="slide-item-content">
                        <div className="image-layer" style={{ backgroundImage: 'url(assets/images/banner-1.png)' }} />
                        <div className="slide-item content_left">
                            <div className="auto-container">
                                <div className="row align-items-center">
                                    <div className="col-md-7">
                                        <div className="slider_content">
                                            <h6 className="animate_up">
                                                <img src="/assets/images/slider/Icon-white.png" className="img-fluid" alt="icon" /> UK School Transport Management System

                                            </h6>
                                            <h1 className="animate_left">Modern School <br />
                                            Transport Solutions</h1>
                                            <div className="button_all animate_down">
                                                <Link href="/eligibility" className="theme_btn color_white  animated">Apply for Transport</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="extra_content_box" style={{ backgroundImage: 'url(assets/images/line.png)' }}>
                                <p>The UK School Transport Management System provides comprehensive, technology-driven solutions for local authorities managing home-to-school transport. Our platform addresses the financial, operational, and social challenges of school transport through integrated modules for eligibility, route optimization, and fleet management.</p>
                                <Link href="/contact">Get Support</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/*-slider*/}
                    {/*-sldier*/}
                    {/* <SwiperSlide className="slide-item-content">
                        <div className="image-layer" style={{ backgroundImage: 'url(assets/images/slider/banner-6-2.jpg)' }} />
                        <div className="slide-item content_left">
                            <div className="auto-container">
                                <div className="row align-items-center">
                                    <div className="col-md-6">
                                        <div className="slider_content">
                                            <h6 className="animate_up">
                                                <img src="/assets/images/slider/Icon-white.png" className="img-fluid" alt="icon" /> Best For Insurance
                                            </h6>
                                            <h1 className="animate_left">Insurance<br />
                                                Generation<br />
                                                To lead </h1>
                                            <div className="button_all animate_down">
                                                <Link href="#" className="theme_btn color_white  animated">Read
                                                    More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide> */}
                    {/*-slider*/}
                    {/*-sldier*/}
                    {/* <SwiperSlide className="slide-item-content">
                        <div className="image-layer" style={{ backgroundImage: 'url(assets/images/slider/banner-6-3.jpg)' }} />
                        <div className="slide-item content_left">
                            <div className="auto-container">
                                <div className="row align-items-center">
                                    <div className="col-md-6">
                                        <div className="slider_content">
                                            <h6 className="animate_up">
                                                <img src="/assets/images/slider/Icon-white.png" className="img-fluid" alt="icon" /> Best For Insurance
                                            </h6>
                                            <h1 className="animate_left"> Life Happy<br />
                                                Insurance <br />
                                                Policy </h1>
                                            <div className="button_all animate_down">
                                                <Link href="#" className="theme_btn color_white  animated">Read
                                                    More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide> */}
                    {/*-slider*/}
                    <div className="owl-nav">
                        <button type="button" role="presentation" className="owl-prev">
                            <i className="fi-rs-arrow-small-left" />
                        </button>
                        <button type="button" role="presentation" className="owl-next">
                            <i className="fi-rs-arrow-small-right" />
                        </button>
                    </div>
                </Swiper>
            </section>

        </>
    )
}
