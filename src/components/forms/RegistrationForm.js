import React from "react";
import { Link } from "react-router-dom";
import "./Forms.css";

const RegistrationForm = () => {
  const handleNewAccount = () => {
    // func here
    console.log("Add new user to DB!!!!!")
  };
  
  return (
    <form onSubmit={() => handleNewAccount()} className="container">
      <div htmlFor="firstName" className="mb-3">
        <label htmlFor="inputFirstName" className="form-label">First Name</label>
        <input type="password" className="form-control" id="inputFirstName"/>
      </div>

      <div htmlFor="lastName" className="mb-3">
        <label htmlFor="inputLastName" className="form-label">Last Name</label>
        <input type="password" className="form-control" id="inputLastName"/>
      </div>

      <div htmlFor="email" className="mb-3">
        <label htmlFor="inputEmail" className="form-label">Email</label>
        <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="name@example.com"/>
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>

      <div htmlFor="password" className="mb-3">
        <label htmlFor="inputPassword" className="form-label">Password</label>
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

export default RegistrationForm;