//1. a javascript function that takes in 2 intergers and display the larger
const displayLarger = (x, y)=> {
  if(y > x) {
   return y;
    } else if(x === y) {
      return 0;
    } else {
      return x;
    }
}
// let  = 10;
// let second = 50;
console.log(displayLarger(10, 50));