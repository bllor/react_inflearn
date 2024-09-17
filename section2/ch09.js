/*
동기, 비동기 처리
동기 : 여러개의 작업을 순서대로 실행하는 것
자바스크립트는 동기적으로 실행이 된다.
동기적처리의 단점은 하나의 작업의 처리순서가 오래걸리면 전체작업 속도가 오래걸리므로 성능이 악화된다.

setTimeout이 비동기적으로 처리하는 함수 중 하나이다.

자바스크립트에서 비동기적 처리는 web APIs에서 처리하므로
스레드가 하나밖에 없더라도 비동기적 처리가 된다.

--------------------
promise
:비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트 내장함수
상태: 대기(작업이 완료되지 않는 상태), 성공, 실패
대기 -> 성공 : resolve
대기 -> 실패 : reject

*/

// function add(a, b, callback) {
//   setTimeout(() => {
//     const sum = a + b;
//     callback(sum);
//   }, 3000);
// }
// add(1, 2, (value) => {
//   console.log(value);
// });

// function orderFood(callback) {
//   setTimeout(() => {
//     const food = "떡볶이";
//     callback(food);
//   }, 3000);
// }

// function cooldownfood(food, callback) {
//   setTimeout(() => {
//     const cooldownedfood = `식은${food}`;
//     callback(cooldownedfood);
//   }, 2000);
// }

// orderFood((food) => {
//   console.log(food);
//   cooldownfood(food, (coolfood) => {
//     console.log(coolfood);
//   });
// });

// const promise = new Promise((resolve, reject) => {
//   //비동기 작업을 실행하는 함수를 executor라고 부른다.
//   setTimeout(() => {
//     console.log("안녕");
//     resolve(); //resolve에 아무런 값도 보내지 않으면 promiseResult에 undefiend로 나타난다.
//   }, 2000);
// });
// setTimeout(() => {
//   console.log(promise);
// }, 3000);

// promise 반환값 사용하기

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const num = 10;
    if (typeof num === "number") {
      resolve(num + 10);
    } else {
      reject("숫자가 아닙니다.");
    }
  }, 2000);
  //return promise를 하게 될 경우, promise를 받을 수 있으며,
  //promise를 받은 변수는 then().catch()등을 사용할 수 있다.
});

//then 메서드를 사용하면 promise의 결과값을 사용할 수 있다.
//then 메서드는 promise가 성공할 때만 값을 리턴하며
//실패한 값을 호출할 경우 promise.catch를 사용한다.
//then과 catch를 같이 사용할 수 잇는데, 이를 promise 체인이라고 한다.
// promise.then((value) => {
//   console.log("value", value);
// });

function add10(num) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("숫자가 아닙니다.");
      }
    }, 2000);
    //return promise를 하게 될 경우, promise를 받을 수 있으며,
    //promise를 받은 변수는 then().catch()등을 사용할 수 있다.
  });
  return promise;
}
const p = add10(0);
p.then((result) => {
  console.log(result);
  const newP = add10(result);
  return newP;
})
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
