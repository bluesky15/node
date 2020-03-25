const x = {
    value: 9,
    text: 7,
    y: "hello"
}

type Vishal = number

interface Props {
name:string,
age:number
}

let xx = 7;
var yy = 6;

// class test {
//     int value = 6
// }

// test x = new test();
// x.value = 6
// y = x;
// y.value = 5;
//const y = {...x}
// const y = x;
// if(y===x){
//     console.log("y is same as x")
// }
//const {value,text}= x

//y.value = 5
const { y } = { ...x }

// console.log(x.value)
console.log(y)