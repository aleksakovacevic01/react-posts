import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Recipe from "./pages/Recipe";
import Products from "./pages/Products";
import Home from "./pages/Home";

export const App = () => {
  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/recipes/:id" element={<Recipe />} />
        </Routes>
      </HashRouter>
    </>
  );
};
