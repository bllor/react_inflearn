import './App.css'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
import { useState, useRef,useReducer, useCallback } from 'react'


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
  
  const onCreate = useCallback((content)=>{
    dispatch({
      type: "create",
      data :{
        id: idRef.current++,
        isDone : false,
        content : content,
        date : new Date().getTime()
      }
    })
  },[]);

  const onUpdate = useCallback((targetId)=>{
    dispatch({
      type: "update",
      targetId: targetId
    })
  },[]);

  const onDelete = useCallback((targetId)=>{
    dispatch({
      type : "delete",
      targetId: targetId
    })
  },[])


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
 useMemo : 불필요한 연산 방지 ||동일한 연산을 반복하지 않고, 최초의 한 번 연산한 것을 메모리에 저장해둔 후 값을 불러옴

 react.memo = props가 변하지 않으면 리랜더링 되지 않는다.

 usecallback: 함수에 react.memo를 쓰게 해주는 함수
 usecallback(()=>{}) : 컴포넌트 마운트 이후에 리랜더링 되지 않는다.

 최적화는 모든 기능을 구현한 다음 하는 것이 좋다.
 최적화를 한 다음 기능을 추가하게 되면 최적화가 풀릴 수 있기 때문
 최적화를 해야 하는 곳 : 최적화가 필요할 것 같은 연산이나 함수, 컴포넌트에만 하는 것이 좋다.
 유저의 행동에 따라 개수가 달라질 수 있는 것, 함수가 많은 것 등을 최적화하는 것이 좋다.
 */
