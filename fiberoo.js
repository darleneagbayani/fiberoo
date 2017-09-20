function fib() {
let list = [];
let first = 0;
let second = 1;
let next = 0;


for(i = 0; i < 10; i++) {
  let temp = next;
  next = first + second;
  second = first;
  first = next;
  list.push(next);
}
return list;
}

console.log(fib());