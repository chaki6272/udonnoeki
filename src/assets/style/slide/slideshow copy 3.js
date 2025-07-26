
// slideshow.js

// ▼ 設定エリア ▼
const imageFolder = 'ss';
const csvFile = `${imageFolder}/ss.csv`;
const slideDelay = 3000;

let currentIndex = 0;
let imageData = [];
let slideInterval;
let slideWidth = 0;

async function fetchCSV() {
  const res = await fetch(csvFile);
  const text = await res.text();
  return text.trim().split('\n').slice(1).map(line => {
    const [no, ss_name] = line.split(',');
    return { no, ss_name };
  });
}

function createSlideShow(images) {
  const track = document.getElementById('slide-track');
  track.innerHTML = '';

  // クローン付きで画像配置
  const loopImages = images.concat(images[0]); // 1枚目のクローンだけ追加

  loopImages.forEach(data => {
    const img = document.createElement('img');
    img.src = `${imageFolder}/${data.ss_name}`;
    img.classList.add('slide-image');
    track.appendChild(img);
  });

  slideWidth = track.clientWidth / loopImages.length;
}

function moveToSlide(index) {
  const track = document.getElementById('slide-track');
  const totalImages = imageData.length + 1; // クローン含む

  track.style.transition = 'transform 0.6s ease-in-out';
  track.style.transform = `translateX(-${index * 100}%)`;

  if (index === imageData.length) {
    setTimeout(() => {
      track.style.transition = 'none';
      track.style.transform = 'translateX(0)';
      currentIndex = 0;
    }, 700);
  }
}

function startSlideShow() {
  slideInterval = setInterval(() => {
    currentIndex++;
    moveToSlide(currentIndex);
  }, slideDelay);
}

function stopSlideShow() {
  clearInterval(slideInterval);
}

function initSlideShow() {
  fetchCSV().then(images => {
    imageData = images;
    createSlideShow(imageData);
    startSlideShow();

    const container = document.getElementById('slideshow');
    container.addEventListener('mouseenter', stopSlideShow);
    container.addEventListener('mouseleave', startSlideShow);

    document.querySelector('.nav.prev').onclick = () => {
      stopSlideShow();
      currentIndex = (currentIndex - 1 + imageData.length) % imageData.length;
      moveToSlide(currentIndex);
    };

    document.querySelector('.nav.next').onclick = () => {
      stopSlideShow();
      currentIndex = (currentIndex + 1) % imageData.length;
      moveToSlide(currentIndex);
    };

    window.addEventListener('resize', () => {
      // リサイズで再取得
      createSlideShow(imageData);
      moveToSlide(currentIndex);
    });
  });
}

document.addEventListener('DOMContentLoaded', initSlideShow);
