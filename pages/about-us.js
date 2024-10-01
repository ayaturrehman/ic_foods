import VideoBox from "@/components/elements/VideoBox"
import Layout from "@/components/layout/Layout"
import Testimonial4 from "@/components/sections/Testimonial4"
import dynamic from 'next/dynamic'
import Link from "next/link"
import { useState } from "react"
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})
export default function AboutUs() {

    return (
        <>
            <Layout breadcrumbTitle="About Us">
                {/*-about*/}
                <section className="about-section position-relative">
                    {/*-============spacing==========-*/}
                    <div className="pd_top_90" />
                    {/*-============spacing==========-*/}
                    <div className="auto-container">
                        <div className="row align-items-start">
                            <div className="col-lg-6 col-md-12">
                                <div className="image_box_only type_seven">
                                    <div className="icon_box_only type_four inline_box trans">
                                        <div className="icon">
                                            <img src="/assets/images/icon-image-1.png" alt="img" className="img-fluid" />
                                        </div>
                                        <div className="content">
                                            <div className="title_18">
                                                <Link href="#">
                                                    Life Insurance
                                                </Link>
                                            </div>
                                        </div>
                                        <Link className="link" href="#">
                                            <svg width={30} height={32} viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx={15} cy={17} r={15} fill="var(--color-set-two-three-6)">
                                                </circle>
                                                <g clipPath="url(#clip0_117_28461)">
                                                    <path d="M15.0757 24.3888C15.8841 25.207 17.6847 24.9358 17.8785 23.6492C19.0847 15.6614 25.1202 8.92269 29.6876 2.57279C30.954 0.813155 28.042 -0.858436 26.7921 0.88025C22.6184 6.68227 17.3578 12.7875 15.2998 19.828C12.948 17.4244 10.5867 15.0437 7.94892 12.9317C6.27842 11.5936 3.88886 13.951 5.57736 15.3031C9.01404 18.0559 11.984 21.2659 15.0757 24.3888Z" fill="var(--color-set-two-three-5)" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_117_28461">
                                                        <rect width={25} height={25} fill="white" transform="translate(5)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </Link>
                                    </div>
                                    <div className="icon_box_only type_four position_two trans">
                                        <div className="icon">
                                            <img src="/assets/images/icon-image-2.png" alt="img" className="img-fluid" />
                                        </div>
                                        <div className="content">
                                            <div className="title_18">
                                                <Link href="#">
                                                    Health Insurance
                                                </Link>
                                            </div>
                                        </div>
                                        <Link className="link" href="#">
                                            <svg width={30} height={32} viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx={15} cy={17} r={15} fill="var(--color-set-two-three-6)">
                                                </circle>
                                                <g clipPath="url(#clip0_117_2846)">
                                                    <path d="M15.0757 24.3888C15.8841 25.207 17.6847 24.9358 17.8785 23.6492C19.0847 15.6614 25.1202 8.92269 29.6876 2.57279C30.954 0.813155 28.042 -0.858436 26.7921 0.88025C22.6184 6.68227 17.3578 12.7875 15.2998 19.828C12.948 17.4244 10.5867 15.0437 7.94892 12.9317C6.27842 11.5936 3.88886 13.951 5.57736 15.3031C9.01404 18.0559 11.984 21.2659 15.0757 24.3888Z" fill="var(--color-set-two-three-5)" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_117_2846">
                                                        <rect width={25} height={25} fill="white" transform="translate(5)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </Link>
                                    </div>
                                    <div className="fun_facts type_two">
                                        <h4>

                                            <CounterUp count={25} time={1} />
                                            <small>
                                                + </small></h4>
                                        <h6 className="title_no_a_26">Years Of
                                            Experience</h6>
                                    </div>
                                    <div className="m_image">
                                        <img src="/assets/images/about/about-1-min.png" alt="img" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 pd_left_30">
                                <div className="section_title type_one">
                                    <h4 className="sm_title"> About Company</h4>
                                    <div className="title_whole">
                                        <h2 className="title"> Welcome to I C FOODS LTD – Your Trusted </h2>
                                    </div>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="mr_bottom_20" />
                                {/*-============spacing==========-*/}
                                <p>At I C FOODS LTD, we pride ourselves on being a leading wholesale supplier of a wide range of fast-moving consumer goods (FMCG). Established in 2021 and based in Doncaster, England, we have grown rapidly by offering businesses high-quality products and exceptional service. Whether you run a local shop, a restaurant, or a large-scale retail chain, we are committed to being your reliable partner for all your wholesale needs.</p>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_30" />
                                {/*-============spacing==========-*/}
                               
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_70" />
                                {/*-============spacing==========-*/}
                            </div>
                        </div>
                    </div>
                    <div className="ab_img_right_bottom z_minus_1">
                        <img src="/assets/images/bg-2.png" className="img-fluid" alt="img" />
                    </div>
                </section>
                {/*-about end*/}
                {/*service*/}
                <section className="service-section">
                    {/*-============spacing==========-*/}
                    <div className="pd_top_60" />
                    {/*-============spacing==========-*/}
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section_title type_one">

<h2 className="mb-0 p-0">Our Mission</h2>

<p className="mt-0 p-0">Our mission is simple: to provide businesses across the UK with a diverse range of products at competitive prices, ensuring they can meet the demands of their customers. We strive to create long-lasting relationships with our clients by delivering exceptional value and outstanding customer service.</p>

<h2  className="mb-0 pb-0 mt-3">What We Do</h2>

<p className="mt-0 pt-0" >At I C FOODS LTD, we specialize in sourcing and distributing a variety of goods, including food and beverages, household essentials, health and wellbeing products, and much more. Our extensive product range, coupled with our reliable delivery network, allows us to serve a broad range of industries, from small retailers to large hospitality businesses.</p>

<h2 className="mb-0 pb-0 mt-3" >Why Choose Us?</h2>

<ul>
    <li><strong>Quality Products:</strong> We ensure that all the products we offer meet high standards of quality, ensuring reliability and customer satisfaction.</li>
    <li><strong>Competitive Pricing:</strong> We provide our products at highly competitive prices, enabling businesses to maximize their profitability.</li>
    <li><strong>Reliable Delivery:</strong> Our efficient logistics team ensures that your orders are delivered on time, every time, no matter where your business is located in the UK.</li>
    <li><strong>Customer Focus:</strong> We take pride in offering personalized service and solutions tailored to the unique needs of each client.</li>
</ul>

<h2  className="mb-0 pb-0 mt-3">Get in Touch</h2>

<p>If you're looking for a trusted wholesale partner, look no further than I C FOODS LTD. We're here to support your business and help you succeed. Feel free to <a href="contact.html">contact us</a> for more information or to discuss your specific requirements.</p>
                            </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_top_40" />
                                {/*-============spacing==========-*/}
                            </div>
                        </div>
                       
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_60" />
                    {/*-============spacing==========-*/}
                </section>
                {/*service*/}
                {/*content*/}
               


            </Layout>
        </>
    )
}