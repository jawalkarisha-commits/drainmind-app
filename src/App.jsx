
import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
} from "react-leaflet";
import {
  LayoutDashboard,
  Map as MapIcon,
  FileText,
  CloudRain,
  AlertTriangle,
  CheckCircle,
  Clock,
  Plus,
  Search,
  Bell,
  Menu,
  X,
  Droplets,
  ArrowUpRight,
  Activity,
  ClipboardList,
} from "lucide-react";
import "./App.css";

const initialReports = [
  {
    id: "DR-104",
    location: "FC Road, Pune",
    severity: "High",
    status: "Pending",
    description: "Plastic waste blocking drain",
    date: "Today, 09:30 AM",
    rainfall: 42,
    position: [18.5204, 73.8567],
  },
  {
    id: "DR-103",
    location: "Shivajinagar, Pune",
    severity: "Medium",
    status: "Assigned",
    description: "Slow water drainage reported",
    date: "Today, 08:15 AM",
    rainfall: 26,
    position: [18.5308, 73.8475],
  },
  {
    id: "DR-102",
    location: "Kothrud, Pune",
    severity: "Low",
    status: "Cleared",
    description: "Routine drain inspection completed",
    date: "Yesterday, 04:20 PM",
    rainfall: 8,
    position: [18.5074, 73.8077],
  },
  {
    id: "DR-101",
    location: "Swargate, Pune",
    severity: "High",
    status: "Pending",
    description: "Water accumulation near drain",
    date: "Yesterday, 02:10 PM",
    rainfall: 38,
    position: [18.5018, 73.8636],
  },
];

function DrainMap({ reports }) {
  const getColor = (severity) => {
    if (severity === "High") return "#ff776f";
    if (severity === "Medium") return "#efbe68";
    return "#62d8a5";
  };

  return (
    <MapContainer
      center={[18.5204, 73.8567]}
      zoom={12}
      scrollWheelZoom={true}
      style={{ height: "300px", width: "100%", borderRadius: "12px" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {reports.map((report) => (
        <CircleMarker
          key={report.id}
          center={report.position}
          radius={9}
          pathOptions={{
            color: getColor(report.severity),
            fillColor: getColor(report.severity),
            fillOpacity: 0.85,
          }}
        >
          <Popup>
            <strong>{report.location}</strong>
            <br />
            Risk: {report.severity}
            <br />
            Status: {report.status}
            <br />
            {report.description}
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}

function App() {
  const [reports, setReports] = useState(initialReports);
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const [formData, setFormData] = useState({
    location: "",
    severity: "Medium",
    description: "",
  });

  const pendingCount = reports.filter(
    (report) => report.status === "Pending"
  ).length;

  const assignedCount = reports.filter(
    (report) => report.status === "Assigned"
  ).length;

  const clearedCount = reports.filter(
    (report) => report.status === "Cleared"
  ).length;

  const highRiskCount = reports.filter(
    (report) => report.severity === "High"
  ).length;

  const filteredReports = reports.filter((report) => {
    const matchesFilter =
      activeFilter === "All" || report.status === activeFilter;

    const matchesSearch =
      report.location.toLowerCase().includes(search.toLowerCase()) ||
      report.id.toLowerCase().includes(search.toLowerCase()) ||
      report.description.toLowerCase().includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const updateStatus = (id, newStatus) => {
    setReports((currentReports) =>
      currentReports.map((report) =>
        report.id === id ? { ...report, status: newStatus } : report
      )
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.location.trim() || !formData.description.trim()) {
      alert("Please fill in the location and description.");
      return;
    }

    const newReport = {
      id: `DR-${Date.now().toString().slice(-5)}`,
      location: formData.location.trim(),
      severity: formData.severity,
      status: "Pending",
      description: formData.description.trim(),
      date: "Just now",
      rainfall: 0,
      position: [18.5204, 73.8567],
    };

    setReports((currentReports) => [newReport, ...currentReports]);
    setFormData({
      location: "",
      severity: "Medium",
      description: "",
    });
    setActiveFilter("All");
    setSearch("");
    setShowModal(false);
  };

  return (
    <div className="app-shell">
      <aside className={`sidebar ${mobileMenu ? "sidebar-open" : ""}`}>
        <div className="brand">
          <div className="brand-icon">
            <Droplets size={24} />
          </div>
          <div>
            <h2>DrainMind</h2>
            <span>URBAN WATER INTELLIGENCE</span>
          </div>
          <button
            className="mobile-close"
            onClick={() => setMobileMenu(false)}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <div className="nav-label">WORKSPACE</div>

        <nav className="navigation">
          <button className="nav-item active">
            <LayoutDashboard size={19} />
            <span>Dashboard</span>
          </button>
          <button
            className="nav-item"
            onClick={() =>
              document
                .getElementById("map-section")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <MapIcon size={19} />
            <span>Drainage Map</span>
          </button>
          <button
            className="nav-item"
            onClick={() =>
              document
                .getElementById("reports-section")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <ClipboardList size={19} />
            <span>Citizen Reports</span>
          </button>
          <button
            className="nav-item"
            onClick={() => setShowModal(true)}
          >
            <FileText size={19} />
            <span>Submit a Report</span>
          </button>
        </nav>

        <div className="sidebar-bottom">
          <div className="system-status">
            <span className="status-dot" />
            <div>
              <strong>System Operational</strong>
              <p>Demo environment</p>
            </div>
          </div>
          <div className="sidebar-footer">
            <div className="avatar">DM</div>
            <div className="user-details">
              <strong>City Administrator</strong>
              <span>Pune Municipal Area</span>
            </div>
          </div>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div className="topbar-left">
            <button
              className="mobile-menu"
              onClick={() => setMobileMenu(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
            <div>
              <p className="breadcrumb">Workspace / Overview</p>
              <h1>Dashboard Overview</h1>
            </div>
          </div>

          <div className="topbar-actions">
            <span className="live-indicator">
              <span className="status-dot" />
              Demo Live
            </span>
            <button
              className="icon-button"
              title="Notifications"
              onClick={() =>
                alert(
                  pendingCount
                    ? `You have ${pendingCount} pending reports.`
                    : "No pending reports."
                )
              }
            >
              <Bell size={19} />
              {pendingCount > 0 && <span className="notification-dot" />}
            </button>
            <div className="top-avatar">DM</div>
          </div>
        </header>

        <div className="dashboard-content">
          <section className="welcome-row">
            <div>
              <p className="eyebrow">CITY INFRASTRUCTURE MONITORING</p>
              <h2>Drainage Intelligence Center</h2>
              <p className="welcome-text">
                Monitor drain reports, review potential risks, and coordinate
                maintenance across Pune.
              </p>
            </div>
            <button
              className="primary-button"
              onClick={() => setShowModal(true)}
            >
              <Plus size={18} />
              New Report
            </button>
          </section>

          <section className="stats-grid">
            <div className="stat-card">
              <div className="stat-top">
                <span className="stat-label">Total Reports</span>
                <div className="stat-icon blue">
                  <FileText size={20} />
                </div>
              </div>
              <div className="stat-number">{reports.length}</div>
              <div className="stat-foot">
                <Activity size={15} />
                All citizen submissions
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-top">
                <span className="stat-label">Pending Action</span>
                <div className="stat-icon orange">
                  <Clock size={20} />
                </div>
              </div>
              <div className="stat-number">{pendingCount}</div>
              <div className="stat-foot orange-text">
                Requires inspection
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-top">
                <span className="stat-label">High-Risk Reports</span>
                <div className="stat-icon red">
                  <AlertTriangle size={20} />
                </div>
              </div>
              <div className="stat-number">{highRiskCount}</div>
              <div className="stat-foot red-text">
                Prioritize review
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-top">
                <span className="stat-label">Reports Cleared</span>
                <div className="stat-icon green">
                  <CheckCircle size={20} />
                </div>
              </div>
              <div className="stat-number">{clearedCount}</div>
              <div className="stat-foot green-text">
                Successfully marked cleared
              </div>
            </div>
          </section>

          <section className="middle-grid">
            <div className="panel map-panel" id="map-section">
              <div className="panel-header">
                <div>
                  <h3>Drainage Risk Map</h3>
                  <p>Reported locations across Pune</p>
                </div>
                <span className="panel-tag">
                  <span className="status-dot" />
                  Interactive Map
                </span>
              </div>

              <div className="map-container">
                <DrainMap reports={reports} />
              </div>

              <div className="map-legend">
                <span>
                  <i className="legend-dot high" /> High Risk
                </span>
                <span>
                  <i className="legend-dot medium" /> Medium Risk
                </span>
                <span>
                  <i className="legend-dot low" /> Low Risk
                </span>
              </div>

              <p className="map-disclaimer">
                OpenStreetMap · Markers use illustrative sample locations.
                New reports use a default demo position.
              </p>
            </div>

            <div className="panel rainfall-panel">
              <div className="panel-header">
                <div>
                  <h3>Rainfall Monitoring</h3>
                  <p>Illustrative rainfall readings</p>
                </div>
                <div className="stat-icon blue">
                  <CloudRain size={20} />
                </div>
              </div>

              <div className="rainfall-summary">
                <div>
                  <span className="muted-label">Sample daily rainfall</span>
                  <div className="rainfall-value">
                    42 <span>mm</span>
                  </div>
                </div>
                <span className="rainfall-badge">Demo data</span>
              </div>

              <div className="rainfall-chart">
                {[
                  { day: "Mon", value: 30 },
                  { day: "Tue", value: 52 },
                  { day: "Wed", value: 36 },
                  { day: "Thu", value: 72 },
                  { day: "Fri", value: 44 },
                  { day: "Sat", value: 88 },
                  { day: "Sun", value: 58 },
                ].map((item) => (
                  <div className="bar-column" key={item.day}>
                    <div className="bar-track">
                      <div
                        className="rain-bar"
                        style={{ height: `${item.value}%` }}
                        title={`${item.value}% illustrative level`}
                      />
                    </div>
                    <span>{item.day}</span>
                  </div>
                ))}
              </div>

              <div className="rainfall-note">
                <AlertTriangle size={16} />
                <p>
                  Rainfall values are illustrative. Live weather data is not
                  connected yet.
                </p>
              </div>

              <div className="mini-summary">
                <div>
                  <span>Assigned</span>
                  <strong>{assignedCount}</strong>
                </div>
                <div>
                  <span>Cleared</span>
                  <strong>{clearedCount}</strong>
                </div>
                <div>
                  <span>Pending</span>
                  <strong>{pendingCount}</strong>
                </div>
              </div>
            </div>
          </section>

          <section className="panel reports-panel" id="reports-section">
            <div className="panel-header reports-heading">
              <div>
                <h3>Recent Drain Reports</h3>
                <p>Review citizen submissions and update maintenance status.</p>
              </div>
              <button
                className="secondary-button"
                onClick={() => setShowModal(true)}
              >
                <Plus size={16} />
                Add Report
              </button>
            </div>

            <div className="report-toolbar">
              <div className="filter-tabs">
                {["All", "Pending", "Assigned", "Cleared"].map((filter) => (
                  <button
                    key={filter}
                    className={`filter-tab ${
                      activeFilter === filter ? "selected" : ""
                    }`}
                    onClick={() => setActiveFilter(filter)}
                  >
                    {filter}
                    {filter === "All"
                      ? ` (${reports.length})`
                      : ` (${
                          reports.filter((r) => r.status === filter).length
                        })`}
                  </button>
                ))}
              </div>

              <div className="search-box">
                <Search size={17} />
                <input
                  type="text"
                  placeholder="Search reports..."
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                />
              </div>
            </div>

            <div className="table-wrapper">
              <table className="reports-table">
                <thead>
                  <tr>
                    <th>REPORT ID</th>
                    <th>LOCATION & DESCRIPTION</th>
                    <th>SEVERITY</th>
                    <th>DATE REPORTED</th>
                    <th>STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredReports.map((report) => (
                    <tr key={report.id}>
                      <td>
                        <span className="report-id">{report.id}</span>
                      </td>
                      <td>
                        <div className="location-cell">
                          <strong>{report.location}</strong>
                          <span>{report.description}</span>
                        </div>
                      </td>
                      <td>
                        <span
                          className={`severity-badge ${report.severity.toLowerCase()}`}
                        >
                          <span className="badge-dot" />
                          {report.severity}
                        </span>
                      </td>
                      <td className="date-cell">{report.date}</td>
                      <td>
                        <select
                          className={`status-select ${report.status.toLowerCase()}`}
                          value={report.status}
                          onChange={(event) =>
                            updateStatus(report.id, event.target.value)
                          }
                          aria-label={`Update status for ${report.id}`}
                        >
                          <option value="Pending">Pending</option>
                          <option value="Assigned">Assigned</option>
                          <option value="Cleared">Cleared</option>
                        </select>
                      </td>
                    </tr>
                  ))}

                  {filteredReports.length === 0 && (
                    <tr>
                      <td colSpan="5" className="empty-state">
                        No reports found. Try another filter or search.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="table-footer">
              <span>
                Showing {filteredReports.length} of {reports.length} reports
              </span>
              <span>Demo dataset · Local browser state</span>
            </div>
          </section>

          <footer className="page-footer">
            <span>DrainMind · Urban Water Waste Predictor</span>
            <span>
              Prototype dashboard <ArrowUpRight size={14} />
            </span>
          </footer>
        </div>
      </main>

      {showModal && (
        <div
          className="modal-overlay"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setShowModal(false);
            }
          }}
        >
          <div className="report-modal">
            <div className="modal-header">
              <div>
                <span className="eyebrow">CITIZEN REPORT</span>
                <h2>Report a Drain Issue</h2>
                <p>Enter the details of the drainage issue.</p>
              </div>
              <button
                className="icon-button"
                onClick={() => setShowModal(false)}
                aria-label="Close form"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <label htmlFor="location">Location</label>
              <input
                id="location"
                type="text"
                placeholder="e.g. FC Road, Pune"
                value={formData.location}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    location: event.target.value,
                  })
                }
                required
              />

              <label htmlFor="severity">Issue severity</label>
              <select
                id="severity"
                value={formData.severity}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    severity: event.target.value,
                  })
                }
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>

              <label htmlFor="description">Issue description</label>
              <textarea
                id="description"
                placeholder="Describe the blockage, waterlogging, or drain issue..."
                rows="4"
                value={formData.description}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    description: event.target.value,
                  })
                }
                required
              />

              <div className="modal-note">
                <AlertTriangle size={16} />
                This prototype stores reports in the current browser session.
              </div>

              <div className="modal-actions">
                <button
                  type="button"
                  className="secondary-button"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="primary-button">
                  <Plus size={17} />
                  Submit Report
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
