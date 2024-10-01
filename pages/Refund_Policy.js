import VideoBox from "@/components/elements/VideoBox"
import Layout from "@/components/layout/Layout"
import Testimonial4 from "@/components/sections/Testimonial4"
import dynamic from 'next/dynamic'
import Link from "next/link"
import { useState } from "react"
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})
export default function RefundPolicy() {

    
    return (
        <>
            <Layout breadcrumbTitle="Refund Policy">
                {/*-about*/}
                <section className="about-section position-relative">
                    <div className="pd_top_90" />
                    <div className="auto-container">
                        <div className="row align-items-start my-5">

                            <h1>Refund Policy</h1>

                            <p>At I C FOODS LTD, we are committed to providing high-quality products and exceptional customer service. If, for any reason, you are not completely satisfied with your purchase, we offer the following refund policy.</p>

                            <h2>1. Eligibility for Refunds</h2>
                            <p>To be eligible for a refund, the following conditions must be met:</p>
                            <ul>
                                <li>The product must be unused, in its original packaging, and in the same condition as when you received it.</li>
                                <li>The refund request must be made within <strong>7</strong> days of purchase.</li>
                                <li>A valid proof of purchase, such as a receipt or order confirmation, is required.</li>
                            </ul>

                            <h2>2. Non-Refundable Items</h2>
                            <p>Certain items are not eligible for refunds, including:</p>
                            <ul>
                                <li>Perishable goods such as food and beverages.</li>
                                <li>Items that have been opened, used, or damaged after delivery.</li>
                                <li>Custom or special order products.</li>
                                <li>Gift cards or promotional items.</li>
                            </ul>

                            <h2>3. How to Request a Refund</h2>
                            <p>If you believe you are eligible for a refund, please follow the steps below:</p>
                            <ul>
                                <li>Contact our customer service team at <a href="mailto:info@ic-foods.co.uk">info@ic-foods.co.uk</a>.</li>
                                <li>Provide your order details and the reason for requesting a refund.</li>
                                <li>If your request is approved, you will receive instructions on how to return the item to us.</li>
                            </ul>

                            <h2>4. Refund Process</h2>
                            <p>Once we receive and inspect the returned item, we will notify you of the approval or rejection of your refund. If approved, the refund will be processed within <strong>7</strong> days, and a credit will be applied to your original method of payment.</p>

                            <h2>5. Shipping Costs</h2>
                            <p>Shipping costs for returning items are the responsibility of the customer, unless the product was received damaged or defective. In such cases, we will cover the return shipping costs.</p>

                            <h2>6. Late or Missing Refunds</h2>
                            <p>If you have not received your refund within the stated time frame, please check with your bank or credit card company first. If you have done this and still have not received your refund, please contact us at <a href="mailto:info@ic-foods.co.uk">info@ic-foods.co.uk</a>.</p>

                            <h2>7. Exchanges</h2>
                            <p>We only replace items if they are defective or damaged. If you need to exchange an item, please contact us for further instructions.</p>

                            <h2>Contact Us</h2>
                            <p>If you have any questions about our Refund Policy, please contact us at:</p>
                            I C FOODS LTD<br />
                            122 Chequer Road,<br />
                            Doncaster, England, DN1 2AW<br />

                        </div>
                    </div >

                </section >
                {/*-about end*/}
                {/*service*/}



            </Layout >
        </>
    )
}