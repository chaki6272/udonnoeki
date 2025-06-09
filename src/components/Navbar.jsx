import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = {
    padding: '10px',
    backgroundColor: '#f2f2f2',
    display: 'flex',
    justifyContent: 'space-around',
    fontSize: '18px',
  };

  return (
    <nav className="navbar">
      <Link to="/">ホーム</Link>
      <Link to="/menu">メニュー</Link>
      <Link to="/shop">店舗情報</Link>
      <Link to="/card">会員証</Link>
      <Link to="/access">アクセス</Link>
    </nav>
  );
}

export default Navbar;
