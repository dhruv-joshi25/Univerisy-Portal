import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Home/Navbar";
import Home from "./Components/Home/Home";
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
      </Routes>
    </Router>
  );
};

export default App;
