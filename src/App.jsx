import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShopInfo from './pages/ShopInfo';
import MembershipCard from './pages/MembershipCard';
import Menu from './pages/Menu';
import Access from './pages/Access';
import Navbar from './components/Navbar'; // ← 追加

function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* ← 追加 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ShopInfo />} />
        <Route path="/card" element={<MembershipCard />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/access" element={<Access />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
