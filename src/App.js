import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Show from "./Pages/Show";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />

        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/songs" element={<Index />} />
            <Route path="/songs/:id" element={<Show />} />
            <Route path="/songs/new" />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
