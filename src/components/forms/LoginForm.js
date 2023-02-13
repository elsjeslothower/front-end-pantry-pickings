import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <form className="container">
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Keep me signed in
        </label>
      </div>
      <button type="submit" className="btn btn-warning">
        Let's Go!
      </button>
      <p className="p-3 text-center">
        Don't have an account? <Link to="/register">Sign up here</Link>
      </p>
    </form>
  );
};

export default LoginForm;
