const text = 'skdjfskdjfskjd';
const arr = text.split('');
const narr = Object.entries(arr);
const arr2 = Object.fromEntries(narr);
const arr3 = new Map(Object.entries(arr2));
console.log(arr3);
