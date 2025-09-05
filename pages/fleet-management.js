import Layout from "@/components/layout/Layout"
import Breadcrumb from "@/components/layout/Breadcrumb"

export default function FleetManagement() {
    return (
        <>
            <Layout headerStyle={6} footerStyle={6}>
                <Breadcrumb breadcrumbTitle="Real-Time Fleet Management" />
                
                <section className="service-section">
                    <div className="pd_top_80" />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section_title type_one">
                                    <h4 className="sm_title">Fleet Operations</h4>
                                    <div className="title_whole">
                                        <h2 className="title">Real-Time Operations & Fleet Management</h2>
                                    </div>
                                    <p>Comprehensive fleet management dashboard providing real-time visibility of vehicle locations, driver status, and operational efficiency to ensure safe and reliable school transport services.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="fleet-dashboard">
                                    <h3>Fleet Management Dashboard</h3>
                                    
                                    <div className="dashboard-overview">
                                        <div className="overview-stats">
                                            <div className="stat-box">
                                                <div className="stat-icon">
                                                    <i className="fa fa-bus"></i>
                                                </div>
                                                <div className="stat-info">
                                                    <span className="stat-number">247</span>
                                                    <span className="stat-label">Active Vehicles</span>
                                                </div>
                                            </div>
                                            
                                            <div className="stat-box">
                                                <div className="stat-icon">
                                                    <i className="fa fa-user-tie"></i>
                                                </div>
                                                <div className="stat-info">
                                                    <span className="stat-number">189</span>
                                                    <span className="stat-label">Available Drivers</span>
                                                </div>
                                            </div>
                                            
                                            <div className="stat-box">
                                                <div className="stat-icon">
                                                    <i className="fa fa-users"></i>
                                                </div>
                                                <div className="stat-info">
                                                    <span className="stat-number">12,450</span>
                                                    <span className="stat-label">Students Transported Daily</span>
                                                </div>
                                            </div>
                                            
                                            <div className="stat-box">
                                                <div className="stat-icon">
                                                    <i className="fa fa-clock"></i>
                                                </div>
                                                <div className="stat-info">
                                                    <span className="stat-number">94.2%</span>
                                                    <span className="stat-label">On-Time Performance</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="fleet-features">
                                        <div className="feature-grid">
                                            <div className="feature-item">
                                                <h4>Real-Time Tracking</h4>
                                                <p>Live GPS tracking of all vehicles with route progress monitoring and estimated arrival times.</p>
                                            </div>
                                            
                                            <div className="feature-item">
                                                <h4>Driver Communication</h4>
                                                <p>Direct communication channels with drivers for route updates, delays, and emergency situations.</p>
                                            </div>
                                            
                                            <div className="feature-item">
                                                <h4>Capacity Management</h4>
                                                <p>Monitor vehicle capacity, passenger counts, and optimize resource allocation across routes.</p>
                                            </div>
                                            
                                            <div className="feature-item">
                                                <h4>Emergency Response</h4>
                                                <p>Rapid response protocols for vehicle breakdowns, driver absences, and route disruptions.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="operational-alerts">
                                    <h3>Current Operational Status</h3>
                                    
                                    <div className="alert-list">
                                        <div className="alert-item status-good">
                                            <div className="alert-icon">
                                                <i className="fa fa-check-circle"></i>
                                            </div>
                                            <div className="alert-content">
                                                <h4>Route 47 - Operating Normally</h4>
                                                <p>All pickup points on schedule, ETA 8:15 AM at Meadowview Primary</p>
                                            </div>
                                        </div>
                                        
                                        <div className="alert-item status-warning">
                                            <div className="alert-icon">
                                                <i className="fa fa-exclamation-triangle"></i>
                                            </div>
                                            <div className="alert-content">
                                                <h4>Route 23 - Minor Delay</h4>
                                                <p>Traffic congestion on A1. Estimated 10-minute delay. Parents notified automatically.</p>
                                            </div>
                                        </div>
                                        
                                        <div className="alert-item status-urgent">
                                            <div className="alert-icon">
                                                <i className="fa fa-times-circle"></i>
                                            </div>
                                            <div className="alert-content">
                                                <h4>Route 15 - Vehicle Breakdown</h4>
                                                <p>Replacement vehicle dispatched. Parents contacted with alternative arrangements.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4">
                                <div className="driver-shortage-panel">
                                    <h3>Driver Shortage Management</h3>
                                    <div className="shortage-stats">
                                        <div className="shortage-item">
                                            <span className="shortage-label">Driver Shortage Impact:</span>
                                            <span className="shortage-value warning">46% Major Problem</span>
                                        </div>
                                        <div className="shortage-item">
                                            <span className="shortage-label">Routes Affected:</span>
                                            <span className="shortage-value">23 of 156 routes</span>
                                        </div>
                                        <div className="shortage-item">
                                            <span className="shortage-label">Alternative Solutions:</span>
                                            <span className="shortage-value">12 taxi arrangements</span>
                                        </div>
                                    </div>
                                    
                                    <div className="mitigation-strategies">
                                        <h4>Mitigation Strategies</h4>
                                        <ul>
                                            <li>Emergency driver pool activated</li>
                                            <li>Route consolidation where possible</li>
                                            <li>Temporary taxi services</li>
                                            <li>Parent volunteer coordination</li>
                                            <li>Independent travel training promotion</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="performance-metrics">
                                    <h3>Performance Metrics</h3>
                                    
                                    <div className="metric-item">
                                        <span className="metric-label">Student Attendance Impact:</span>
                                        <span className="metric-value">44% had transport-related tardiness</span>
                                    </div>
                                    
                                    <div className="metric-item">
                                        <span className="metric-label">Parent Employment Impact:</span>
                                        <span className="metric-value">11% lost jobs due to transport issues</span>
                                    </div>
                                    
                                    <div className="metric-item">
                                        <span className="metric-label">Route Cuts This Year:</span>
                                        <span className="metric-value">15 routes shortened or cancelled</span>
                                    </div>
                                    
                                    <div className="metric-item">
                                        <span className="metric-label">Emergency Replacements:</span>
                                        <span className="metric-value">142 incidents resolved</span>
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