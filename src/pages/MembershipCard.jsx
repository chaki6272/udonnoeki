import { useState, useEffect } from 'react';

function MemberCard() {
  const [points, setPoints] = useState(0);

  // 初回マウント時にlocalStorageから読み込み
  useEffect(() => {
    const savedPoints = localStorage.getItem('memberPoints');
    if (savedPoints) {
      setPoints(Number(savedPoints));
    }
  }, []);

  // ポイント加算
  const addPoints = () => {
    const newPoints = points + 10;
    setPoints(newPoints);
    localStorage.setItem('memberPoints', newPoints);
  };

  // ポイント減算（0未満にならないように）
  const subtractPoints = () => {
    const newPoints = Math.max(points - 10, 0);
    setPoints(newPoints);
    localStorage.setItem('memberPoints', newPoints);
  };

  return (
    <div className="page-content">
      <h2>メンバーカード</h2>
      <p>現在のポイント：{points} pt</p>
      <button onClick={addPoints}>+10 ポイント</button>
      <button onClick={subtractPoints}>-10 ポイント</button>
    </div>
  );
}

export default MemberCard;
