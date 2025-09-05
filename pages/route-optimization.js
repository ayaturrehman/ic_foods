import Layout from "@/components/layout/Layout"
import Breadcrumb from "@/components/layout/Breadcrumb"

export default function RouteOptimization() {
    return (
        <>
            <Layout headerStyle={6} footerStyle={6}>
                <Breadcrumb breadcrumbTitle="Route Optimization & Planning" />
                
                <section className="service-section">
                    <div className="pd_top_80" />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section_title type_one">
                                    <h4 className="sm_title">Advanced Route Planning</h4>
                                    <div className="title_whole">
                                        <h2 className="title">Intelligent Route Optimization System</h2>
                                    </div>
                                    <p>Our route optimization module uses advanced algorithms to create the safest, fastest, and most cost-effective transport routes, with special focus on complex SEND transport requirements.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="optimization-features">
                                    <h3>Core Optimization Features</h3>
                                    
                                    <div className="feature-item">
                                        <div className="icon">
                                            <i className="fa fa-route"></i>
                                        </div>
                                        <div className="content">
                                            <h4>Dynamic Route Planning</h4>
                                            <p>Real-time optimization considering traffic conditions, road restrictions, and vehicle capacity constraints.</p>
                                        </div>
                                    </div>
                                    
                                    <div className="feature-item">
                                        <div className="icon">
                                            <i className="fa fa-users"></i>
                                        </div>
                                        <div className="content">
                                            <h4>SEND-Specific Routing</h4>
                                            <p>Specialized algorithms for children with special educational needs, considering individual requirements and compatibility.</p>
                                        </div>
                                    </div>
                                    
                                    <div className="feature-item">
                                        <div className="icon">
                                            <i className="fa fa-clock"></i>
                                        </div>
                                        <div className="content">
                                            <h4>Time Window Management</h4>
                                            <p>Optimizes pickup and drop-off times to minimize journey duration while meeting school schedule requirements.</p>
                                        </div>
                                    </div>
                                    
                                    <div className="feature-item">
                                        <div className="icon">
                                            <i className="fa fa-leaf"></i>
                                        </div>
                                        <div className="content">
                                            <h4>Environmental Impact</h4>
                                            <p>Routes designed to minimize fuel consumption and carbon emissions, supporting sustainability goals.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-6">
                                <div className="optimization-dashboard">
                                    <h3>Route Planning Dashboard</h3>
                                    
                                    <div className="dashboard-stats">
                                        <div className="stat-item">
                                            <span className="stat-number">20%</span>
                                            <span className="stat-label">Average Cost Reduction</span>
                                        </div>
                                        <div className="stat-item">
                                            <span className="stat-number">85%</span>
                                            <span className="stat-label">Route Efficiency Improvement</span>
                                        </div>
                                        <div className="stat-item">
                                            <span className="stat-number">15 min</span>
                                            <span className="stat-label">Average Journey Time Reduction</span>
                                        </div>
                                    </div>
                                    
                                    <div className="route-parameters">
                                        <h4>Route Planning Parameters</h4>
                                        <ul>
                                            <li>Maximum journey time limits</li>
                                            <li>Vehicle capacity constraints</li>
                                            <li>Special equipment requirements</li>
                                            <li>Student compatibility rules</li>
                                            <li>Driver qualification matching</li>
                                            <li>Low emission zone compliance</li>
                                            <li>Road safety assessments</li>
                                            <li>Traffic pattern analysis</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="optimization-benefits">
                                    <h3>Financial & Operational Benefits</h3>
                                    
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="benefit-card">
                                                <h4>Cost Savings</h4>
                                                <p>Reduce transport expenditure through optimized shared journeys and efficient route planning. Average savings of £8,900 per SEND child annually.</p>
                                            </div>
                                        </div>
                                        
                                        <div className="col-lg-4">
                                            <div className="benefit-card">
                                                <h4>Improved Safety</h4>
                                                <p>Enhanced route safety through automated risk assessment and real-time monitoring of road conditions and vehicle locations.</p>
                                            </div>
                                        </div>
                                        
                                        <div className="col-lg-4">
                                            <div className="benefit-card">
                                                <h4>Reduced Admin</h4>
                                                <p>Automated route planning reduces manual administrative work by 60%, freeing up staff for other critical activities.</p>
                                            </div>
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