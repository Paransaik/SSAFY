const toggleButton = document.querySelector(".toggle_button");
const headerNav = document.querySelector(".header_nav");
const body = document.querySelector("body");
const searchInput = document.querySelector(".search_input");
const bookmarkTexts = document.querySelectorAll(".bookmark_text");

console.log(bookmarkTexts);
toggleButton.addEventListener("click", function(){
    toggleButton.innerHTML = "Dark Mode";

    toggleButton.classList.toggle("toggle_button_dark_mode");
    headerNav.classList.toggle("text_dark_mode");
    body.classList.toggle("body_background_dark_mode");

    for(let i = 0; i < bookmarkTexts.length; i++) {
        bookmarkTexts[i].classList.toggle("text_dark_mode");
    }
    
    if(toggleButton.classList.contains("toggle_button_dark_mode")){
        toggleButton.innerHTML = "Nomal Mode";
    }
});

searchInput.addEventListener("keyup", function(event){
    if(event.key === 'Enter'){
        if(event.target.value === ""){
            alert("검색어를 입력하지 않으셨습니다.");
            return;
        }
        // alert(event.target.value + " 검색하셨습니다.");
        alert(`${event.target.value}를 검색하셨습니다.`);
        // 스트링 인터폴레이션 문법
        // 크로스 브라우징
        // 웹 페이지 제작 시에 모든 브라우저에서 깨지지 않고 의도한 대로 올바르게(호환성) 나오게 하는 작업을 말한다.

        window.open(`https://www.google.com/search?q=${event.target.value}`)
    }
})