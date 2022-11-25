const a =[1,2,3,4,5,6];
const square = (x) => x*x;
const b = a.map((e) => square(e));

console.log(b);
const isOdd = (x) => x%2 ==1;
const cx = a.filter((e)=> isOdd(e));

console.log(cx)