const div = document.querySelector("div");
div.classList.add("test");
div.classList.remove("test");
div.classList.toggle("test");

const contain = div.classList.contains("test");
// 클래스의 존재 여부를 T/F로 반환
console.log(contain);

div.classList.replace("test", "FKC");
// 클래스 이름을 바꾼다.