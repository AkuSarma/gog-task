# Web Application Project (gog task) - Practical Assignment | Pre-Employment Process | Efos.in

## Project Overview

This project is a web application for the Practical Assignment (PA) under the Pre-Employment Process (PEP) by Efos.in. The application features a basic set of web pages and a login system, including functionality for user registration and a dashboard with navigation links. The application simulates a typical pre-employment test case to showcase practical skills in front-end and basic back-end development.

## Features

The application has the following features:

1. **Static Pages**:
    - **Home**: Displays a welcome message, navigation links, and footer information.
    - **About Us**: Provides information about ABC India and its services.
    - **Contact Us**: Displays the contact address of ABC India.

2. **User Authentication**:
    - **Login**: Allows users to log in with their registered email ID or mobile number and password.
    - **Signup**: Enables new users to create an account. Passwords are stored securely by encryption.
    - **Dashboard Access**: After login, users are redirected to a dashboard with various master options and access to different sections.

3. **Dashboard**:
    - Displays a welcome message and navigation menu on the left panel.
    - Sections available in the left menu include:
        - Gender Master
        - Country Master
        - State Master
        - City Master
        - Reports
        - Change Password
        - Logout
    - **Change Password**: Provides a form to update the password (form display only; functionality not required).
    - **Logout**: Logs out the user and returns them to the home page.

## Project Structure

The project consists of the following main components:

- **Header**: Navigation links are present in the header on each page, allowing access to Home, About Us, Contact Us, and Login pages.
- **Footer**: Footer information includes copyright details, project test case ID, developer name, and contact.
- **Pages**:
    - `Home Page`: Default page with a welcome message.
    - `About Us Page`: Displays company information.
    - `Contact Us Page`: Displays company address.
    - `Login Page`: Form for logging in.
    - `Signup Page`: Form for new user registration, with password encryption.
    - `Dashboard`: Main user area post-login, with a left panel menu and main content.

## Technologies Used

- **Front-end**: React, tailwind css
- **Back-end**: express.js, Node.js
- **Database**: MongoDB

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (for backend and server functionality)
- Database (e.g., MongoDB, MySQL) if storing user information

### Installation

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/AkuSarma/gog-task
    cd gog-task
    ```

2. **Install Dependencies**:
    > frontend
    ```bash
    cd frontend
    npm i
    ```

    >backend (start a new terminal)
    ```bash
    cd backend
    npm i
    ```

3. **Configure env file** :
    > example env file
    ```env
    mongo_uri=mongodb url
    PORT=8000
    ```

4. **Run the Application**:
    >frontend
    ```bash
    npm run dev
    ```
    >backend
    ```bash
    node index.js
    ```

## Usage

1. **Navigate to the Home Page** to start exploring the site.
2. **Click on About Us or Contact Us** to view additional information.
3. **Click on Login**:
    - Enter user ID (email or mobile) and password to log in.
    - If you do not have an account, click **Signup** to create one.
4. **Signup Process**:
    - Fill in the form with name, email, mobile, password, and confirm password.
    - After successful signup, you will be redirected to the login page.
5. **Dashboard Access**:
    - Upon successful login, you will be redirected to the dashboard.
    - Use the left panel menu to navigate through the dashboard sections.
    - To change the password, click on **Change Password**.
6. **Logout**:
    - Click **Logout** to log out and return to the home page.

## License

This project is for educational and demonstration purposes as part of a pre-employment process and is not intended for commercial use.