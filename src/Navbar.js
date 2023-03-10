import LogoutButton from "./components/LogoutButton";
import "./navbar.css"

const burger = require('./images/clipart47340.png');

const Navbar = () => {
  return (
    <nav className="navbar navbar-custom bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" style={{color: "bisque"}} href="/">
          <img id="burger" 
          className="m-3 d-inline-block align-text-center" 
          // width="30"
          height="50"
          src={burger}
          alt="burger"/>
          Pantry Pickings
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
              <a className="nav-link" href="/pantry">Pantry</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/saved-recipes">Saved Recipes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contacts">Contacts</a>
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