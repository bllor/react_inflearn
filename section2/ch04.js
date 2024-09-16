/*
spread 연산자 : 객체나 배열에 저장된 여러 개의 값을 개별로 흩뿌려주는 역할

*/

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];
// 4,1,2,3,5,6으로 만들고 싶으면 spread연산자(...arr1)를 사용
console.log(arr2);

//2.rest 매개변수
// 여러개의 변수를 배열로 한 번에 받을 수 있게 하는 방법

function funcB(one, ...rest) {
  // 첫번째변수를 one으로 저장하려면 ...앞에 변수명을 작성하면된다.
  // ...rest뒤에는 아무것도 올 수 없다.
  console.log(rest);
}

funcB(...arr2);
