import React from "react";
import { Link } from "react-router-dom";
import "./Forms.css";

const RegistrationForm = () => {
  return (
    <form className="container">
      <div for="firstName" className="mb-3">
        <label for="inputFirstName" className="form-label">First Name</label>
        <input type="password" className="form-control" id="inputFirstName"/>
      </div>

      <div for="lastName" className="mb-3">
        <label for="inputLastName" className="form-label">Last Name</label>
        <input type="password" className="form-control" id="inputLastName"/>
      </div>

      <div for="email" className="mb-3">
        <label for="inputEmail" className="form-label">Email</label>
        <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="name@example.com"/>
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>

      <div for="password" className="mb-3">
        <label for="inputPassword" className="form-label">Password</label>
        <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock"/>
        <div id="passwordHelpBlock" className="form-text">
          Must be 8-20 characters long.
        </div>
      </div>

      <button type="submit" className="btn btn-warning">Let's Go!</button>

      <div className="p-3 text-center">
        Already have an account? <Link to="/login">Login here</Link>
      </div>

      
    </form>
  );
};
  // <ul id="login-info">
  //         <li>First name: <input type="text" required></input></li>
  //         <li>Last name: <input type="text" required></input></li>
  //         <li>Username: <input type="email" required placeholder="must be an email"></input></li>
  //         <li>Password: <input type="text" required placeholder="at least 8 characters"></input></li>
  //         <li>Confirm password: <input type="text" placeholder="must match ^^"></input></li>
  //       </ul>
  //       <Link to="/dashboard"><button>Let's go!!</button></Link>
  //       <p>Already have an account?</p>
  //       <Link to="/login">Login here</Link>

export default RegistrationForm;