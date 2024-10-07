// App.js
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeBanner from  "./HomeBanner";
import Contact from  "../Contact1";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomeBanner />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
