import FAQList from "../components/FAQList";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container">
      <h1 className="text-center">FAQ Admin Panel</h1>
      <Link to="/create">
        <button className="btn-primary">Add FAQ</button>
      </Link>
      <FAQList />
    </div>
  );
};

export default Dashboard;
