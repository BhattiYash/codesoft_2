import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

export default function HomePage() {
  const navigate = useNavigate();

  const jobListings = [
    { id: 1, title: 'Software Engineer', company: 'CodeSoft', location: 'New York', description: 'Develop and maintain software solutions.' },
    { id: 2, title: 'Frontend Developer', company: 'Techies Inc.', location: 'San Francisco', description: 'Create and optimize web interfaces.' },
    { id: 3, title: 'Backend Developer', company: 'DevCorp', location: 'Remote', description: 'Build and maintain server-side applications.' },
    { id: 4, title: 'Data Scientist', company: 'DataWorks', location: 'Boston', description: 'Analyze and interpret complex data.' },
  ];

  const handleViewDetails = (job) => {
    navigate(`/job/${job.id}`);
  };

  return (
    <div>
      <div className="carousel-container">
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src="images/people.jpg" className="d-block w-100 carousel-image" alt="People" />
              <div className="carousel-overlay"></div>
              <div className="carousel-caption d-none d-md-block">
                <h5>Explore Job Opportunities</h5>
                <p>Discover a variety of roles to fit your career aspirations.</p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src="images/people2.jpg" className="d-block w-100 carousel-image" alt="People" />
              <div className="carousel-overlay"></div>
              <div className="carousel-caption d-none d-md-block">
                <h5>Connect with Employers</h5>
                <p>Build valuable networks and connect with industry leaders.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="images/people3.jpg" className="d-block w-100 carousel-image" alt="People" />
              <div className="carousel-overlay"></div>
              <div className="carousel-caption d-none d-md-block">
                <h5>Find Your Next Step</h5>
                <p>Take a step toward your dream job with our platform.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="job-listings">
        <h2 className="text-center mt-4">Job Listings</h2>
        <div className="job-grid">
          {jobListings.map((job) => (
            <div key={job.id} className="job-card">
              <h3>{job.title}</h3>
              <p><strong>Company:</strong> {job.company}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <p>{job.description}</p>
              <button className="btn btn-primary" onClick={() => handleViewDetails(job)}>View Details</button>
            </div>
          ))}
        </div>
      </div>

      <footer className="footer">
        <div className="container text-center">
          <p>&copy; {new Date().getFullYear()} JobQuest. All Rights Reserved.</p>
          <p>Connect with us: 
            <a href="#" className="footer-link"> Facebook </a> | 
            <a href="#" className="footer-link"> Twitter </a> | 
            <a href="#" className="footer-link"> LinkedIn </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
