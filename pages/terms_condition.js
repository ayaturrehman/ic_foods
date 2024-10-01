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
            <Layout breadcrumbTitle="Terms and Conditions">
                {/*-about*/}
                <section className="about-section position-relative">
                    <div className="pd_top_90" />
                    <div className="auto-container">
                        <div className="row align-items-start my-5">
                            <h1>Terms and Conditions</h1>


                            <p>Welcome to I C FOODS LTD. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions. Please review the following carefully before using our website and services.</p>

                            <h2>1. Introduction</h2>
                            <p>These Terms and Conditions govern your use of our website and services. By accessing our website, you agree to these Terms in full. If you do not accept these Terms, you must stop using our website immediately.</p>

                            <h2>2. Intellectual Property</h2>
                            <p>All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of I C FOODS LTD or its content suppliers. It is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or exploit any content without express written consent from I C FOODS LTD.</p>

                            <h2>3. Use of Our Services</h2>
                            <p>You agree to use our website and services for lawful purposes only. You must not use our website in any way that may cause harm to I C FOODS LTD or other users. Unauthorized use of our website or breach of these Terms may result in termination of your access to our services.</p>

                            <h2>4. Product Information and Availability</h2>
                            <p>We strive to ensure that the product information on our website is accurate and up to date. However, we do not guarantee that product descriptions, prices, or availability are error-free. We reserve the right to make changes to our product listings without prior notice.</p>

                            <h2>5. Orders and Payments</h2>
                            <p>All orders placed through our website are subject to acceptance by I C FOODS LTD. We reserve the right to refuse or cancel any order for any reason, including but not limited to product availability, pricing errors, or issues with payment. Payment must be made in full before any products are dispatched.</p>

                            <h2>6. Limitation of Liability</h2>
                            <p>To the extent permitted by law, I C FOODS LTD shall not be liable for any indirect, incidental, or consequential damages resulting from your use of our website or services. Our liability is limited to the total amount paid by you for the relevant products or services.</p>

                            <h2>7. User Accounts</h2>
                            <p>To access certain features of our website, you may be required to create an account. You are responsible for maintaining the confidentiality of your account details and for all activities that occur under your account. If you believe your account has been compromised, please notify us immediately.</p>

                            <h2>8. Links to Third-Party Websites</h2>
                            <p>Our website may contain links to third-party websites for your convenience. These websites are not controlled by I C FOODS LTD, and we are not responsible for their content or privacy practices. Accessing third-party websites is at your own risk.</p>

                            <h2>9. Changes to These Terms</h2>
                            <p>We reserve the right to modify these Terms and Conditions at any time without prior notice. Any changes will be posted on this page, and your continued use of our website will constitute acceptance of the updated Terms.</p>

                            <h2>10. Governing Law</h2>
                            <p>These Terms and Conditions are governed by and construed in accordance with the laws of England and Wales. Any disputes relating to these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>

                            <h2>11. Contact Information</h2>
                            <p>If you have any questions or concerns about these Terms and Conditions, please contact us at:</p>


                        </div>
                    </div>

                </section>
                {/*-about end*/}
                {/*service*/}



            </Layout>
        </>
    )
}