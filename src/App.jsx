import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
