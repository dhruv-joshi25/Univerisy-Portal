import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Layout from "./Layout";
import Navbar from "./Components/Home/Navbar";
import Footer from "./Components/Home/FooterSection";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Navbar />
              <Home />
              <Footer />
            </div>
          }
        />
        <Route
          path="About"
          element={
            <div>
              <Navbar />
              <About />
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
