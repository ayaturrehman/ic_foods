import VideoBox from "@/components/elements/VideoBox"
import Layout from "@/components/layout/Layout"
import Testimonial4 from "@/components/sections/Testimonial4"
import dynamic from 'next/dynamic'
import Link from "next/link"
import { useState } from "react"
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})
export default function PrivacyPolicy() {

    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <Layout breadcrumbTitle="Privacy Policy">
                {/*-about*/}
                <section className="about-section position-relative">
                    <div className="pd_top_90" />
                    <div className="auto-container">
                        <div className="row align-items-start my-5">
                            <p>At I C FOODS LTD, we are committed to protecting your privacy and ensuring that your personal information is handled safely and responsibly. This Privacy Policy outlines how we collect, use, store, and protect your information when you visit our website or engage with our services.</p>
                            <h2> 1. Information We Collect</h2>
                            <p>We collect personal information to provide and improve our services. The types of information we may collect include:</p>
                            <ul>
                                <li>Personal information such as your name, email address, phone number, and other contact details.</li>
                                <li>Information about your business, such as your company name, industry, and business type.</li>
                                <li>Information about your preferences and interests, such as the products and services you are interested in.</li>
                                <li>Information about your use of our website, such as your IP address, browser type, and operating system.</li>
                            </ul>

                            <h2>
                                2. How We Use Your Information
                            </h2>
                            <p>We use your personal information to:</p>
                            <ul>
                                <li>Provide Services: Process orders, manage your account, and deliver products.</li>
                                <li>Improve Our Website: Analyze usage data to improve user experience and enhance our services.</li>
                                <li>Communicate with You: Send important updates, respond to inquiries, and provide promotional offers (with your consent).</li>
                                <li>Comply with Legal Obligations: Ensure we comply with regulatory requirements, including tax and accounting laws.</li>
                            </ul>
                            <h2>
                                3. Sharing Your Information
                            </h2>
                            <p>We may share your personal information with third parties to provide services and improve our website. These third parties include:</p>
                            <ul>
                                <li>Service Providers: Companies that help us process payments, deliver products, and provide customer support.</li>
                                <li>Business Partners: Companies that offer products and services that may be of interest to you.</li>
                                <li>Legal Authorities: Law enforcement agencies, government authorities, and other third parties as required by law.</li>
                            </ul>
                            <h2>
                                4. Data Security
                            </h2>
                            <p>We take data security seriously and have implemented measures to protect your information from unauthorized access, disclosure, alteration, and destruction. These measures include:</p>
                            <ul>
                                <li>Secure Servers: Our website is hosted on secure servers with encryption protocols to protect your data.</li>
                                <li>Access Controls: We restrict access to your information to authorized personnel only.</li>
                                <li>Regular Audits: We conduct regular security audits to identify and address potential vulnerabilities.</li>
                            </ul>

                            <h2>5. Cookies </h2>
                            We use cookies and similar tracking technologies to enhance your experience on our website. Cookies help us understand how you interact with our site, remember your preferences, and provide personalized content. For more information on the cookies we use and how to manage your preferences, please see our Cookie Policy.
                            <h2>6. Changes to This Privacy Policy</h2>
                            <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal obligations. Any changes will be posted on this page with an updated "Effective Date." We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
                            </p>
                            <h2>7. Contact Us</h2>

                            If you have any questions or concerns about this Privacy Policy or how we handle your personal data, please contact us at:
                            I C FOODS LTD
                            122 Chequer Road,
                            Doncaster, England, DN1 2AW
                            Email: info@ic-foods.co.uk
                        </div>
                    </div>

                </section>
                {/*-about end*/}
                {/*service*/}



            </Layout>
        </>
    )
}