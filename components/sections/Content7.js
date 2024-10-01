import Link from "next/link"
import VideoBox from "../elements/VideoBox"


export default function Content7() {
    return (
        <>
            <section className="content-section bg_light_1">
                {/*-============spacing==========-*/}
                <div className="pd_top_90" />
                {/*-============spacing==========-*/}
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12">
                            <div className="image_video_box_only  type_one">
                                <div className="image one height_550px">
                                    <img src="/assets/images/who_we_supply.jpg" alt="img" className="img-fluid height_550px object-fit-cover" />
                                    {/* <div className="video_box video-inner text-center"> */}
                                        {/* <VideoBox /> */}
                                    {/* </div> */}
                                </div>
                            </div>
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_40" />
                            {/*-============spacing==========-*/}
                        </div>
                        <div className="col-lg-7 col-md-12 pd_left_40">
                            <div className="section_title type_one">
                                <h4 className="sm_title"> Who We Supply</h4>
                                <div className="title_whole">
                                    <h2 className="title"> Serving Businesses Across Multiple Sectors</h2>
                                </div>
                            </div>
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_20" />
                            {/*-============spacing==========-*/}
                            <div className="position-relative border_left_abolute_5px_two pd_left_40">
                            At I C FOODS LTD, we take pride in supplying a diverse range of businesses across various sectors. Our commitment to quality and reliability makes us the go-to wholesale partner for companies of all sizes. Here’s a glimpse of the industries we serve:</div>
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_30" />
                            {/*-============spacing==========-*/}
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="icon_box_only type_five d-flex color_two trans">
                                        <div className="icon">
                                            <i aria-hidden="false" className="fas fa-check-circle" /></div>
                                        <div className="content">
                                            <div className="title_22">
                                                <Link href="#">Retailers</Link></div>
                                            <p>Supplying essential products to local shops, supermarkets, and retail chains, keeping shelves stocked with customer favorites.</p>
                                        </div>
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_20" />
                                    {/*-============spacing==========-*/}
                                </div>
                                <div className="col-lg-6">
                                    <div className="icon_box_only type_five d-flex color_two  trans">
                                        <div className="icon">
                                            <i aria-hidden="false" className="fas fa-check-circle" /></div>
                                        <div className="content">
                                            <div className="title_22">
                                                <Link href="#">Food Service Provider</Link></div>
                                            <p>Offering a wide selection of food and ingredients for restaurants, cafés, and catering services.</p>
                                        </div>
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_20" />
                                    {/*-============spacing==========-*/}
                                </div>
                                <div className="col-lg-6">
                                    <div className="icon_box_only type_five d-flex color_two  trans">
                                        <div className="icon">
                                            <i aria-hidden="false" className="fas fa-check-circle" /></div>
                                        <div className="content">
                                            <div className="title_22">
                                                <Link href="#">Offices & Corporate</Link></div>
                                            <p>Providing offices with pantry supplies, cleaning products, and essentials for a productive workplace.</p>
                                        </div>
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_20" />
                                    {/*-============spacing==========-*/}
                                </div>
                                <div className="col-lg-6">
                                    <div className="icon_box_only type_five d-flex  color_two  trans">
                                        <div className="icon">
                                            <i aria-hidden="false" className="fas fa-check-circle" /></div>
                                        <div className="content">
                                            <div className="title_22">
                                                <Link href="#"> Small Cash & Carryies</Link></div>
                                            <p>Delivering a variety of products to small cash & carry businesses, ensuring they can offer their customers a wide range of goods.</p>
                                        </div>
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_20" />
                                    {/*-============spacing==========-*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*-============spacing==========-*/}
                <div className="pd_bottom_60" />
                {/*-============spacing==========-*/}
            </section>

        </>
    )
}
