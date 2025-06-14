import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShopInfo from './pages/ShopInfo';
import MembershipCard from './pages/MembershipCard';
import Menu from './pages/Menu';
import Access from './pages/Access';
import Navbar from './components/Navbar';
import QrScanner from './pages/QrScanner';


function App() {
  return (
    <HashRouter> {/* ← ここ変更 */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ShopInfo />} />
        <Route path="/card" element={<MembershipCard />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/access" element={<Access />} />
        <Route path="/scan" element={<QrScanner />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
