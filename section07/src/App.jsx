import { useState, useEffect } from 'react'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import './App.css'

function App() {
  const [count, setCount] = useState(0)



  useEffect(()=>{
    console.log(`count : ${count}`)
  },[count]);
  //의존성배열
  //deps라고 한다
  //useEffect(()=>{},[var])
  //useEffect의 함수는 var의 값이 변경이 되면 실행된다.
  //onClickButton내에 console을 찍으면 변경되기 이전의 값이 찍히는데
  //setCount가 비동기로 처리되기 때문
  //만약 변경된 값을 처리해야한다면 useEffect를 사용해야함
  /*
  1.마운트 
  마운트 될 때만 실행 
  useEffect(()=>{
    console.log("mount")
  },[])
  2.업데이트
  컴포넌트가 마운트 되거나 업데이트 될 때만 실행됨
  const isMount = useRef(false);

  useEffect(()=>{
    if(isMount.current){
      isMount.current = true;
      return;
    }
    console.log("update")
  })

  3.언마운트
  useEffect(()=>{
    //useEffect가 끝난 뒤 실행되는 함수를 클린업, 정리함수라고 한다.

    return ()=>{
      console.log("UnMounted")
    }
  },[])
  */
  const onClickButton = (value)=>{
    setCount(count+value)
  }

  return (
    <div className = "App">
    <h1>Simple Counter</h1>
    <section>
    <Viewer  count = {count}/>
    </section>
    <section>
    <Controller onClickButton={onClickButton}/>
    </section>
    </div>
  )
}

export default App
/*
상태값은 App()컴포넌트에 만들어야함
왜냐하면 자식컴포넌트인 뷰어와 컨트롤러는 서로 props의 공유가 되지 않기 때문

*/
