import Layout from "@/components/layout/Layout"
import Breadcrumb from "@/components/layout/Breadcrumb"

export default function Eligibility() {
    return (
        <>
            <Layout headerStyle={6} footerStyle={6}>
                <Breadcrumb breadcrumbTitle="Transport Eligibility & Applications" />
                
                <section className="service-section">
                    <div className="pd_top_80" />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="section_title type_one">
                                    <h4 className="sm_title">Eligibility Assessment</h4>
                                    <div className="title_whole">
                                        <h2 className="title">Transport Eligibility Criteria</h2>
                                    </div>
                                </div>
                                
                                <div className="eligibility-content">
                                    <div className="eligibility-section">
                                        <h3>Statutory Eligibility Requirements</h3>
                                        <p>Under the Education Act 1996, children are eligible for free transport if they meet specific criteria:</p>
                                        
                                        <div className="criteria-list">
                                            <div className="criteria-item">
                                                <h4>Distance Criteria</h4>
                                                <ul>
                                                    <li>Under 8 years: More than 2 miles from nearest suitable school</li>
                                                    <li>8 years and over: More than 3 miles from nearest suitable school</li>
                                                </ul>
                                            </div>
                                            
                                            <div className="criteria-item">
                                                <h4>Special Educational Needs</h4>
                                                <ul>
                                                    <li>Children with SEND who cannot walk to school due to mobility or health issues</li>
                                                    <li>Applies regardless of distance to school</li>
                                                </ul>
                                            </div>
                                            
                                            <div className="criteria-item">
                                                <h4>Low Income Families</h4>
                                                <ul>
                                                    <li>Free school meals or maximum Working Tax Credit recipients</li>
                                                    <li>Reduced distance thresholds apply</li>
                                                    <li>Religious or belief school attendance supported</li>
                                                </ul>
                                            </div>
                                            
                                            <div className="criteria-item">
                                                <h4>Unsafe Walking Routes</h4>
                                                <ul>
                                                    <li>No safe walking route available to school</li>
                                                    <li>Route assessed by qualified professionals</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4">
                                <div className="application-form">
                                    <h3>Quick Eligibility Check</h3>
                                    <form className="eligibility-form">
                                        <div className="form-group">
                                            <label>Child's Age:</label>
                                            <select className="form-control">
                                                <option>Select age group</option>
                                                <option>Under 8 years</option>
                                                <option>8 years and over</option>
                                            </select>
                                        </div>
                                        
                                        <div className="form-group">
                                            <label>Distance to School:</label>
                                            <select className="form-control">
                                                <option>Select distance</option>
                                                <option>Under 2 miles</option>
                                                <option>2-3 miles</option>
                                                <option>Over 3 miles</option>
                                            </select>
                                        </div>
                                        
                                        <div className="form-group">
                                            <label>Special Educational Needs:</label>
                                            <div className="checkbox-group">
                                                <input type="checkbox" id="send" />
                                                <label htmlFor="send">Child has SEND requirements</label>
                                            </div>
                                        </div>
                                        
                                        <div className="form-group">
                                            <label>Low Income Status:</label>
                                            <div className="checkbox-group">
                                                <input type="checkbox" id="low-income" />
                                                <label htmlFor="low-income">Eligible for free school meals or benefits</label>
                                            </div>
                                        </div>
                                        
                                        <button type="submit" className="theme_btn">Check Eligibility</button>
                                    </form>
                                </div>
                                
                                <div className="application-info">
                                    <h3>Application Process</h3>
                                    <ol>
                                        <li>Complete eligibility assessment</li>
                                        <li>Submit supporting documentation</li>
                                        <li>Await decision (typically 5-10 working days)</li>
                                        <li>If approved, receive transport details</li>
                                        <li>Appeals process available if declined</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pd_bottom_80" />
                </section>
            </Layout>
        </>
    )
}