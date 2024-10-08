/*
원시타입 : 값 자체로 변수에 저장되고 복사됨
ex ) string, number, boolean ...
객체타입 : 참조값을 통해 변수에 저장되고 복사됨
ex ) object, array, function ...

원시타입은 변수가 메모리에 변수에 할당된 값을 저장한다.
변수가 변경될 경우 메모리에서 값이 변경되지 않고, 다른 공간에
변경된 값이 저장된다.
객체타입은 객체값이 저장된 참조값을 부여
객체타입은 변수가 수정되면 메모리 공간에 저장된 값이 수정된다.

let obj1 = {name:"최동일"}
let obj2 = obj1
obj2.name = "김희지"
를 할경우 메모리가 최동일에서 김희지로 변경되어
obj1.name을 할 때 김희지가 출력된다.
다음과 같이 원본 객체의 데이터를 변경하지 않으려면
let obj2 = obj1 과 같은 방법(얕은 복사)말고
let obj2= {...obj1}과 같은 방법(깊은 복사)를 사용할 경우
obj2가 새로운 참조값을 가지게 되어 원본객체가 수정될 일이 없어서 안전하다.

객체일 경우 참조값을 비교하므로, 참조값이 다를 경우 false가 나온다.
프로퍼티를 기준으로 구분하려면 json.stringify()를 이용하여 비교하면된다.

*/
