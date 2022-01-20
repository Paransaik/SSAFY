const body = document.querySelector('body');

body.addEventListener('click', clickItem);

function clickItem(e){
    if(e.target.nodeName === 'DIV'){
        console.log('보상');
    }

}



// 이벤트 버블링이란, 발생한 타겟부터 바디까지 올라간다.
// 이벤트 갭처링이란, 바디부터 발생한 타겟을 향해 내려간다.
// 바디부터, 발생한 타겟(클릭 누른 곳)까지 내려간다.