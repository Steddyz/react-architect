import Contact from "./components/Contacts/Contact";
import Header from "./components/Header/Header";
import GalleryPage from "./pages/GalleryPage";
import MainPage from "./pages/MainPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Contact />
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<MainPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
