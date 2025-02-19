import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import FlowerCatalog from './pages/FlowerCatalog';
import CustomBouquet from './pages/CustomBouquet';
import Cart from './pages/Cart';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-rose-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/flowers" element={<FlowerCatalog />} />
            <Route path="/custom" element={<CustomBouquet />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App