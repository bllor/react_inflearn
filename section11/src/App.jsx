import './App.css'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
import { useState, useRef,useReducer, useCallback,createContext } from 'react'


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

export const TodoContext = createContext();

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
      <TodoContext.Provider value={{todos,onCreate,onUpdate,onDelete}}>
        <Editor />
        <List />
      </TodoContext.Provider>
    </div>
  )
}

export default App

/**
context는 데이터를 전달할 수 있게 만드는 저장소 역할을 하며,
부모 자식으로만 전달이 가능했던 props의 단점을 보완해주는 역할을 한다.

*/
