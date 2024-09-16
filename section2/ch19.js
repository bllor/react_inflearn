/*
단락 평가 : and 연산자, or 연산자에 사용되는 것으로
논리연산자의 결과를 확정지을 수 있으면 다른 변수에 접근하지 않는 것

*/

function returnFalse() {
  console.log("call false");
  return false;
}

function returnTrue() {
  console.log("call true");
  return true;
}
console.log(returnFalse() && returnTrue());

//단락평가는 falsy한 값을 거를 때 사용할 수 있다.
//단락평가에서 (falsy || truty)이면 true값이 반환
