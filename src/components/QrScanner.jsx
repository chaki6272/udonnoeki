// src/components/QrScanner.jsx
import { useState } from 'react';
import { BarcodeScanner } from '@capacitor/barcode-scanner';

function QrScanner() {
  const [scannedText, setScannedText] = useState('');
  const [scanning, setScanning] = useState(false);

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
    </div>
  );
}

export default QrScanner;
