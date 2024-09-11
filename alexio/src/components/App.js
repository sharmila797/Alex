// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeBanner from  "./components/HomeBanner";
import Contact from  "./components/Contact";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomeBanner />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
