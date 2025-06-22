import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = {
    padding: '10px',
    backgroundColor: '#f2f2f2',
  };

  const ulStyle = {
    listStyle: 'none',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    margin: 0,
    padding: 0,
    fontSize: '12px',
  };

  const liStyle = {
    margin: '5px',
  };

  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}><Link to="/">ホーム</Link></li>
        <li style={liStyle}><Link to="/shop">店舗情報</Link></li>
        <li style={liStyle}><Link to="/pointcard">ポイントカード</Link></li>
        <li style={liStyle}><Link to="/menu">メニュー</Link></li>
        <li style={liStyle}><Link to="/access">アクセス</Link></li>
        <li style={liStyle}><Link to="/scan">QRスキャン</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
