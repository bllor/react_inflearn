/*
스코프 : 범위, 변수나 함수에 접근하거나 호출할 수 있는 범위
전역 스코프 : 전체 영역에서 접근이 가능한 변수
지역 스코프 : 특정 영역에서만 접근이 가능한 변수
*/

let a = 1; // 전역 변수

function funcA() {
  let b = "c"; // 지역 변수
}
//지역변수는 {}블록 내에 선언된 것이므로 외부에서 사용할 수 없다.
