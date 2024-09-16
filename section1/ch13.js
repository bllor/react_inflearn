/*
콜백함수 : 자신이 아닌 다른 함수에, 인수로써 전달된 함수

*/

function a(value) {
  //   console.log(value);
  value();
}

function b() {
  console.log("i'm b");
}

//위의 형태를 콜백함수로 만듬
a(() => {
  console.log("i'm b");
});

// 2. 콜백함수의 활용

// function repeat(count) {
//   for (let idx = 1; idx <= count; i++) {
//     console.log(idx);
//   }
// }

// function repeatDouble(count) {
//   for (let idx = 1; idx <= count; i++) {
//     console.log(idx * 2);
//   }
// }
// repeat(5);
// repeatDouble(5);
// repeat과 repeatDouble의 형태가 유사하다.
// 유사한 함수를 계속 사용하는 것은 코드작성할 때 좋지 않으므로, 하나의 형태로 만들어준다.

function repeat(count, callback) {
  for (let i = 1; i <= count; i++) {
    callback(i);
  }
}

repeat(5, function (idx) {
  console.log(idx);
});

repeat(5, function (idx) {
  console.log(idx * 2);
});
