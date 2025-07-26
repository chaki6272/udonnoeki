
// slideshow.js

// ▼ 設定エリア ▼
const imageFolder = 'ss';// フォルダ名
const csvFile = `${imageFolder}/ss.csv`;// 管理ファイル名
const slideDelay = 3000;// 画像切り替え間隔（ミリ秒）

let currentIndex = 0;
let slideInterval;
let imageData = [];

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

  images.forEach(data => {
    const a = document.createElement('a');
    a.href = '#'; // 任意リンク
    const img = document.createElement('img');
    img.src = `${imageFolder}/${data.ss_name}`;
    a.appendChild(img);
    track.appendChild(a);
  });

  track.style.width = `${images.length * 100}%`;
  track.style.display = 'flex';
}

function moveToSlide(index) {
  const track = document.getElementById('slide-track');
  track.style.transform = `translateX(-${index * 100}%)`;
}

function startSlideShow() {
  slideInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % imageData.length;
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
  });
}

document.addEventListener("DOMContentLoaded", initSlideShow);
