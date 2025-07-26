// CSV 読み込み：画像名とリンクを取得
async function fetchCSV() {
  const res = await fetch(csvFile);
  const text = await res.text();

  return text.trim().split('\n').slice(1).map(line => {
    const [no, ss_name, ss_link] = line.split(',');
    return {
      no: no.trim(),
      ss_name: ss_name.trim(),
      ss_link: ss_link ? ss_link.trim() : null  // null または空文字対応
    };
  });
}

// スライドショー用のHTMLを生成（リンクあり対応）
function createSlideShow(images) {
  const track = document.getElementById('slide-track');
  track.innerHTML = '';

  const loopImages = images.concat(images[0]); // 最初の画像を最後に追加（ループ用）

  loopImages.forEach(data => {
    const img = document.createElement('img');
    img.src = `${imageFolder}/${data.ss_name}`;
    img.classList.add('slide-image');

    if (data.ss_link) {
      const link = document.createElement('a');
      link.href = data.ss_link;
      link.target = '_blank'; // 新しいタブで開く
      link.appendChild(img);
      track.appendChild(link);
    } else {
      track.appendChild(img);
    }
  });
}


/*
csvFile
no,ss_name,ss_link
1,a.jpg,https://example.com/a
2,b.png,https://example.com/b
3,c.jpg,
*/