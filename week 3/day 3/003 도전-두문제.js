let arr5 = [1, 2, 3, 1, 2, 3, 1, 2, 3];
let count = 0;
for(let i = 0; i < arr5.length; i++) {
    if(arr5[i] === 1) {
        count ++;
    }
}
console.log(count)

//
let flag = 0
let arr6 = ['A', 'E', 'W', 'Q', 'A'];

for (let i = 0; i < arr6.length; i++) {
    if (arr6[i] === 'A') {
        flag = 1
        break;
    }
}
if (flag == 0) {
    console.log('X');
} else {
    console.log('O');
}