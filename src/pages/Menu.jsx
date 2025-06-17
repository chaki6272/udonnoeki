// 例：App.jsx や BarcodeScannerComponent.jsx など
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';


function Menu() {
  const menuItems = [
    { name: 'かけうどん／つけうどん／冷しうどん', price: 450 },
    { name: '肉うどん／肉つけ／肉冷し', price: 630 },
    { name: 'きんぴら／きんぴらつけ／きんぴら冷し', price: 570 },
    { name: '山菜／山菜つけ／山菜冷し', price: 570 },
    { name: '牛すじカレーうどん', price: 660 },
    { name: '肉汁うどん', price: 760 },
    { name: '牛すじカレーライス', price: 600 },
    { name: '鴨汁うどん', price: 960 },
    { name: 'いなり寿司（2個）', price: 150 },
  ];

  return (
     <div className="page-content">
      <h1>メニュー</h1>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            {item.name}：{item.price}円
          </li>
        ))}
      </ul>
      <p>※ すべて並盛価格。大盛は＋130円となります。</p>
    </div>
  );
}

export default Menu;
