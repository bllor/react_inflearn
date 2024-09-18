import './App.css'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
import { useState, useRef,useReducer } from 'react'


const mockData=[
  {
    id:0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id:1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
  {
    id:2,
    isDone: false,
    content: "노래부르기",
    date: new Date().getTime(),
  }

]

function reducer(state, action){
  switch(action.type){
    case 'create': return [action.data, ...state]
    case 'update': 
    return state.map((item)=>item.id === action.targetId? {...item, isDone: !item.isDone}:item)
    case 'delete':
      return state.filter((item)=> item.id !==action.targetId)
    default :
    return state
    }

}

function App() {
  
  // const [todos, setTodos] = useState(mockData);

  const [todos, dispatch] = useReducer(reducer,mockData);
  const idRef = useRef(3);
  const onCreate = (content)=>{
    dispatch({
      type: "create",
      data :{
        id: idRef.current++,
        isDone : false,
        content : content,
        date : new Date().getTime()
      }
    })
  }

  const onUpdate = (targetId)=>{
    dispatch({
      type: "update",
      targetId: targetId
    })
  }

  const onDelete = (targetId)=>{
    dispatch({
      type : "delete",
      targetId: targetId
    })
  }



  return (
    <div className = 'App'>
      <Header/>
      <Editor onCreate={onCreate}/>
      <List todos ={todos} onUpdate={onUpdate} onDelete ={onDelete}/>
    </div>
  )
}

export default App

/**
 *useReducer : 컴포넌트 내부에 새로운 state를 생성하는 react hook
 모든 usestate는 useReducer로 대체 가능
 상태 관리 코드를 컴포넌트 외부로 분리할 수 있음
 상태를 관리하는 코드들이 app.js에 많아지면 관리하기 힘듬
 app.jsx의 주업무는 UI를 랜더링 하는 것
 */
