import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CreateFAQ from "./pages/CreateFAQ";
import EditFAQ from "./pages/EditFAQ";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create" element={<CreateFAQ />} />
        <Route path="/edit/:id" element={<EditFAQ />} />
      </Routes>
    </Router>
  );
};

export default App;
