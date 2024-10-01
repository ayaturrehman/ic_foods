import Link from "next/link"

export default function Footer6({ }) {
    return (
        <>
            <footer className="footer style_six">
                <div className="pattern_bg">
                    <img src="/assets/images/line-st-2.png" className="img-fluid" alt="pattern" />
                </div>
                <section className="top_content">
                    {/*-============spacing==========-*/}
                    <div className="pd_top_80" />
                    {/*-============spacing==========-*/}
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 pd_right_70">
                                <div className="footer_widgets_box pd_bottom_30">
                                    <div className="logo_box">
                                        <Link href="#" className="logo navbar-brand">
                                            <h1>I C Foods</h1>
                                        </Link>
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_35" />
                                    {/*-============spacing==========-*/}
                                    <div className="position-relative">
                                    At I C FOODS LTD, we are dedicated to delivering high-quality wholesale solutions to businesses across various industries. 
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-6 col-sm-6 col-xs-12">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="footer_widgets_box pd_bottom_30">
                                            <div className="fwidget_title">
                                                <h2 className="title"> Other Pages </h2>
                                                {/*-============spacing==========-*/}
                                                <div className="pd_bottom_25" />
                                                {/*-============spacing==========-*/}
                                            </div>
                                            <div className="position-relative">
                                                <ul className="list_box list">
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i aria-hidden="false" className="far fa-arrow-alt-circle-right" /></div>
                                                            <Link className="links" href="#">Privacy Policy</Link>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i aria-hidden="false" className="far fa-arrow-alt-circle-right" /></div>
                                                            <Link className="links" href="#">Terms & Condition</Link>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i aria-hidden="false" className="far fa-arrow-alt-circle-right" /></div>
                                                            <Link className="links" href="#">Contact Us</Link>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i aria-hidden="false" className="far fa-arrow-alt-circle-right" /></div>
                                                            <Link className="links" href="#">Refund Policy</Link>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <div className="icon trans">
                                                                <i aria-hidden="false" className="far fa-arrow-alt-circle-right" /></div>
                                                            <Link className="links" href="#">About Us</Link>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                  
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <div className="footer_widgets_box pd_bottom_30">
                                <div className="newsteller_simple style_two">
                                        <div className="input_group">
                                            <form method="post">
                                                <div className="mc4wp-form-fields">
                                                    <input type="email" name="EMAIL" placeholder="Your email address" required />
                                                    <input type="submit" value="Sign up" />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    {/*-============spacing==========-*/}
                                    <div className="pd_bottom_25" />
                                    {/*-============spacing==========-*/}
                                    <div className="social-icons">
                                        <ul>
                                            <li>
                                                <Link href="#" className="m_icon">
                                                    <i className="fab fa-facebook" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#" className="m_icon">
                                                    <i className="fab fa-twitter" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#" className="m_icon">
                                                    <i className="fab fa-skype" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#" className="m_icon">
                                                    <i className="fab fa-instagram" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_40" />
                    {/*-============spacing==========-*/}
                </section>
                <section className="bottom_content">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="position-relative">
                                    <ul className="list_box linline">
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="icon trans">
                                                    <img src="/assets/images/shield.svg" className="img-fluid" alt="img" />
                                                </div>
                                                <Link className="links color_white" href="#">
                                                    Copyright {new Date().getFullYear()}, All Rights Reserved
                                                </Link>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 text-md-end">
                                <div className="position-relative">
                                    <ul className="list_box linline">
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="icon trans">
                                                    <i className=" fi-rr-clock" />
                                                </div>
                                                <Link className="links color_white" href="#">
                                                    Working Hours : Mon-Fri, 09am-5pm
                                                </Link>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>

        </>
    )
}
