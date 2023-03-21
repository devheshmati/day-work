const text = 'ABCDEFGHIJKLMN';
const arr = text.split('');

function shuffle(arr) { 
  for(let i = arr.length - 1; i > 0; i--) {
    let rand = Math.floor(Math.random() * i);
    let randItem = arr[rand];
    arr[rand] = arr[i];
    arr[i] = randItem;
  }
  return arr;
}

console.log(shuffle(arr));
