import Layout from "@/components/layout/Layout"
import Breadcrumb from "@/components/layout/Breadcrumb"

export default function FinancialManagement() {
    return (
        <>
            <Layout headerStyle={6} footerStyle={6}>
                <Breadcrumb breadcrumbTitle="Financial Management & Contract Administration" />
                
                <section className="service-section">
                    <div className="pd_top_80" />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section_title type_one">
                                    <h4 className="sm_title">Financial Control</h4>
                                    <div className="title_whole">
                                        <h2 className="title">Financial Management & Contract Administration</h2>
                                    </div>
                                    <p>Comprehensive financial management system designed to address the £2.24 billion annual expenditure challenge facing UK local authorities, with specialized focus on SEND transport cost control.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="financial-overview">
                                    <h3>Financial Crisis Overview</h3>
                                    
                                    <div className="crisis-stats">
                                        <div className="crisis-item urgent">
                                            <div className="crisis-icon">
                                                <i className="fa fa-trending-up"></i>
                                            </div>
                                            <div className="crisis-content">
                                                <h4>60% Cost Increase in 3 Years</h4>
                                                <p>Transport costs have grown by over 60% in the last three years, with £2.24 billion spent in 2023-24 alone.</p>
                                            </div>
                                        </div>
                                        
                                        <div className="crisis-item warning">
                                            <div className="crisis-icon">
                                                <i className="fa fa-wheelchair"></i>
                                            </div>
                                            <div className="crisis-content">
                                                <h4>SEND Transport: £1.5 Billion</h4>
                                                <p>SEND transport accounts for two-thirds of total expenditure at £8,900 per child vs £3,100 for mainstream.</p>
                                            </div>
                                        </div>
                                        
                                        <div className="crisis-item critical">
                                            <div className="crisis-icon">
                                                <i className="fa fa-chart-line"></i>
                                            </div>
                                            <div className="crisis-content">
                                                <h4>20% Annual Growth Rate</h4>
                                                <p>Average annual growth of 20% between 2020-21 and 2023-24, with 11% projected growth continuing.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="cost-breakdown">
                                    <h3>Cost Analysis Dashboard</h3>
                                    
                                    <div className="breakdown-table">
                                        <table className="financial-table">
                                            <thead>
                                                <tr>
                                                    <th>Year</th>
                                                    <th>Total Expenditure</th>
                                                    <th>SEND Transport</th>
                                                    <th>Mainstream Transport</th>
                                                    <th>Growth Rate</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>2015-16</td>
                                                    <td>£1.01 billion</td>
                                                    <td>£0.64 billion</td>
                                                    <td>£0.37 billion</td>
                                                    <td>-</td>
                                                </tr>
                                                <tr>
                                                    <td>2020-21</td>
                                                    <td>£1.45 billion</td>
                                                    <td>£1.12 billion</td>
                                                    <td>£0.33 billion</td>
                                                    <td>7.5%</td>
                                                </tr>
                                                <tr className="current-year">
                                                    <td>2023-24</td>
                                                    <td>£2.24 billion</td>
                                                    <td>£1.73 billion</td>
                                                    <td>£0.51 billion</td>
                                                    <td>20%</td>
                                                </tr>
                                                <tr className="projected">
                                                    <td>2025-26 (Proj.)</td>
                                                    <td>£2.78 billion</td>
                                                    <td>£1.97 billion</td>
                                                    <td>£0.81 billion</td>
                                                    <td>11%</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                
                                <div className="contract-management">
                                    <h3>Contract Management Features</h3>
                                    
                                    <div className="feature-grid">
                                        <div className="feature-item">
                                            <h4>Automated Invoice Processing</h4>
                                            <p>Real-time data reconciliation with driver apps to eliminate discrepancies and ensure accurate billing.</p>
                                        </div>
                                        
                                        <div className="feature-item">
                                            <h4>Personal Transport Budgets</h4>
                                            <p>Enable families to manage their own transport arrangements, reducing long-term council costs.</p>
                                        </div>
                                        
                                        <div className="feature-item">
                                            <h4>Cost Per Mile Tracking</h4>
                                            <p>Detailed analysis of transport costs by route, vehicle type, and passenger category for optimization.</p>
                                        </div>
                                        
                                        <div className="feature-item">
                                            <h4>Budget Forecasting</h4>
                                            <p>Predictive modeling based on EHCP growth rates and demographic changes for accurate budget planning.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4">
                                <div className="send-impact">
                                    <h3>SEND Impact Analysis</h3>
                                    
                                    <div className="impact-stats">
                                        <div className="impact-item">
                                            <span className="impact-label">EHCP Growth Since 2014:</span>
                                            <span className="impact-value critical">140% Increase</span>
                                        </div>
                                        
                                        <div className="impact-item">
                                            <span className="impact-label">Average SEND Cost per Child:</span>
                                            <span className="impact-value">£8,900 annually</span>
                                        </div>
                                        
                                        <div className="impact-item">
                                            <span className="impact-label">Mainstream Cost per Child:</span>
                                            <span className="impact-value">£3,100 annually</span>
                                        </div>
                                        
                                        <div className="impact-item">
                                            <span className="impact-label">Cost Multiplier:</span>
                                            <span className="impact-value warning">2.9x Higher</span>
                                        </div>
                                    </div>
                                    
                                    <div className="cost-drivers">
                                        <h4>Primary Cost Drivers</h4>
                                        <ul>
                                            <li>Individual taxi requirements</li>
                                            <li>Passenger assistant needs</li>
                                            <li>Specialized vehicle equipment</li>
                                            <li>Longer journey distances</li>
                                            <li>Limited school placement options</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="savings-opportunities">
                                    <h3>Cost Reduction Strategies</h3>
                                    
                                    <div className="strategy-item">
                                        <h4>Independent Travel Training</h4>
                                        <p>Sheffield City Council saved £86,000 through ITT programs. Potential system-wide savings: £2.1 million annually.</p>
                                    </div>
                                    
                                    <div className="strategy-item">
                                        <h4>Route Optimization</h4>
                                        <p>Advanced algorithms can reduce SEND transport costs by up to 20% through better journey sharing.</p>
                                    </div>
                                    
                                    <div className="strategy-item">
                                        <h4>School Placement Planning</h4>
                                        <p>Strategic school placement can reduce transport costs. Building one new special school saves £500,000 annually in transport.</p>
                                    </div>
                                    
                                    <div className="strategy-item">
                                        <h4>Personal Budgets</h4>
                                        <p>Empower families with direct payments, reducing administrative overhead and providing flexible solutions.</p>
                                    </div>
                                </div>
                                
                                <div className="roi-calculator">
                                    <h3>ROI Calculator</h3>
                                    <div className="calculator-form">
                                        <div className="calc-input">
                                            <label>Current Annual Transport Budget:</label>
                                            <input type="text" placeholder="£50,000,000" />
                                        </div>
                                        <div className="calc-input">
                                            <label>SEND Students:</label>
                                            <input type="text" placeholder="1,500" />
                                        </div>
                                        <div className="calc-result">
                                            <strong>Estimated Annual Savings: £8.2 million</strong>
                                            <p>Based on 15% efficiency improvement</p>
                                        </div>
                                    </div>
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