import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";
import Home from "./pages/home/home";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            <div className="App">
              <Dashboard />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
