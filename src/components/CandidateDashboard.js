import React, { useState } from 'react';
import './CandidateDashboard.css';

function CandidateDashboard() {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    skills: '',
    education: '',
    experience: '',
    resume: null,
  });

  const [applications, setApplications] = useState([
    {
      id: 1,
      jobTitle: 'Software Engineer',
      company: 'Tech Company',
      status: 'Applied',
    },
    {
      id: 2,
      jobTitle: 'Web Developer',
      company: 'Web Solutions Inc.',
      status: 'Interview Scheduled',
    },
  ]);

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfile((prev) => ({ ...prev, resume: file }));
      alert('Resume uploaded successfully!');
    }
  };

  const handleSaveProfile = () => {
    const newApplication = {
      id: applications.length + 1,
      jobTitle: profile.name || 'Candidate Profile',
      company: profile.email || 'N/A',
      status: 'Profile Saved',
      details: { ...profile },
    };

    setApplications((prev) => [...prev, newApplication]);
    alert('Profile saved successfully!');
  };

  const handleApplicationStatusChange = (id, newStatus) => {
    setApplications((prev) =>
      prev.map((app) => (app.id === id ? { ...app, status: newStatus } : app))
    );
  };

  return (
    <div className="candidate-dashboard">
      <h2>Candidate Dashboard</h2>

      <div className="profile-management-section">
        <h3>Profile Management</h3>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={profile.name}
          onChange={handleProfileChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={profile.email}
          onChange={handleProfileChange}
        />
        <textarea
          name="skills"
          placeholder="Skills (comma-separated)"
          value={profile.skills}
          onChange={handleProfileChange}
        />
        <textarea
          name="education"
          placeholder="Education"
          value={profile.education}
          onChange={handleProfileChange}
        />
        <textarea
          name="experience"
          placeholder="Work Experience"
          value={profile.experience}
          onChange={handleProfileChange}
        />
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleResumeUpload}
        />
        <button className="save-profile-btn" onClick={handleSaveProfile}>
          Save Profile
        </button>
      </div>

      <div className="application-tracking-section">
        <h3>Application Tracking</h3>
        {applications.length === 0 ? (
          <p>No applications submitted.</p>
        ) : (
          applications.map((app) => (
            <div key={app.id} className="application-card">
              <h4>{app.jobTitle}</h4>
              <p><strong>Company:</strong> {app.company}</p>
              <p><strong>Status:</strong> {app.status}</p>
              <select
                value={app.status}
                onChange={(e) => handleApplicationStatusChange(app.id, e.target.value)}
              >
                <option value="Applied">Applied</option>
                <option value="Interview Scheduled">Interview Scheduled</option>
                <option value="Offer Received">Offer Received</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default CandidateDashboard;