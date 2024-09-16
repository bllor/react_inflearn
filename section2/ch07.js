/*
배열 메서드 : 요소 조작
1.push()
배열의 맨 뒤에 새로운 요소를 추가하는 메서드
2.pop()
배열의 맨 뒤에 있는 요소를 제거하고, 반환

3.shift()
배열의 맨 앞의 요소를 제거하고 반환

4.unshift()
배열의 맨 앞에 요소를 추가하고 반환, 배열의 길이도 반환 

5.slice()
배열의 특정 범위를 잘라서 새로운 배열로 반환
slice(시작인덱스번호,끝인덱스번호+1)
+1를 하는 이유는 배열의 끝 자리까지 출력하기 위해 사용
slice(-1) 뒤에서부터 1개를 자르는 것
let arr = [1,2,3]
arr.slice(-1) --> 3이 나옴

6.concat()
두 개의 배열을 서로 이어 붙여서 새로운 배열로 반환
let arr6 = [1,2]
let arr7 = [3,4]

let arr8 = arr6.concat(arr7);
arr8--> [1,2,3,4]


----------------
배열 순회와 탐색

1.foreach
모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행
arr.foreach(function (item, idx){
    console.log(idx, item)
    idx에는 인덱스 번호, item에는 배열[idx]의 값이 출력된다.
})

2. includes
배열에 특정 요소가 있는지 확인하는 방법
있으면 true, 없으면 false를 반환

3.indexOf
특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
존재하지 않을 경우 -1을 출력

4.findIndex
모든 요소를 순회하면서, 콜백함수를 만족하는 첫번째 인덱스 값을 리턴
객체 등을 찾을 때 사용

5.find
모든 요소를 순환하면서 콜백함수를 만족하는 요소를 찾는데 인덱스를 반환하는 것이 아닌 인덱스를 그대로 반환



-----------------------
배열의 변형

1.filter
기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 =[
    {name:"최동일",hobby:"running"},
    {name:"김희지",hobby:"tennis"},
    {name:"최비아",hobby:"running"},
]

2.map
배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서
새로운 배열로 반환

3.sort
배열을 사전순으로 정렬하는 매서드
배열의 값이 숫자라면 조건문으로 정렬해주어야 한다.

let arr3 = [10,3,5];

arr3.sort((a,b)=>{
  if(a>b){
    //b가 a보다 작을 경우 앞으로 와라
    return 1
  }else if(a<b){
    //a가 b보다 작을 경우 b앞에 위치
    return -1
  }else{
    // 두 개의 위치를 바꾸지 않음
    return 0
  }
}
})


4.toSorted
원본배열은 놔두고 정렬된 새로운 배열을 반환

5.join
배열의 모든 요소를 하나의 문자열로 반환
join()를 할 경우 기본 구분자로 ,로 배열이 구분되며,
join(-)를 할경우 -로 구분된다.



*/

let arr1 = [
  { name: "최동일", hobby: "running" },
  { name: "김희지", hobby: "tennis" },
  { name: "최비아", hobby: "running" },
];

const runningPeople = arr1.filter((item) => item.hobby === "running");

// console.log(runningPeople);

let arr2 = [1, 2, 3];
const x2 = arr2.map((item, idx) => {
  return item * 2;
});
// console.log(x2);

let names = arr1.map((item) => {
  return item.name;
});
// console.log(names);
