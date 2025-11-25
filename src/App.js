import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/Mainlayout";
import Home from "./pages/Home";
import Feedback from "./pages/Feedback";
import Resources from "./pages/Resources";
import Announcement from "./pages/Announcement";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/announcement" element={<Announcement />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
