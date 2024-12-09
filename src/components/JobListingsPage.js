import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './JobListingsPage.css'
const jobData = [
  { id: 1, title: 'Software Engineer', company: 'CodeSoft', location: 'New York', description: 'Develop and maintain software solutions.' },
  { id: 2, title: 'Frontend Developer', company: 'Techies Inc.', location: 'San Francisco', description: 'Create and optimize web interfaces.' },
  { id: 3, title: 'Backend Developer', company: 'DevCorp', location: 'Remote', description: 'Build and maintain server-side applications.' },
  { id: 4, title: 'Data Scientist', company: 'DataWorks', location: 'Boston', description: 'Analyze and interpret complex data.' },
  { id: 5, title: 'Product Manager', company: 'InnovateHub', location: 'Austin', description: 'Lead product development teams.' },
  { id: 6, title: 'UX/UI Designer', company: 'DesignPro', location: 'Seattle', description: 'Design user interfaces and improve user experience.' },
  { id: 7, title: 'DevOps Engineer', company: 'CloudTech', location: 'Chicago', description: 'Maintain and optimize infrastructure.' },
  { id: 8, title: 'QA Engineer', company: 'QualityFirst', location: 'Los Angeles', description: 'Test software for quality assurance.' },
  { id: 9, title: 'System Analyst', company: 'SysSolutions', location: 'Dallas', description: 'Analyze and design IT systems.' }
];

function JobListingsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredJobs = jobData.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-page">
      <header>
        <h1 className='m-5'>Job Search Portal</h1>
        <input
          type="text"
          placeholder="Search by title, company, or location"
          value={searchTerm}
          onChange={handleSearch}
        />
      </header>
      <main className="job-grid">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <Link key={job.id} to={`/job/${job.id}`} className="job-card">
              <h2>{job.title}</h2>
              <h3>{job.company}</h3>
              <p>Location: {job.location}</p>
              <p>{job.description}</p>
            </Link>
          ))
        ) : (
          <p>No job listings found.</p>
        )}
      </main>
    </div>
  );
}

export default JobListingsPage;