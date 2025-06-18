// src/components/QrScanner.jsx
import { useState, useEffect } from 'react';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

function QrScanner() {
  const [scannedText, setScannedText] = useState('');
  const [scanning, setScanning] = useState(false);
  const [points, setPoints] = useState(0);

  // ✅ 初期化 & アンマウント時のクリーンアップ
  useEffect(() => {
    const savedPoints = parseInt(localStorage.getItem('points')) || 0;
    setPoints(savedPoints);

    return () => {
      // 🔴 ページ移動などでこのコンポーネントが消える時に実行される
      BarcodeScanner.showBackground();
      BarcodeScanner.stopScan();
    };
  }, []);

  const hasScannedToday = () => {
    const lastScanDate = localStorage.getItem('lastScanDate');
    const today = new Date().toISOString().split('T')[0];
    return lastScanDate === today;
  };

  const updateLastScanDate = () => {
    const today = new Date().toISOString().split('T')[0];
    localStorage.setItem('lastScanDate', today);
  };

  const addPoint = () => {
    const newPoints = points + 1;
    setPoints(newPoints);
    localStorage.setItem('points', newPoints);
    updateLastScanDate();
    alert('1ポイント加算されました！');
  };

  const startScan = async () => {
    try {
      await BarcodeScanner.checkPermission({ force: true });
      BarcodeScanner.hideBackground();
      setScanning(true);

      const result = await BarcodeScanner.startScan();

      BarcodeScanner.showBackground();
      BarcodeScanner.stopScan();
      setScanning(false);

      if (result.hasContent) {
        setScannedText(result.content);
        alert(`読み取り成功：${result.content}`);

        if (result.content === 'point:add') {
          if (hasScannedToday()) {
            alert('今日はすでにポイントを加算しています。');
          } else {
            addPoint();
          }
        } else {
          alert('有効なQRコードではありません。');
        }
      }

    } catch (err) {
      console.error('スキャン失敗:', err);
      BarcodeScanner.showBackground();
      BarcodeScanner.stopScan();
      setScanning(false);
    }
  };

  return (
    <div className="page-content">
      <h2>QRコード読み取り</h2>
      <button onClick={startScan} disabled={scanning}>
        {scanning ? 'スキャン中...' : 'QRコードをスキャン'}
      </button>
      {scannedText && <p>読み取った内容: {scannedText}</p>}
      <p>現在のポイント: {points}</p>
    </div>
  );
}

export default QrScanner;
