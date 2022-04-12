import './App.css'
import Home from "../src/pages/Home"
import Header from "./components/Header/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (

    // BEM Naming Conventions

    <div className="app">
         <Router>
        <Header />
        <Routes>
           <Route path='/' element={<Home />} />
        </Routes>
      
    {/* Home */}
      {/* Header */}
      
      {/* Banner */}
      
      {/* Cards */}

      {/* Footer */}
      
    {/* Search */}
    </Router>
    </div>

  );
}

export default App;
