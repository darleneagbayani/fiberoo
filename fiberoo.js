function fib() {
let list = [];
let first = 0;
let second = 1;
let next = 0;


for(i = 0; i < 100; i++) {
  let temp = next;
  next = first + second;
  second = first;
  first = next;
  list.push(next);
}
return list;
}

console.log(fib());

function numsToStrings(numArr) {
  return _.map(numArr, function(item) {return `${item}`});
}

console.log(numsToStrings(fib()));

function numEvenNums(nums) {

  return _.filter(nums, function(num){ return num % 2 == 0; }).length;
}

console.log(numEvenNums(fib()));