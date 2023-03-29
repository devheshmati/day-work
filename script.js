const text = 'ksdjkfsjkjfskjd';
const arr = text.split('');
const uarr = new Map(Array.from(new Set(arr)).map((x,i) => [i, x]));
console.log(uarr);
