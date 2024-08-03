import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import AddEmploy from "./pages/AddEmployee";
import IndieEmployee from "./pages/IndieEmployee";

function App() {
  return (
    <div className={"flex font-poppins"}>
      <ToastContainer />

      <Router>
        <Sidebar />

        <Routes>
          <Route path="/" element={<Dashboard />} />

          <Route path="/add" element={<AddEmploy />} />

          <Route path="/:emp_id" element={<IndieEmployee />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
