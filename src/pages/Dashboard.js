import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      Hello from Dashboard!!
      This div element will serve as a makeshift Nav bar.
      Here are your options:
      <ol>
        <li><Link to={"/"}>To homepage (welcome!)</Link></li>
        <li><Link to={"/login"}>To login page</Link></li>
        <li><Link to={"/signup"}>To signup page</Link></li>
        <li><Link to={"/dashboard"}>To dashboard</Link></li>
        <li><Link to={"/full-pantry"}>To pantry</Link></li>
        <li><Link to={"/calculator"}>To find-a-recipe</Link></li>
        <li><Link to={"/saved-recipes"}>To saved recipes</Link></li>
        <li><Link to={"/address-book"}>To address book</Link></li>
        <li><Link to={"/account"}>To account info</Link></li>
        <li><Link to={"/404"}>To 404</Link></li>
      </ol>
    </div>
  );
};

export default Dashboard;