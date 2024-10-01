import Link from "next/link"

export default function NavbarNav() {

    return (
        <>

            <ul className="navbar_nav">
                <li className="menu-item nav-item menu-item-has-children dropdown mennucolumn_full-six">
                    <Link href="/" className="nav_link">
                        <span className="text-link"> Home </span>
                    </Link>
                    
                    <div className="dropdown-btn"><span className="fa fa-angle-down" /></div>
                </li>
                <li className="menu-item  menu-item-has-children dropdown  mennucolumn_ nav-item">
                    <Link href="#" className="nav_link">
                        <span className="text-link">
                            Pages
                        </span>
                    </Link>
                    <ul className="sub_menu">
                        <li className="menu-item nav-item">
                            <Link href="/about-us" className="nav_link">
                                <span className="text-link"> About
                                    Us
                                </span>
                            </Link>
                        </li>
                        <li className="menu-item nav-item">
                            <Link href="/faqs" className="nav_link">
                                <span className="text-link">
                                    Faq’s
                                </span>
                            </Link>
                        </li>
                       
                        <li className="menu-item   nav-item">
                            <Link href="/team" className="nav_link">
                                <span className="text-link">
                                    Team
                                </span>
                            </Link>
                        </li>
                    </ul>
                    <div className="dropdown-btn"><span className="fa fa-angle-down" /></div>
                </li>
                <li className="menu-item menu-item-has-children dropdown  nav-item">
                    <Link href="#" className="nav_link">
                        <span className="text-link">
                            Services
                        </span>
                    </Link>
                    <ul className="sub_menu">
                        <li className="menu-item nav-item">
                            <Link href="/service" className="nav_link">
                                <span className="text-link">
                                    Service Style 1
                                </span>
                            </Link>
                        </li>
                        <li className="menu-item nav-item">
                            <Link href="/service-style-2" className="nav_link">
                                <span className="text-link">
                                    Service Style 2
                                </span>
                            </Link>
                        </li>
                        <li className="menu-item nav-item">
                            <Link href="/service-style-3" className="nav_link">
                                <span className="text-link">
                                    Service Style 3
                                </span>
                            </Link>
                        </li>
                        <li className="menu-item nav-item">
                            <Link href="/service-style-4" className="nav_link">
                                <span className="text-link">
                                    Service Style 4
                                </span>
                            </Link>
                        </li>
                        <li className="menu-item nav-item">
                            <Link href="/service-style-5" className="nav_link">
                                <span className="text-link">
                                    Service Style 5
                                </span>
                            </Link>
                        </li>
                        <li className="menu-item nav-item">
                            <Link href="/service-style-6" className="nav_link">
                                <span className="text-link">
                                    Service Style 6
                                </span>
                            </Link>
                        </li>
                        <li className="menu-item nav-item">
                            <Link href="/service-details" className="nav_link">
                                <span className="text-link">
                                    Service Details
                                </span>
                            </Link>
                        </li>
                    </ul>
                    <div className="dropdown-btn"><span className="fa fa-angle-down" /></div>
                </li>
                <li className="menu-item  menu-item-has-children dropdown  mennucolumn_  nav-item">
                    <Link href="#" className="nav_link">
                        <span className="text-link">
                            Portfolio
                        </span>
                    </Link>
                    <ul className="sub_menu">
                        <li className="menu-item nav-item">
                            <Link href="/portfolio-style-1" className="nav_link">
                                <span className="text-link">
                                    Portfolio Style 1
                                </span>
                            </Link>
                        </li>
                        <li className="menu-item nav-item">
                            <Link href="/portfolio-style-2" className="nav_link">
                                <span className="text-link">
                                    Portfolio Style 2
                                </span>
                            </Link>
                        </li>
                        <li className="menu-item nav-item">
                            <Link href="/portfolio-details" className="nav_link">
                                <span className="text-link">
                                    Portfolio Details
                                </span>
                            </Link>
                        </li>
                    </ul>
                    <div className="dropdown-btn"><span className="fa fa-angle-down" /></div>
                </li>
                
               
                <li className="menu-item  nav-item">
                    <Link href="/contact" className="nav_link">
                        <span className="text-link">
                            Contact
                        </span>
                    </Link>
                </li>
            </ul>
        </>
    )
}
