import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import CSharp from "./components/CSharp";
import Go from "./components/Go.js";
import Java from "./components/Java";
import NodeJs from "./components/NodeJs";
import PHP from "./components/PHP";
import Python from "./components/Python";
import Ruby from "./components/Ruby";

function App() {
  return (
    <div className="container">
      <Router>
        <nav className="container-nav">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "link-active" : "link")}
          >
            C#
          </NavLink>

          <NavLink
            to="/go"
            className={({ isActive }) => (isActive ? "link-active" : "link")}
          >
            Go
          </NavLink>

          <NavLink
            to="/java"
            className={({ isActive }) => (isActive ? "link-active" : "link")}
          >
            Java
          </NavLink>

          <NavLink
            to="/nodejs"
            className={({ isActive }) => (isActive ? "link-active" : "link")}
          >
            Node.js
          </NavLink>

          <NavLink
            to="/php"
            className={({ isActive }) => (isActive ? "link-active" : "link")}
          >
            PHP
          </NavLink>

          <NavLink
            to="/python"
            className={({ isActive }) => (isActive ? "link-active" : "link")}
          >
            Python
          </NavLink>

          <NavLink
            to="/ruby"
            className={({ isActive }) => (isActive ? "link-active" : "link")}
          >
            Ruby
          </NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<CSharp />} />
          <Route path="/go" element={<Go />} />
          <Route path="/java" element={<Java />} />
          <Route path="/nodejs" element={<NodeJs />} />
          <Route path="/php" element={<PHP />} />
          <Route path="/python" element={<Python />} />
          <Route path="/ruby" element={<Ruby />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
