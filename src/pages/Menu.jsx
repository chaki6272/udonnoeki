// src/pages/Menu.jsx
import kakeImg from '../assets/img/L/kake_L.jpg';
// 他の画像も順次 import していく（例：import bukkakeImg from '../assets/img/L/bukkake_L.jpg'; など）

function Menu() {
  return (
    <div className="menu-container" style={{ maxWidth: '400px', margin: '0 auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <tbody>

          {/* 🍜 メニュー①：かけうどん */}
          <tr>
            <td style={{ width: '120px' }}>
              <img src={kakeImg} alt="かけうどん" style={{ width: '100%' }} />
            </td>
            <td style={{ paddingLeft: '10px' }}>
              <div style={{ fontWeight: 'bold', fontSize: '16px' }}>かけうどん</div>
              <div>
                <span style={{ backgroundColor: '#e0ffe0', padding: '2px 4px' }}>みそ味</span> または
                <span style={{ backgroundColor: '#e0ffe0', padding: '2px 4px' }}>しょうゆ味</span> をお選び下さい。
              </div>
              <div>
                並盛：<span className="price">450</span>円<br />
                <small>※大盛は130円増しとなります。</small>
              </div>
            </td>
          </tr>
          <tr><td colSpan="2"><hr /></td></tr>

          {/* ⬇⬇⬇ ここから下に、別のメニュー項目を追加していく ⬇⬇⬇ */}

          {/* 🍜 メニュー②：ぶっかけうどん（例） */}
          {/*
          <tr>
            <td style={{ width: '120px' }}>
              <img src={bukkakeImg} alt="ぶっかけうどん" style={{ width: '100%' }} />
            </td>
            <td style={{ paddingLeft: '10px' }}>
              <div style={{ fontWeight: 'bold', fontSize: '16px' }}>ぶっかけうどん</div>
              <div>
                温／冷 をお選びいただけます。
              </div>
              <div>
                並盛：<span className="price">480</span>円<br />
                <small>※大盛は130円増しとなります。</small>
              </div>
            </td>
          </tr>
          <tr><td colSpan="2"><hr /></td></tr>
          */}

          {/* ⬆⬆⬆ 上記のブロックをコピーして、メニュー数に応じて増やしてください ⬆⬆⬆ */}

        </tbody>
      </table>
    </div>
  );
}

export default Menu;
