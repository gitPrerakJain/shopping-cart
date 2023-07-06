import Home from "./components/Home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import NotFound from "./components/NotFound";
import CartPage from "./components/CartPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
