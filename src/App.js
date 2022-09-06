import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Review from "./components/Review/Review";
import NoMatch from "./components/NoMatch/NoMatch";
import Inventory from "./components/Inventory/Inventory";
import ProductDetail from "./components/ProductDetail/ProductDetail";

function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/shop" element={<Shop />} />
          <Route path="/review" element= {<Review />} />
          <Route path="/inventory" element = {<Inventory />} />
          <Route path="/product/:id" element = {<ProductDetail />} />
          <Route path='*' element = {<NoMatch />} />
          <Route path='/' element = {<Shop />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
