const button1 = document.querySelector(".btn_add");
const button2 = document.querySelector(".btn_remove");
const button3 = document.querySelector(".btn_toggle");

const div = document.querySelector('div');

button1.addEventListener("click", function(e){
    div.classList.add("bg-yellow");
});

button2.addEventListener("click", function(e){
    div.classList.remove("bg-yellow");
});

button3.addEventListener("click", function(e){
    div.classList.toggle("bg-yellow");
});
