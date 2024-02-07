import "./App.css";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Register from "./pages/Register";
import { BrowserRouter as Router, Route, Routes ,  Navigate} from "react-router-dom";

function App() {

  const user = true;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart/" element={<Cart />} />
        
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element= {
          user ? <Navigate to="/" /> : <Login />
        } />
      </Routes>
    </Router>
  );
}

export default App;
