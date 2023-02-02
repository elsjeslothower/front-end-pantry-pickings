import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      Hello from Dashboard!!
      This div element will serve as a makeshift Nav bar.
      Here are your options:
      <ul>
        <li><Link to={"/address-book"}>To address book</Link></li>
        <li><Link to={"/login"}>To login page</Link></li>
        <li><Link to={"/"}>To homepage (welcome!)</Link></li>
        <li><Link to={"/signup"}>To signup page</Link></li>
        <li><Link to={"/404"}>To 404</Link></li>
      </ul>
    </div>
  );
};

export default Dashboard;