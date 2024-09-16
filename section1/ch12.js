/*
함수를 변수로 담아서 사용할 수 있다.
*/

// 아래와 같이 사용하는 방법은 함수 표현식
// 호이스트가 되지 않는다.
let varB = function funcB() {
  console.log("varB");
};

//화살표 함수
let varC = (value) => {
  console.log("varC");
  console.log("value", value);
};

varC("vv");
