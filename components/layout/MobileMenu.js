import Link from 'next/link'
import Sidebar from './Sidebar'
export default function MobileMenu({ handleMobileMenu, isMobileMenu }) {

    return (
        <>
            <div className={isMobileMenu ? "mobile_menu_box-visible" : ""}>
                <div className="mobile_menu_box">
                    <div className="menu-backdrop" onClick={handleMobileMenu} />
                    <nav className="menu-box scrollbarcolor">
                        <div className="close-btn" onClick={handleMobileMenu}>
                            <i className="fi-rr-cross" />
                        </div>
                        <form role="search" method="get" action="#">
                            <input type="search" className="search" placeholder="Search..." name="s" title="Search" />
                            <button type="submit" className="sch_btn">
                                <i className="fa fa-search" />
                            </button>
                        </form>
                        <div className="menu-outer">
                            <div className="navigation_menu">
                                <Sidebar />
                            </div>
                        </div>
                        <div className="mobile-header-info-wrap">
                            <div className="single-mobile-header-info cont_over">
                                <Link href="mailto:info@ic-foods.co.uk" className="cnt">
                                    <i className="fi-rs-envelope" />info@ic-foods.co.uk</Link>
                            </div>
                           
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}
