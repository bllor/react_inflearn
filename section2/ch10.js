// async await
// async : 함수를 비동기 함수로 만들어줌 함수를 promise로 변경해줌
// await : async 함수 내부에서만 사용이 가능한 키워드로
// 비동기 함수가 다 처리되기를 기다리는 역할

async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "동일", location: "서울" });
    }, 3000);
  });
}

// console.log(getData());

async function printData() {
  const data = await getData();
  console.log("data", data);
}
printData();
