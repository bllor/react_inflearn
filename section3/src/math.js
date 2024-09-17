function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

// export default function  multify(){
// 처럼 export default로 모듈을 내보낼 경우, 해당 모듈의 기본값으로 내보내지게 되는데
// 이럴 경우 import {function} from 'modulefile'이 아닌
// import function from 'modulefile'처럼 사용한다.
// 중괄호 없이 불러와야하며, 이름은 마음대로 변경할 수 있다.
// }

// module.exports = {
//   add: add,
//   sub: sub,
// };
export { add, sub };
