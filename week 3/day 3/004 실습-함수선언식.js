// 함수 선언식
// 기존에 알고 있던 함수 선언 방식
function kfc(){
    console.log("ABC");
}
kfc();

// 함수 표현식
// 함수를 변수에 저장
// 호이스팅이 적용 안됨!
// go 가 호이스팅, 함수 대입!
const go = function(){
    console.log("GOGO");
}
go();

// const go = () => console.log("GOGO");
