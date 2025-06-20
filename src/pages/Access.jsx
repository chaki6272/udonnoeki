// 例：App.jsx や BarcodeScannerComponent.jsx など
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';


function Access() {
  return (
     <div className="page-content">
      <h1>アクセス</h1>

      <h2>店舗所在地</h2>
      <p>山梨県南都留郡西桂町小沼1112-1</p>

      <h2>電話番号</h2>
      <p>0555-29-2040</p>

      <h2>アクセス方法</h2>
      <ul>
        <li>中央自動車道 富士吉田西桂スマートICより車で約1分</li>
        <li>富士急行線 三つ峠駅より徒歩約12分</li>
        <li>国道139号線沿い、「うどんの駅」看板が目印</li>
      </ul>

      <h2>地図</h2>
      <div style={{ maxWidth: "100%", height: "400px", marginBottom: "1rem" }}>
        <iframe
          title="地図"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3247.0977392657446!2d138.84918561275148!3d35.526582272523434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6019678f07f54e9d%3A0x2a14b0a75772534d!2z44GG44Gp44KT44Gu6aeFIOilv-ahguW6lw!5e0!3m2!1sja!2sjp!4v1750311079112!5m2!1sja!2sjp"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Access;
