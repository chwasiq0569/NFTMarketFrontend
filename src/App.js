import "./App.css";
import Home from "./Pages/Home/Home";
import Explore from "./Pages/Explore/Explore";
import ItemsDetail from "./Pages/ItemsDetail/ItemsDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from "./Pages/AuthPage/AuthPage";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/itemDetail" element={<ItemsDetail />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
