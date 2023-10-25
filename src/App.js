import Home from "./components/Home";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import NotFound from "./components/NotFound";
import CartPage from "./components/CartPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/shopping-cart" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
