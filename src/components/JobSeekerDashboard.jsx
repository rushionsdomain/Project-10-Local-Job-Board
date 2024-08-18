// JobSeekerDashboard.js
import React, { useState } from "react";
import "./JobSeekerDashboard.css";

const JobSeekerDashboard = () => {
  const [profile] = useState({
    name: "John Doe",
    resume: "john_doe_resume.pdf",
    skills: ["JavaScript", "React", "CSS"],
    experience: "2 years in Web Development",
  });

  const [jobListings] = useState([
    {
      id: 1,
      title: "Frontend Developer",
      company: "Company A",
      location: "Remote",
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "Company B",
      location: "New York",
    },
  ]);

  const [applications] = useState([
    {
      id: 1,
      job: "Frontend Developer",
      status: "Pending",
      interviewDate: "2024-09-01",
    },
  ]);

  return (
    <div className="job-seeker-dashboard">
      <section className="profile-management">
        <h2>Profile Management</h2>
        <p>Name: {profile.name}</p>
        <p>
          Resume: <a href={`/${profile.resume}`}>Download Resume</a>
        </p>
        <p>Skills: {profile.skills.join(", ")}</p>
        <p>Experience: {profile.experience}</p>
        <button>Edit Profile</button>
      </section>

      <section className="job-search">
        <h2>Job Search</h2>
        {jobListings.map((job) => (
          <div key={job.id} className="job-card">
            <h3>{job.title}</h3>
            <p>
              {job.company} - {job.location}
            </p>
            <button>Apply</button>
          </div>
        ))}
      </section>

      <section className="application-management">
        <h2>Application Management</h2>
        {applications.map((app) => (
          <div key={app.id}>
            <p>Applied for: {app.job}</p>
            <p>Status: {app.status}</p>
            <p>Interview Date: {app.interviewDate}</p>
          </div>
        ))}
      </section>

      <section className="networking">
        <h2>Networking</h2>
        <p>
          Connect with employers, join professional groups, and message other
          job seekers.
        </p>
        <button>Join Forum</button>
      </section>

      <section className="interview-preparation">
        <h2>Interview Preparation</h2>
        <p>
          Access mock interviews, schedule interviews, and receive reminders.
        </p>
      </section>

      <section className="job-suggestions">
        <h2>Job Suggestions</h2>
        <p>We recommend jobs based on your profile and application history.</p>
      </section>
    </div>
  );
};

export default JobSeekerDashboard;
