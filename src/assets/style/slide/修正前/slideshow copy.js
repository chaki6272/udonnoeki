// slideshow.js

// ▼ 設定エリア（必要に応じて変更）▼
const imageFolder = 'ss'; // フォルダ名
const slideDelay = 3000; // 画像切り替え間隔（ミリ秒）
const slideDirection = 'horizontal'; // 'horizontal' or 'vertical'

// 任意の画像とリンク設定（拡張子も含める）
const imageList = [
  { filename: 'ss_kake.jpg', link: 'https://example.com/page1' },
  { filename: 'ss_kimuti-nikujiru.jpg', link: 'https://example.com/page2' },
  { filename: 'ss_nibosi-noukou.jpg', link: 'https://example.com/page3' },
  { filename: 'ss_niku-kinpira.jpg', link: 'https://example.com/page3' },
  { filename: 'ss_nikujiru-aka.jpg', link: 'https://example.com/page3' },
  { filename: 'ss_nikujiru.jpg', link: 'https://example.com/page3' },

];

let currentIndex = 0;

function setupSlideshow() {
  const container = document.querySelector('.slideshow-slide');
  if (slideDirection === 'vertical') {
    container.classList.add('vertical');
  }

  imageList.forEach(img => {
    const a = document.createElement('a');
    a.href = img.link;
    const image = document.createElement('img');
    image.src = `${imageFolder}/${img.filename}`;
    a.appendChild(image);
    container.appendChild(a);
  });

  setInterval(() => {
    currentIndex = (currentIndex + 1) % imageList.length;
    const offset = -100 * currentIndex;
    if (slideDirection === 'horizontal') {
      container.style.transform = `translateX(${offset}%)`;
    } else {
      container.style.transform = `translateY(${offset}%)`;
    }
  }, slideDelay);
}

document.addEventListener('DOMContentLoaded', setupSlideshow);
