import './App.css'
import Home from "../src/pages/Home"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import SearchPage from "./components/SearchPage/SearchPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (

    // BEM Naming Conventions

    <div className="app">
         <Router>
        <Header />
        <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/search' element={<SearchPage />} />
        </Routes>
        <Footer />
      
    </Router>
    </div>

  );
}

export default App;
