import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './JobDetail.css';

const jobData = [
  {
    id: 1,
    title: 'Software Engineer',
    company: 'CodeSoft',
    location: 'New York',
    description: 'Develop and maintain software solutions.',
    salary: '$90,000 - $110,000',
    jobType: 'Full-time',
    experienceRequired: '2+ years',
    postedDate: '2024-10-20',
    skills: ['JavaScript', 'React', 'Node.js', 'SQL']
  },
  {
    id: 2,
    title: 'Frontend Developer',
    company: 'Techies Inc.',
    location: 'San Francisco',
    description: 'Create and optimize web interfaces.',
    salary: '$80,000 - $100,000',
    jobType: 'Part-time',
    experienceRequired: '1+ years',
    postedDate: '2024-10-18',
    skills: ['HTML', 'CSS', 'JavaScript', 'Vue.js']
  },
  {
    id: 3,
    title: 'Backend Developer',
    company: 'DevCorp',
    location: 'Remote',
    description: 'Build and maintain server-side applications.',
    salary: '$95,000 - $120,000',
    jobType: 'Contract',
    experienceRequired: '3+ years',
    postedDate: '2024-10-15',
    skills: ['Python', 'Django', 'APIs', 'SQL']
  },
  {
    id: 4,
    title: 'Data Scientist',
    company: 'DataWorks',
    location: 'Boston',
    description: 'Analyze and interpret complex data.',
    salary: '$100,000 - $130,000',
    jobType: 'Full-time',
    experienceRequired: '2+ years',
    postedDate: '2024-10-10',
    skills: ['Python', 'R', 'Machine Learning', 'Statistics']
  },
  {
    id: 5,
    title: 'Product Manager',
    company: 'InnovateHub',
    location: 'Austin',
    description: 'Lead product development teams.',
    salary: '$105,000 - $135,000',
    jobType: 'Full-time',
    experienceRequired: '4+ years',
    postedDate: '2024-10-05',
    skills: ['Product Management', 'Agile', 'Scrum', 'Communication']
  },
  {
    id: 6,
    title: 'UX/UI Designer',
    company: 'DesignPro',
    location: 'Seattle',
    description: 'Design user interfaces and improve user experience.',
    salary: '$75,000 - $95,000',
    jobType: 'Freelance',
    experienceRequired: '1+ years',
    postedDate: '2024-10-08',
    skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research']
  },
  {
    id: 7,
    title: 'DevOps Engineer',
    company: 'CloudTech',
    location: 'Chicago',
    description: 'Maintain and optimize infrastructure.',
    salary: '$100,000 - $125,000',
    jobType: 'Full-time',
    experienceRequired: '3+ years',
    postedDate: '2024-10-12',
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD']
  },
  {
    id: 8,
    title: 'QA Engineer',
    company: 'QualityFirst',
    location: 'Los Angeles',
    description: 'Test software for quality assurance.',
    salary: '$70,000 - $90,000',
    jobType: 'Full-time',
    experienceRequired: '2+ years',
    postedDate: '2024-10-22',
    skills: ['Manual Testing', 'Automated Testing', 'Selenium', 'JIRA']
  },
  {
    id: 9,
    title: 'System Analyst',
    company: 'SysSolutions',
    location: 'Dallas',
    description: 'Analyze and design IT systems.',
    salary: '$85,000 - $105,000',
    jobType: 'Full-time',
    experienceRequired: '3+ years',
    postedDate: '2024-10-17',
    skills: ['System Analysis', 'Database Management', 'SQL', 'Project Management']
  }
];
function JobDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = jobData.find((job) => job.id === parseInt(id));

  const handleApplyNow = () => {
    navigate('/CandidateDashboard');
  };

  return (
    <div className="job-detail-container">
      {job ? (
        <>
          <h1 className="job-title">{job.title}</h1>
          <h2 className="job-company">{job.company}</h2>
          <p className="job-location"><strong>Location: </strong>{job.location}</p>
          <p className="job-description"><strong>Description: </strong>{job.description}</p>
          <p className="job-salary"><strong>Salary: </strong>{job.salary}</p>
          <p className="job-type"><strong>Job Type: </strong>{job.jobType}</p>
          <p className="job-experience"><strong>Experience: </strong>{job.experienceRequired}</p>
          <p className="job-postedDate"><strong>Posted Date: </strong>{job.postedDate}</p>
          <p className="job-skills"><strong>Skills: </strong>{job.skills.join(', ')}</p>
          <button className="btn btn-primary apply-now-btn" onClick={handleApplyNow}>
            Apply Now
          </button>
        </>
      ) : (
        <p className="job-not-found">Job not found.</p>
      )}
    </div>
  );
}

export default JobDetail;
