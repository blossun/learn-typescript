let arr = [
  { gender: 'male', name: 'john' },
  { gender: 'female', name: 'sarah' },
  { gender: 'mail', name: 'bone' },
];

let filtered = arr.filter(function (item) {
  if (item.gender === 'female') {
    return item;
  }
});

console.log(filtered);
