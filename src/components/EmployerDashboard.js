import React, { useState } from 'react';
import './EmployerDashboard.css';

function EmployerDashboard() {
  const [jobPostings, setJobPostings] = useState([
    {
      id: 1,
      title: 'Software Engineer',
      description: 'Develop and maintain web applications.',
      qualifications: '3+ years of experience, proficient in React and Node.js',
      responsibilities: 'Write clean, scalable code.',
      location: 'Remote',
      status: 'Open',
    },
  ]);

  const [newJob, setNewJob] = useState({
    title: '',
    description: '',
    qualifications: '',
    responsibilities: '',
    location: '',
  });

  const handleJobInputChange = (e) => {
    const { name, value } = e.target;
    setNewJob((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddJob = () => {
    setJobPostings([...jobPostings, { ...newJob, id: jobPostings.length + 1, status: 'Open' }]);
    setNewJob({ title: '', description: '', qualifications: '', responsibilities: '', location: '' });
  };

  const handleDeleteJob = (id) => {
    setJobPostings(jobPostings.filter((job) => job.id !== id));
  };

  return (
    <div className="employer-dashboard">
      <h2>Employer Dashboard</h2>

      <div className="job-postings-section">
        <h3>My Job Postings</h3>
        {jobPostings.length === 0 ? (
          <p>No job postings available</p>
        ) : (
          jobPostings.map((job) => (
            <div key={job.id} className="job-card">
              <h4>{job.title}</h4>
              <p><strong>Description:</strong> {job.description}</p>
              <p><strong>Qualifications:</strong> {job.qualifications}</p>
              <p><strong>Responsibilities:</strong> {job.responsibilities}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <p><strong>Status:</strong> {job.status}</p>
              <button onClick={() => handleDeleteJob(job.id)} className="delete-btn">Delete</button>
            </div>
          ))
        )}
      </div>

      <div className="post-job-section">
        <h3>Post a New Job</h3>
        <input type="text" name="title" placeholder="Job Title" value={newJob.title} onChange={handleJobInputChange} />
        <textarea name="description" placeholder="Description" value={newJob.description} onChange={handleJobInputChange} />
        <textarea name="qualifications" placeholder="Qualifications" value={newJob.qualifications} onChange={handleJobInputChange} />
        <textarea name="responsibilities" placeholder="Responsibilities" value={newJob.responsibilities} onChange={handleJobInputChange} />
        <input type="text" name="location" placeholder="Location" value={newJob.location} onChange={handleJobInputChange} />
        <button onClick={handleAddJob} className="add-job-btn">Post Job</button>
      </div>
    </div>
  );
}

export default EmployerDashboard;
