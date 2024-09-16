/*
1.truthy
7가지의 falsy한 값을 제외한 모든 값

2.falsy
조건문에 falsy한 값 조건문에서 거짓으로 평가됨
undefined
null
0
-0
NaN
""
0n

if(person){}과 같은 조건문을 사용할 때 null, undefiend와 같은 값이 들어올 수 있는데
if(person===undefined || person===null)과 같이 모든 조건들을 나열할 수 있지만 비효율적이므로
if(!person)과 같이 거짓으로 판정되지 않으면과 같은 조건을 사용할 수 있다.

*/
