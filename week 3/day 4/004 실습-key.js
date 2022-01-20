const input = document.querySelector('input');
const div = document.querySelector('div');

input.addEventListener('keydown', gogo);
function gogo(e){
    div.textContent = e.code;
}
