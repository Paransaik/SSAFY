console.log('====================');
const a = document.querySelector('#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(1) > div.box-contents > a > strong');
console.log(a.textContent);
const b = document.querySelector('#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(1) > div.box-contents > div > strong > span');
console.log(b.textContent);
const c = document.querySelector('#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(1) > div.box-contents > span.txt-info > strong');;
console.log(c.textContent.split('\n')[1].trim());

const d = document.querySelector('#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(2) > div.box-contents > a > strong');
d.textContent = '삼겹살과 그대라면'
const e = document.querySelector('#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(2) > div.box-contents > div > strong > span');

const f = document.querySelector('#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(2) > div.box-contents > span.txt-info > strong');
f.textContent = '1985.07.07. 개봉' 

// 포스터
let g = document.querySelector('#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(1) > div.box-image > a > span > img');
// text
let h = document.querySelector('#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(1) > div.box-contents');

// 포스터
let i = document.querySelector('#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(3) > div.box-image > a > span > img');
// text
let j = document.querySelector('#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(3) > div.box-contents');

let temp_image = g.src;
let temp_text = h.innerHTML;
g.src = i.src;
h.innerHTML = j.innerHTML;
i.src = temp_image;
j.innerHTML = temp_text;
console.log(g.src);

const ee = document.querySelector('#contents > div.wrap-movie-chart > div.sect-movie-chart > ol:nth-child(2) > li:nth-child(1) > div.box-contents > div > strong > span')
e.textContent = ee.textContent.substr(0, 4)-5+'%';
console.log('====================');

