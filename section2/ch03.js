/*
구조분해할당 : 배열의 값을 분해하여 각각의 변수에 할당하는 방법

let arr = [1,2,3]
let [one,two,three] = arr
one에는 1, two에는 2가 할당된다.
배열의 값이 변수보다 많을 경우 undefined로 출력된다.


객체의 구조 분해할당
let person = {
    name: "최동일",
    age: 29
}
let {name,age} = person
이렇게 하면 객체의 값을 할당 받을 수 있다.
age가 아닌 myAge로 변경하고 싶으면
let {name , age:myAge} = person으로 사용


객체를 함수에 할당
const func = ({name, age} =>{
    console.log(name, age)
})

func(person)
함수에 객체가 전달이되며, 객체를 넘길 때만 가능하다

*/
let person = {
  name: "최동일",
  age: 29,
};

let { name, age: myAge } = person;
console.log(myAge);
