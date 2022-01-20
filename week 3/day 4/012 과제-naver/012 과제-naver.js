
const headerNav = document.querySelector(".header_nav");

const searchInput = document.querySelector(".search_input");
const bookmarkTexts = document.querySelectorAll(".bookmark_text");

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