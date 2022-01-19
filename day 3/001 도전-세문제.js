let a = prompt();
let b = prompt();
for(let i = a; i <= b; i++){
    console.log(i);
}

let c = prompt();
let sum = 0;
for(let i = 1; i < 31; i++){
    sum += i;
}
if(c === 'BBQ') {
    console.log(sum);
} else if (c == 'KFC') {
    for(let i = 0; i < 31; i++){
        i++
        console.log(i);
    }
} else {
    console.log("MOMS");
}

let d = prompt();
let e = prompt();
let f = prompt();
if (d >= e) {
    if (d >= f) {
        console.log(d);
    } else {
        console.log(f)
    }
} else if (e >= f){
    console.log(e);
} else {
    console.log(f);
}