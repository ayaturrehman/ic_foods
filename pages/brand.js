import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
export default function Brand() {

    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }

    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <Layout breadcrumbTitle="Brand & Suppliers">
                {/*content*/}
                <section className="content-section">
                    {/*-============spacing==========-*/}
                    <div className="pd_top_90" />
                    {/*-============spacing==========-*/}
                    <div className="container">

                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <h1>Brands & Suppliers</h1>

                                <p>At I C FOODS LTD, we are proud to collaborate with trusted, renowned brands from around the world. Our carefully curated selection ensures that we provide you with high-quality products that meet the needs of your business. We partner with global leaders across various sectors to offer a comprehensive range of fast-moving consumer goods (FMCG) at competitive prices.</p>

                                <h2>Our Commitment to Quality</h2>
                                <p>We work closely with established brands to ensure that every product we deliver maintains the highest standards of quality. Our partnerships enable us to supply everything from everyday essentials to specialty items, ensuring your shelves are always stocked with the products your customers love.</p>

                                <h2>Wide Range of Products</h2>
                                <p>Our extensive portfolio includes leading brands in categories such as:</p>
                                <ul>
                                    <li><strong>Beverages</strong></li>
                                    <li><strong>Health & Wellbeing</strong></li>
                                    <li><strong>Household Essentials</strong></li>
                                    <li><strong>Food & Snacks</strong></li>
                                </ul>

                                <h2>Strong Supplier Relationships</h2>
                                <p>Our long-standing relationships with suppliers allow us to offer exclusive deals and promotions, providing great value to our customers. We continuously expand our product range to keep up with market trends and consumer demands.</p>

                                <h2>Why Partner with Us?</h2>
                                <ul>
                                    <li>Exclusive access to top brands</li>
                                    <li>Competitive pricing</li>
                                    <li>Reliable supply chain</li>
                                </ul>


                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_20" />
                                {/*-============spacing==========-*/}
                            </div>
                        </div>
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_50" />
                    {/*-============spacing==========-*/}
                </section>
                <section className="news-section position-relative bg_light_1">
                    {/*-============spacing==========-*/}
                    <div className="pd_top_90" />
                    {/*-============spacing==========-*/}
                    <div className="ab_img_left_bottom z_0 op_5">
                        <img src="/assets/images/bg-1.png" className="img-fluid" alt="img" />
                    </div>
                    <div className="container z_1 position-relative">
                        <div className="row">
                            <div className="col-lg-8 m-auto">
                                <div className="section_title text-center type_one">
                                </div>
                            </div>
                        </div>
                        {/*-============spacing==========-*/}
                        <div className="pd_bottom_40" />
                        {/*-============spacing==========-*/}
                        <div className="blog_post position-relative">
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="blog_box type_one trans hover_1_get borenable">
                                        <div className="blog_inner trans">
                                            <div className="vertical_text_1">
                                            </div>
                                            <div className="image_box trans hover_1">
                                                <Link href="/blog">
                                                    <img src="/assets/images/brands/1.jpg" alt="image" className="img-fluid" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="blog_box type_one trans hover_1_get borenable">
                                        <div className="blog_inner trans">
                                            <div className="vertical_text_1">
                                            </div>
                                            <div className="image_box trans hover_1">
                                                <Link href="/blog">
                                                    <img src="/assets/images/brands/2.jpg" alt="image" className="img-fluid" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="blog_box type_one trans hover_1_get borenable">
                                        <div className="blog_inner trans">
                                            <div className="vertical_text_1">
                                            </div>
                                            <div className="image_box trans hover_1">
                                                <Link href="/blog">
                                                    <img src="/assets/images/brands/3.jpg" alt="image" className="img-fluid" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="blog_box type_one trans hover_1_get borenable">
                                        <div className="blog_inner trans">
                                            <div className="vertical_text_1">
                                            </div>
                                            <div className="image_box trans hover_1">
                                                <Link href="/blog">
                                                    <img src="/assets/images/brands/4.jpg" alt="image" className="img-fluid" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="blog_box type_one trans hover_1_get borenable">
                                        <div className="blog_inner trans">
                                            <div className="vertical_text_1">
                                            </div>
                                            <div className="image_box trans hover_1">
                                                <Link href="/blog">
                                                    <img src="/assets/images/brands/5.jpg" alt="image" className="img-fluid" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="blog_box type_one trans hover_1_get borenable">
                                        <div className="blog_inner trans">
                                            <div className="vertical_text_1">
                                            </div>
                                            <div className="image_box trans hover_1">
                                                <Link href="/blog">
                                                    <img src="/assets/images/brands/6.jpg" alt="image" className="img-fluid" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="blog_box type_one trans hover_1_get borenable">
                                        <div className="blog_inner trans">
                                            <div className="vertical_text_1">
                                            </div>
                                            <div className="image_box trans hover_1">
                                                <Link href="/blog">
                                                    <img src="/assets/images/brands/7.jpeg" alt="image" className="img-fluid" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="blog_box type_one trans hover_1_get borenable">
                                        <div className="blog_inner trans">
                                            <div className="vertical_text_1">
                                            </div>
                                            <div className="image_box trans hover_1">
                                                <Link href="/blog">
                                                    <img src="/assets/images/brands/8.jpg" alt="image" className="img-fluid" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="blog_box type_one trans hover_1_get borenable">
                                        <div className="blog_inner trans">
                                            <div className="vertical_text_1">
                                            </div>
                                            <div className="image_box trans hover_1">
                                                <Link href="/blog">
                                                    <img src="/assets/images/brands/9.jpg" alt="image" className="img-fluid" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>




                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="blog_box type_one trans hover_1_get borenable">
                                        <div className="blog_inner trans">
                                            <div className="vertical_text_1">
                                            </div>
                                            <div className="image_box trans hover_1">
                                                <Link href="/blog">
                                                    <img src="/assets/images/brands/10.jpg" alt="image" className="img-fluid" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                               

                            </div>
                        </div>
                    </div>
                    <div className="ab_img_right_top z_0">
                        <img src="/assets/images/line.png" className="img-fluid" alt="img" />
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_70" />
                    {/*-============spacing==========-*/}
                </section>



            </Layout>
        </>
    )
}