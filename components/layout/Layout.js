import { useEffect, useState } from "react"
import BackToTop from '../elements/BackToTop'
import Breadcrumb from './Breadcrumb'
import MobileMenu from "./MobileMenu"
import OptionalPanel from "./OptionalPanel"
import SearchPopup from "./SearchPopup"
import StickyHeader from "./StickyHeader"
import Footer6 from "./footer/Footer6"
import Header6 from "./header/Header6"

export default function Layout({ headerStyle, footerStyle, pageCls, breadcrumbTitle, children }) {
    // Search
    const [isSearch, setSearch] = useState(false)
    const handleSearch = () => setSearch(!isSearch)

    // Optional Panel
    const [isOptionalPanel, setOptionalPanel] = useState(false)
    const handleOptionalPanel = () => setOptionalPanel(!isOptionalPanel)

    // Moblile Menu
    const [isMobileMenu, setMobileMenu] = useState(false)
    const handleMobileMenu = () => setMobileMenu(!isMobileMenu)



    // Scroll Header
    const [scroll, setScroll] = useState(0)
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    })
    
    return (
        <>
            <div id="page" className={`page_wapper hfeed site ${pageCls ? pageCls : ""}`}>
                <Header6 handleSearch={handleSearch} handleOptionalPanel={handleOptionalPanel} handleMobileMenu={handleMobileMenu} />

                <StickyHeader scroll={scroll} handleSearch={handleSearch} handleOptionalPanel={handleOptionalPanel} handleMobileMenu={handleMobileMenu} />

                <div id="wrapper_full" className="content_all_warpper">
                    {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}
                    <div id="content" className="site-content">
                        {children}
                    </div>
                    < Footer6 />
                    
                </div>
                <MobileMenu isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />
                <SearchPopup isSearch={isSearch} handleSearch={handleSearch} />
                <OptionalPanel isOptionalPanel={isOptionalPanel} handleOptionalPanel={handleOptionalPanel} />
                <BackToTop />
            </div>
        </>
    )
}
