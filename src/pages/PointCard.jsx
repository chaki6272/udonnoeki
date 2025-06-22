import { useState, useEffect } from 'react';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

function MembershipCard() {
  const [points, setPoints] = useState(0);
  const [scanning, setScanning] = useState(false);
  const [scannedText, setScannedText] = useState('');

  const POINT_KEY = 'memberPoints'; // ✅ 統一
  const SCAN_DATE_KEY = 'lastScanDate';

  const loadPoints = () => {
    const savedPoints = parseInt(localStorage.getItem(POINT_KEY)) || 0;
    setPoints(savedPoints);
  };

  const hasScannedToday = () => {
    const lastScanDate = localStorage.getItem(SCAN_DATE_KEY);
    const today = new Date().toISOString().split('T')[0];
    return lastScanDate === today;
  };

  const updateLastScanDate = () => {
    const today = new Date().toISOString().split('T')[0];
    localStorage.setItem(SCAN_DATE_KEY, today);
  };

  const addPoint = () => {
    const newPoints = points + 1;
    setPoints(newPoints);
    localStorage.setItem(POINT_KEY, newPoints);
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
        if (result.content === 'point:add') {
          if (hasScannedToday()) {
            alert('今日はすでにポイントを加算しています。');
          } else {
            addPoint();
          }
        } else {
          alert('無効なQRコードです。');
        }
      }
    } catch (err) {
      console.error('スキャン失敗:', err);
      BarcodeScanner.showBackground();
      BarcodeScanner.stopScan();
      setScanning(false);
    }
  };

  useEffect(() => {
    loadPoints();
    return () => {
      BarcodeScanner.showBackground();
      BarcodeScanner.stopScan();
    };
  }, []);

  return (
    <div className="page-content">
      <h2>メンバーカード</h2>
      <p>現在のポイント：{points} pt</p>

      <button onClick={startScan} disabled={scanning} style={{ marginTop: '1em' }}>
        {scanning ? 'スキャン中...' : 'QRコードをスキャン'}
      </button>

      {scannedText && <p>読み取った内容: {scannedText}</p>}

      <button onClick={loadPoints} style={{ marginTop: '1em' }}>
        最新の状態に更新
      </button>
    </div>
  );
}

export default MembershipCard;
