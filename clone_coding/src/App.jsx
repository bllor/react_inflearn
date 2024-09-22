import { useState, useReducer, useRef ,createContext} from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Diary from './pages/Diary'
import Edit from './pages/Edit'
import New from './pages/New'
import Notfound from './pages/Notfound'
import Button from './component/Button'
import Header from './component/Header'

const MockData = [
  {id :1,
    createdDate : new Date("2024-09-21").getTime(),
    emotionId : 1,
    content : "1"
  },
  {id :2,
    createdDate : new Date("2024-09-20").getTime(),
    emotionId : 2,
    content : "2"
  },
  {id :3,
    createdDate : new Date("2024-08-20").getTime(),
    emotionId : 3,
    content : "3"
  }
]

function reducer(state, action){
  switch(action.type){
    case "CREATE":
      return[ action.data, ...state]
  case "UPDATE":
    return state.map((item)=>
      String(item.id)===String(action.data.id) ? action.data : item
    )
  case "DELETE":
    return state.filter((item)=> String(item.id) !== String(action.id))
          
  }
}


function App() {
  const [data, dispatch ]= useReducer(reducer,MockData);
  const idRef = useRef(4);
  
  const DiaryStateContext = createContext();
  const DiaryDispatchContext = createContext();
  //일기 추가
  const onCreate = (createdDate, emotionId, content)=>{
    dispatch({
      type:"CREATE",
      data:{
        id: idRef.current++,
        createdDate,
        emotionId,
        content
      }
    })

  }

  //일기 수정

    const onUpdate = (id, createdDate, emotionId, content)=>{
      dispatch({
        type:"UPDATE",
        data:{
          id,
          createdDate,
          emotionId,
          content
        }
      })
    }

  //일기 삭제 

  const onDelete = (id)=>{
    dispatch({
      type:"DELETE",
      id
    })
  }

  return (
    <>
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{onCreate,onUpdate,onDelete}}>    
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/new' element={<New/>}/>
          <Route path='/diary/:id' element={<Diary/>}/>
          <Route path='/edit/:id' element={<Edit/>}/>
          <Route path='/*' element={<Notfound/>}/>
        </Routes>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>

    </>
  )
}

export default App
