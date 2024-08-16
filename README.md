# Net-Work: Local Job Board

Net-Work is a local job board application designed to connect local businesses and employers with job seekers within the community. The platform includes features for job postings, job applications, and user profiles for both employers and job seekers. Additionally, superusers have administrative capabilities for managing the site.

## Features

- **Landing Page**: Engaging introduction with animations and CTA buttons.
- **Authentication**: User registration and login with role-based access.
- **Role-Based Dashboards**:
  - **Job Seeker Dashboard**: Manage profiles, search for jobs, apply for positions, and prepare for interviews.
  - **Employer Dashboard**: Post jobs, manage job applications, schedule interviews, and view analytics.
  - **Superuser Dashboard**: Administer users, manage site content, view site analytics, and handle security settings.
- **Job Listings**: View and filter job opportunities.
- **Messaging**: Communicate between job seekers and employers.
- **Notifications**: Receive updates on job applications and messages.

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/rushionsdoamin/net-work.git
    ```

2. **Navigate into the project directory:**

    ```bash
    cd net-work
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Start the development server:**

    ```bash
    npm start
    ```

    The application will be available at `http://localhost:3000`.

## Usage

1. **Register and Login:**
   - Visit the landing page to register as a new user or log in if you already have an account.
   - Users can register as Job Seekers, Employers, or Superusers. Based on the user role, they will be redirected to their respective dashboards upon logging in.

2. **Navigating the Application:**
   - **Job Seekers**: Use the navigation bar to access the Home, Messaging, Jobs, Notifications, and Profile sections.
   - **Employers**: Use the navigation bar to access the Home, Messaging, Post Jobs, Notifications, and Profile sections.
   - **Superusers**: Use the navigation bar to access the Home, Messaging, Administration of Users, Notifications, and Profile sections.

3. **Adding Jobs:**
   - Employers can post new jobs using the "Post Jobs" section.

4. **Applying for Jobs:**
   - Job Seekers can browse job listings and apply for positions directly from their dashboard.

## Authentication & Role Management

The application uses local storage to manage authentication tokens and user roles. The `authToken` and `userRole` are stored in local storage upon login. Ensure you have these tokens properly set to simulate different user roles.

## Technology Stack

- **Frontend**: React, React Router, CSS
- **Backend**: JSON Server (for mock data and API simulation)

## Project Structure

- `src/`
  - `components/`
    - `AddJobForm.jsx` - Form for employers to add new job listings.
    - `ApplicationForm.jsx` - Form for job seekers to apply for jobs.
    - `Navbar.jsx` - Navigation bar component for different user roles.
    - `JobList.jsx` - Component to display a list of job opportunities.
    - `JobDetails.jsx` - Component to show detailed information about a specific job.
    - `Profile.jsx` - User profile management component.
    - `HomePage.jsx` - Home page component with role-based content.
    - `JobSeekerDashboard.jsx` - Dashboard for job seekers.
    - `EmployerDashboard.jsx` - Dashboard for employers.
    - `SuperuserDashboard.jsx` - Dashboard for superusers.
    - `Landing.jsx` - Landing page component.
    - `RegisterForm.jsx` - Registration form component.
    - `SignInForm.jsx` - Login form component.
  - `App.js` - Main application routing and logic.
  - `db.json` - Mock database for users and job listings.

## Contributing

Feel free to fork the repository and submit pull requests. Contributions and feedback are welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
