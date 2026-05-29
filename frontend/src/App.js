import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
    {/* Journal Page */}
        <Route path="/journal" element={<JournalPage />} />

        {/* Dynamic Blog Post */}
        <Route path="/journal/:slug" element={<BlogPostPage />} />
        </Routes>
      </BrowserRouter>
      <Analytics />
    </div>
  );
}

export default App;
