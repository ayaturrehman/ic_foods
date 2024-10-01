import Link from "next/link"
import { useState } from "react"

export default function Sidebar() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
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
            <ul className="navbar_nav getmobilemenu">
            <li className="menu-item nav-item mennucolumn_full-six">
                    <Link href="/" className="nav_link">
                        <span className="text-link"> Home </span>
                    </Link>
                </li>

                <li className="menu-item nav-item mennucolumn_full-six">
                    <Link href="/product_and_service" className="nav_link">
                        <span className="text-link"> Product & Services </span>
                    </Link>
                </li>

                {/* <li className="menu-item nav-item mennucolumn_full-six">
                    <Link href="/" className="nav_link">
                        <span className="text-link"> Export </span>
                    </Link>
                </li> */}


                <li className="menu-item nav-item mennucolumn_full-six">
                    <Link href="/brand" className="nav_link">
                        <span className="text-link"> Brand & Suppliers </span>
                    </Link>
                </li>


                <li className="menu-item nav-item mennucolumn_full-six">
                    <Link href="/about-us" className="nav_link">
                        <span className="text-link"> About US </span>
                    </Link>
                </li>


                <li className="menu-item nav-item ">
                    <Link href="/contact" className="nav_link">
                        <span className="text-link"> Contact Us </span>
                    </Link>
                </li>

            </ul>
        </>
    )
}
