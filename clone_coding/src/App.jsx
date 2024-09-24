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

// function reducer(state, action){
//   console.log("action id",action.id)
//   console.log(state.filter((item)=> String(item.id) !== String(action.id)))
//   switch(action.type){
//     case "CREATE":
//       return[ action.data, ...state]
//   case "UPDATE":
//     return state.map((item)=>
//       String(item.id)===String(action.data.id) ? action.data : item
//     )
//   case "DELETE":
//     return state.filter((item)=> String(item.id) !== String(action.id));
          
//   }
// }

function reducer(state, action){
  console.log(action)
  switch(action.type){
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item)=>String(item.id) === String(action.data.id) ? action.data : item)
    case "DELETE":
      return state.filter((item)=> String(item.id) !==String(action.id));
    default:
      return state;
    
    }
}


export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();


function App() {
  const [data, dispatch ]= useReducer(reducer,MockData);
  const idRef = useRef(4);
  
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
          id:4,
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


/*
    const[input,Setinput]= useState({
        createdDate : new Date(),
        emotionId :3,
        content : ""
    });

여러개의 값을 useState에서 사용할 경우 객체로 만들어서 사용하면 된다.

-------------

<textarea 
name='content'
value={input.content}
onChange={onChangeInput}
placeholder='오늘은 어땠나요?'>
</textarea>
textarea의 입력값은 input.content에 보관이 된다.

-----------------------------------

 onClick={()=>{nav(`/diary/:${id}`)}}>
 처럼:${id}로 매개변수를 전달할 경우
 url에 /:1과 같이 나타나므로
 nav(`/diary/${id})처럼 사용해야 한다.
*/