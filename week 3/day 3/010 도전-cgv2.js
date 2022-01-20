const list = document.querySelectorAll('.title')

for(let i = 0; i < list.length; i++){
    list[i].textContent = '*'.repeat(list[i].textContent.length);
}