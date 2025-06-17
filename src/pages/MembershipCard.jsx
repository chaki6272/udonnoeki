import { useState, useEffect } from 'react';

// 例：App.jsx や BarcodeScannerComponent.jsx など
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';


function MembershipCard() {
  const [points, setPoints] = useState(0);

  const loadPoints = () => {
    const savedPoints = localStorage.getItem('memberPoints');
    setPoints(savedPoints ? Number(savedPoints) : 0);
  };

  // 初回読み込み
  useEffect(() => {
    loadPoints();
  }, []);

  return (
    <div className="page-content">
      <h2>メンバーカード</h2>
      <p>現在のポイント：{points} pt</p>
      <button onClick={loadPoints}>最新の状態に更新</button>
    </div>
  );
}

export default MembershipCard;
