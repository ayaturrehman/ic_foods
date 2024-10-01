import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
export default function Product() {

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
            <Layout breadcrumbTitle="Product & Service">
                {/*content*/}
                <section className="content-section">
                    {/*-============spacing==========-*/}
                    <div className="pd_top_90" />
                    {/*-============spacing==========-*/}
                    <div className="container">

                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <p>At I C FOODS LTD, we offer a wide range of high-quality products and services tailored to meet the needs of businesses across multiple industries. Whether you are a retailer, food service provider, or office manager, our comprehensive selection ensures that you find everything you need in one place.</p>

                                <h2>Our Product Categories</h2>

                                <p>Explore our diverse range of fast-moving consumer goods (FMCG) designed to help your business thrive:</p>

                                <ul>
                                    <li><strong>Soft Drinks:</strong> We stock a wide variety of soft drinks, including fizzy beverages, juices, energy drinks, and water, sourced from the most popular brands in the market.</li>
                                    <li><strong>Health & Wellbeing:</strong> A comprehensive range of vitamins, supplements, and nutrition products to help your customers maintain a healthy lifestyle.</li>
                                    <li><strong>Household Essentials:</strong> Offering a variety of cleaning products, personal care items, and other everyday household necessities.</li>
                                    <li><strong>Food Products:</strong> From packaged foods to dry goods, we provide a wide selection of quality food products to serve the needs of restaurants, cafés, and other food-related businesses.</li>
                                </ul>

                                <h2>Our Services</h2>

                                <p>We go beyond just providing products. At I C FOODS LTD, we offer a range of services designed to support the growth and success of your business:</p>

                                <ul>
                                    <li><strong>Bulk Wholesale:</strong> Benefit from competitive pricing by purchasing products in bulk, helping you maximize your margins and stay fully stocked.</li>
                                    <li><strong>Reliable Delivery:</strong> We understand the importance of timely delivery. Our logistics team ensures that your orders arrive on time, no matter where your business is located in the UK.</li>
                                    <li><strong>Custom Sourcing:</strong> If you need specific products not found in our usual inventory, our sourcing team can find the right solution to meet your needs.</li>
                                    <li><strong>Customer Support:</strong> Our dedicated customer support team is here to assist you with any inquiries, orders, or product recommendations. We work closely with you to understand your business and provide personalized solutions.</li>
                                </ul>

                                <h2>Why Choose Us?</h2>

                                <p>When you choose I C FOODS LTD, you are partnering with a trusted supplier that is committed to helping your business succeed. Our extensive product range, competitive pricing, and exceptional service set us apart in the wholesale market.</p>

                                <h3>Key Benefits of Partnering with Us:</h3>

                                <ul>
                                    <li><strong>Quality Products:</strong> We source from trusted suppliers to ensure that all our products meet the highest standards.</li>
                                    <li><strong>Competitive Pricing:</strong> Our pricing is designed to help your business grow by providing cost-effective solutions.</li>
                                    <li><strong>Reliable Service:</strong> From order placement to delivery, we make sure your experience with us is seamless and hassle-free.</li>
                                    <li><strong>Industry Expertise:</strong> With years of experience in the wholesale market, we understand your needs and offer tailored solutions.</li>
                                </ul>

                                <h2>Get Started with I C FOODS LTD</h2>

                                <p>Ready to enhance your product offerings and streamline your supply chain? Contact us today to discuss how we can support your business with our wide range of products and services.</p>



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
                                                    <img src="/assets/images/household.jpg" alt="image" className="img-fluid" />
                                                </Link>
                                                <div className="oh ho_1" />
                                                <div className="oh ho_2" />
                                                <div className="oh ho_3" />
                                                <div className="oh ho_4" />
                                            </div>
                                            <div className="content">
                                                <div className="d-flex authour align-items-center"></div>
                                                <h4 className="title_22">Household</h4>

                                                <p className="descs">
                                                    We stock a comprehensive range of trusted household products, helping businesses provide their customers with essential items for everyday life.

                                                </p>
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
                                                    <img src="/assets/images/soft.jpg" alt="image" className="img-fluid" />
                                                </Link>
                                                <div className="oh ho_1" />
                                                <div className="oh ho_2" />
                                                <div className="oh ho_3" />
                                                <div className="oh ho_4" />
                                            </div>
                                            <div className="content">
                                                <div className="d-flex authour align-items-center"></div>
                                                <h4 className="title_22">Soft Drinks</h4>

                                                <p className="descs">
                                                    We carry a wide variety of popular soft drink brands that are loved by consumers worldwide. From fizzy favorites to refreshing still beverages, our selection offers something for everyone.


                                                </p>
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
                                                    <img src="/assets/images/heatlh.jpg" alt="image" className="img-fluid" />
                                                </Link>
                                                <div className="oh ho_1" />
                                                <div className="oh ho_2" />
                                                <div className="oh ho_3" />
                                                <div className="oh ho_4" />
                                            </div>
                                            <div className="content">
                                                <div className="d-flex authour align-items-center"></div>
                                                <h4 className="title_22">Health & Wellbeing</h4>

                                                <p className="descs">
                                                    Our range includes top-quality supplements and nutrition products from leading brands. We ensure that businesses can meet their customers' health and wellness needs with confidence.

                                                </p>
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

                <div className="container">
                        <h2 className="text-center my-4 py-4"> Brand & Supplier</h2>
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
                    </div>
                    <p>
                    Explore our wide range of high-quality products, from beverages and food items to household essentials. We collaborate with top global brands to bring you the best. <Link href="/brand">Click here</Link> to see more of our trusted brands and suppliers.

                    </p>
                </div>



            </Layout>
        </>
    )
}