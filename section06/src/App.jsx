import { useState } from 'react'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
