import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { jobsData } from '../data/jobs';
import '../styles/netflix.css'; // Using netflix.css as the base style for all job detail pages

const JobDetails = () => {
  const { roleId } = useParams();
  const job = jobsData[roleId];
  const [applied, setApplied] = useState(false);

  if (!job) {
    return <Navigate to="/jobs" />;
  }

  const handleApply = () => {
    setApplied(true);
    alert(`Successfully applied for the ${job.role} position at ${job.company}!`);
  };

  return (
    <div className="job-details-page" style={{ backgroundColor: '#f3f4f6', minHeight: '100vh', paddingTop: '100px' }}>
      <div className="job-container">
        <div className="left-content">
          <img src={job.logo} alt={`${job.company} logo`} className="company-logo" />
          <h2 className="company-name">{job.company}</h2>
          <p className="time-posted">Posted {job.posted}</p>
          <button 
            className="apply-btn" 
            onClick={handleApply}
            disabled={applied}
            style={{ backgroundColor: applied ? '#27ae60' : '#1e73ff' }}
          >
            {applied ? 'Applied' : 'Apply Now'}
          </button>
        </div>

        <div className="right-content">
          <h3>{job.role}</h3>
          <p className="sub-text">
            <strong>Team:</strong> {job.team} | 
            <strong> Location:</strong> {job.location} | 
            <strong> Experience:</strong> {job.experience} | 
            <strong> Mode:</strong> {job.mode}
          </p>

          <h4>Job Description</h4>
          <p>{job.description}</p>

          <h4>Responsibilities</h4>
          <ul>
            {job.responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h4>Requirements</h4>
          <ul>
            {job.requirements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="next-page">
        <p>Similar Roles</p>
        {/* Placeholder for similar roles if needed, currently showing static images as in original CSS */}
        <img src="/assets/Netflix.png" alt="similar 1" />
        <img src="/assets/Wandarlo.png" alt="similar 2" />
        <img src="/assets/Plaid (1).png" alt="similar 3" />
      </div>
    </div>
  );
};

export default JobDetails;
