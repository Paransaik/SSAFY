const input = document.querySelector('input');
const div = document.querySelector('div');
input.addEventListener('change', gogo);
function gogo(e){
    div.textContent = e.target.value;
    // 제일 많이 쓰이는 타겟 속성의 종류
}

const select = document.querySelector('select');
select.addEventListener('change', go);
function go(e){
    div.textContent = e.target.value;
}