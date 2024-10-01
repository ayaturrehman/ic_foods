import Link from "next/link"


export default function Blog6() {
    return (
        <>
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
                                <h4 className="sm_title"> Featured Categories</h4>
                                <div className="title_whole">
                                    <h2 className="title">Your One-Stop Shop for High-Demand Product Categories</h2>
                                </div>
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

        </>
    )
}
