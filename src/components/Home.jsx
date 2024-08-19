import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  // Dummy data
  const featuredJobs = [
    {
      id: 1,
      title: "Software Engineer",
      company: "Tech Solutions",
      location: "New York, NY",
      description:
        "Looking for a skilled software engineer with experience in React and Node.js.",
    },
    {
      id: 2,
      title: "Product Manager",
      company: "Innovate Inc.",
      location: "San Francisco, CA",
      description:
        "Seeking a product manager to lead our next big project in AI.",
    },
    {
      id: 3,
      title: "UX Designer",
      company: "DesignWorks",
      location: "Remote",
      description:
        "Join our team as a UX Designer to create user-friendly designs.",
    },
  ];

  const featuredEmployers = [
    {
      id: 1,
      name: "Tech Solutions",
      industry: "Technology",
      description: "A leading tech company specializing in software solutions.",
    },
    {
      id: 2,
      name: "Innovate Inc.",
      industry: "Innovation",
      description:
        "A company at the forefront of cutting-edge technology and innovation.",
    },
    {
      id: 3,
      name: "DesignWorks",
      industry: "Design",
      description:
        "A creative agency focused on delivering exceptional design experiences.",
    },
  ];

  const updates = [
    {
      id: 1,
      title: "New Job Listings Added",
      date: "August 15, 2024",
      content: "Check out the latest job openings in various industries.",
    },
    {
      id: 2,
      title: "Featured Employers of the Month",
      date: "August 10, 2024",
      content: "Explore the top employers featured this month.",
    },
    {
      id: 3,
      title: "Career Tips and Advice",
      date: "August 5, 2024",
      content: "Read our latest blog post on advancing your career.",
    },
  ];

  return (
    <div className="home">
      <header className="home-header">
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/job-listings">Job Listings</Link>
            </li>
            <li>
              <Link to="/apply">Apply for a Job</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/application-history">Application History</Link>
            </li>
            <li>
              <Link to="/job-recommendations">Job Recommendations</Link>
            </li>
            <li>
              <Link to="/" onClick={() => localStorage.removeItem("userRole")}>
                Logout
              </Link>
            </li>
          </ul>
        </nav>
        <h1>Welcome to Net-Work!</h1>
        <p>
          Find your next job, connect with employers, and advance your career.
        </p>
      </header>
      <section className="home-content">
        <div className="section featured-jobs">
          <h2>Featured Jobs</h2>
          <ul>
            {featuredJobs.map((job) => (
              <li key={job.id}>
                <h3>{job.title}</h3>
                <p>
                  {job.company} - {job.location}
                </p>
                <p>{job.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="section featured-employers">
          <h2>Featured Employers</h2>
          <ul>
            {featuredEmployers.map((employer) => (
              <li key={employer.id}>
                <h3>{employer.name}</h3>
                <p>{employer.industry}</p>
                <p>{employer.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="section updates">
          <h2>Updates</h2>
          <ul>
            {updates.map((update) => (
              <li key={update.id}>
                <h3>{update.title}</h3>
                <p>{update.date}</p>
                <p>{update.content}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Home;
