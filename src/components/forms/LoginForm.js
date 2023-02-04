import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Forms.css";

const LoginForm = () => {
  return (
    <form className="container">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1"/>
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
        <label class="form-check-label" for="exampleCheck1">Keep me signed in</label>
      </div>
      <button type="submit" class="btn btn-warning">Let's Go!</button>
      <p className="p-3 text-center">
        Don't have an account? <Link to="/register">Sign up here</Link>
      </p>
    </form>
  );
};

export default LoginForm;

