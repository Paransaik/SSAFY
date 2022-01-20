// 객체
// key와 value로 이루어진 프로피티 묶음.
// python dictionary와 유사.

// 객체가 없다면 외부에서 데이터를 배열로 가져와야 한다.
// 아래와 같은 순서대로 오게 된다.
// 어디에 뭐가 오는지 서로 약속이 돼 있어야 하며 각각의 배열 index를 기억해야 한다.
const maydata = ['이온유', '개발자', ['고기', '마라탕', '삼겹살']];
const data = {name: '이온유', job: '개발자'}

data.name
data['name']
data.job
// 데이터가 존재하지 않더라도 에러를 내지 않을 때 사용
data['job']

// 기본형: 문자, 숫자
// 객체형: 함수, 배열

// 하나의 웹페이지는 거대한 객체의 묶음

// DOM: Document Object Model 문서 객체 모델로써 웹브라우저를 읽어서 DOM Tree를 만듦
// document 객체는 웹 페이지 그 자체를 의미한다.
// 웹페이지에 존재하는 HTML 요소에 접근하고자 할 때는 반드시 document 객체를 거친다.
