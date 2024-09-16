/*
날짜를 생성하는 방법

let date1 = new Date();
console.log(date1)

특정날짜를 할 경우
let date2=  new Date("2024-01-01")

2.타임 스탬프
특정시간이 1970.01.01분 00시 00분 00초로부터 몇 ms가 지났는지를 의미하는 숫자값
getTime()메서드를 사용

3.시간요소 추출
getFullYear()
getMonth()
getDate()

getHours()
getMinutes()
getSecondes()

getMonth()출력 시 1월은 0으로 나오기 때문에 +1을 해주어야 한다.

4.시간 수정하기
setYear()
setMonth()
와 같이 set을 이용하여 수정할 수 있다.

5.시간을 여러 포멧으로 출력
toDateString() - 현재날짜만 출력
toLocaleString() - 현지화된 형태로 출력

*/
