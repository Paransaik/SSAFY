const item1 = document.querySelector('.item1');
const item2 = document.querySelector('.item2');
const item3 = document.querySelector('.item3');

item1.addEventListener('click', clickItem1);
item2.addEventListener('click', clickItem2);
item3.addEventListener('click', clickItem3);

function clickItem1(e){
    console.log(1);
}

function clickItem2(e){
    console.log(2);
}

function clickItem3(e){
    // e.stopPropagation();
    // 버블링을 멈추게 됨
    console.log(3);
}


// 이벤트 버블링이란, 발생한 타겟부터 바디까지 올라간다.
// 이벤트 갭처링이란, 바디부터 발생한 타겟을 향해 내려간다.
// 바디부터, 발생한 타겟(클릭 누른 곳)까지 내려간다.