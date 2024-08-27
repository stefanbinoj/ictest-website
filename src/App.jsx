import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';    
import Navbar from './navbar/navbar';
import Dashboard from './dashboard/dashboard';
import MainPage from './mainPage/mainPage';
import ImageGallery from './gallery/gallery';
import Schedule from "./schedule/schedule";
import Publications from "./publications/publications.jsx";



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<><Dashboard /><MainPage /></>} />
          <Route path="/gallery" element={<ImageGallery />} />
          <Route path="/schedule" element={<Schedule />}/>
          <Route path="/publications" element={<Publications />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
