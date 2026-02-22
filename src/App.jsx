import React from "react";
import "./index.css";

function App() {
  return (
    <div>

      {/* NAVBAR */}
      <nav className="navbar">
        <h2 className="logo">Siva Balaji</h2>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <h1>Production Support Engineer</h1>
        <p>SQL | Linux | Incident Resolution | Application Support</p>
        <p>Bengaluru, India</p>
        <a
          href="https://github.com/YOUR_GITHUB_LINK"
          target="_blank"
          rel="noreferrer"
        >
          <a href="/Siva_Balaji_Resume.pdf" download>
  <button style={{ marginLeft: "10px" }}>Download Resume</button>
</a>

        </a>
      </section>

      {/* ABOUT */}
      <section id="about">
        <h2>Professional Summary</h2>
        <p>
          Entry-level Production Support Engineer with strong knowledge of SQL,
          RDBMS concepts, and Linux fundamentals. Experienced in troubleshooting
          backend systems, analyzing database issues, and ensuring system stability
          in cloud-based Linux environments.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <h2>Technical Skills</h2>

        <div className="card">
          <h3>Database & SQL</h3>
          <ul>
            <li>SELECT, JOIN, GROUP BY, Subqueries</li>
            <li>Data Validation & Troubleshooting</li>
            <li>Foreign Keys & Data Integrity</li>
          </ul>
        </div>

        <div className="card">
          <h3>Linux</h3>
          <ul>
            <li>Log Monitoring (tail, grep, cat)</li>
            <li>Process Monitoring (ps, top)</li>
            <li>File & Permission Management</li>
          </ul>
        </div>

        <div className="card">
          <h3>Support Skills</h3>
          <ul>
            <li>Incident Identification</li>
            <li>Root Cause Analysis</li>
            <li>Basic Deployment Support</li>
            <li>Understanding of SLA</li>
          </ul>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <h2>Project Experience</h2>

        <div className="card">
          <h3>Traffic Violation Management System (Live)</h3>
          <ul>
            <li>Designed relational database schema with constraints.</li>
            <li>Executed SQL queries for production data validation.</li>
            <li>Debugged backend errors and resolved runtime issues.</li>
            <li>Deployed & monitored application in Linux cloud environment.</li>
          </ul>
          <a
            href="https://traffic-violation-system-9s0p.onrender.com"
            target="_blank"
            rel="noreferrer"
          >
            <button>View Live System</button>
          </a>
        </div>

        <div className="card">
          <h3>Employee Payroll Management System</h3>
          <ul>
            <li>Implemented SQL joins & subqueries for payroll processing.</li>
            <li>Validated data accuracy and resolved logic issues.</li>
          </ul>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education">
        <h2>Education</h2>
        <div className="card">
          <p><strong>B.Tech – Artificial Intelligence & Data Science</strong></p>
          <p>CGPA: 7.5 / 10</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Siva Balaji | Production Support Engineer</p>
      </footer>

    </div>
  );
}

export default App;
