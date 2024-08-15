import React, { useState } from 'react';
import './ApplyForm.css';
import HomePage from './HomePage';

const ApplyForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="apply-form-container">
      <form className="apply-form" onSubmit={handleSubmit}>
        <h2 className="form-title">JOB APPLICATION FORM</h2>

        {!formSubmitted ? (
          <>
            <div className="form-group">
              <label htmlFor="name">Full name *</label>
              <input type="text" id="name" name="name" required placeholder="Full name (eg:John Doo) " />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input type="email" id="email" name="email" required placeholder="Email (Example@gmail.com)" />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone number *</label>
              <input type="text" id="phone" name="phone" required placeholder="Phone number" />
            </div>

            <div className="form-group">
              <label htmlFor="workplace">Workplace type *</label>
              <select id="workplace" name="workplace" required>
                <option value="On-site">On-site</option>
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="location">Job location *</label>
              <input type="text" id="location" name="location" required placeholder="Job location" />
            </div>

            <div className="form-group">
              <label htmlFor="employment">Employment type *</label>
              <select id="employment" name="employment" required>
                <option value="select-one">Select-one</option>
                <option value="Full time">Full time</option>
                <option value="Part time">Part time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            <button type="submit" className="submit-button">Submit Application</button>
          </>
        ) : (
          <div className="form-group">
            <button type="button" className="submit-button">Thank you for applying<a href='/'></a>.</button>
          </div>
          
        )}

        <footer className="form-footer">
          <p>
            By clicking <b>{formSubmitted ? 'Thank you for applying.' : 'Submit Application'}</b>, you agree to our <a href="./HomePage">User Agreement</a>, <a href="/">Privacy Policy</a>, and <a href="/">Cookie Policy</a>.
          </p>
        </footer>
      </form>
    </div>
  );
};

export default ApplyForm;
