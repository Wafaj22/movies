import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Pages
import Home from "./pages/home";

//Styles
import "./App.css";

function App() {
  return (
    <Router>
      <AnimatePresence initial={false} mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
