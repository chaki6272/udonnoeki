import { HashRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import ShopInfo from './pages/ShopInfo';
// import MembershipCard from './pages/MembershipCard'; // ← 旧ファイルは不要ならコメントアウト
import PointCard from './pages/PointCard'; // ✅ 新しいファイルをインポート
import Menu from './pages/Menu';
import Access from './pages/Access';
import Navbar from './components/Navbar';
import QrScanner from './pages/QrScanner';

import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ShopInfo />} />
        <Route path="/pointcard" element={<PointCard />} /> {/* ✅ 新ルート */}
        <Route path="/menu" element={<Menu />} />
        <Route path="/access" element={<Access />} />
        <Route path="/scan" element={<QrScanner />} />
        {/* <Route path="/card" element={<MembershipCard />} /> ← 旧ルートは不要なら削除 */}
      </Routes>
    </HashRouter>
  );
}

export default App;
