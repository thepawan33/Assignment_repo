import Home from "./components/Home";
import IDCard from "./components/IDCard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/id" element={<IDCard />} />
      </Routes>
    </Router>
  );
}

export default App;
