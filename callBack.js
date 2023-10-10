const myFunc = (para1, para2) => {
  console.log(para1(10, 2));
  console.log(para1(10, 2) + para2);
};

myFunc(function (x, y) {
  return x + y;
}, 5);
