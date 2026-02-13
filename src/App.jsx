import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProposalPage from './pages/ProposalPage';
import GalleryPage from './pages/GalleryPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProposalPage />} />
        <Route path="/memories" element={<GalleryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
