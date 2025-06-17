import { HashRouter, Routes, Route } from 'react-router-dom'; // ← ここが重要！
import Home from './pages/Home';
import ShopInfo from './pages/ShopInfo';
import MembershipCard from './pages/MembershipCard';
import Menu from './pages/Menu';
import Access from './pages/Access';
import Navbar from './components/Navbar';
import QrScanner from './pages/QrScanner';

// 例：App.jsx や BarcodeScannerComponent.jsx など
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';


function App() {
  return (
    <HashRouter> {/* ← BrowserRouterから変更済み */}
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
