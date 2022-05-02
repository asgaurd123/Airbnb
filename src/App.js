import './App.css';
import React from "react"
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './Header';
import SearchPage from './SearchPage';
import Footer from './Footer'


function App() {
  return (
    <div className="App">
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
