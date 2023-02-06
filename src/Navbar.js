import LogoutButton from "./components/LogoutButton";
import "./navbar.css"

const burger = require('./images/clipart47340.png');

const Navbar = () => {
  return (
    <nav className="navbar navbar-custom navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img id="burger" 
          classNameName="m-2 d-inline-block align-text-top" 
          height="40"
          src={burger} 
          alt="burger"/>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link mt-3" aria-current="page" href="/dashboard">Dashboard</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/full-pantry">Pantry</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/saved-recipes">Saved Recipes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/address-book">Contacts</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/calculator">Find-a-Recipe</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mb-3" href="/account">My Account</a>
            </li>
            <li>
              <LogoutButton />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;