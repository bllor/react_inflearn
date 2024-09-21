import './App.css'
import Home from './pages/Home'
import New from './pages/New'
import Diary from './pages/Diary'
import Edit from './pages/Edit'
import Notfound from './pages/Notfound'
import { Routes,Route, Link, useNavigate } from 'react-router-dom'
import { getEmotionImage } from './util/get-emotion-image'
import Button from './components/button'
import Header from './components/Header'
import { useReducer ,useRef, createContext} from 'react'

const mockData =[
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
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item)=>String(item.id) === String(action.data.id) ? action.data : item)
    case "DELETE":
      return state.filter((item)=> String(item.id) !==String(action.id));
    }
}


export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

/*
1. '/' : home
2. '/new' : 추가
3. '/diary': 목록
3. '/edit' : 수정
*/
function App() {
  const [data, dispatch]= useReducer(reducer,mockData);
  const idRef = useRef(4)
//새로운 일기 추가
const onCreate = (createdDate, emotionId, content)=>{
  dispatch({
    type: "CREATE",
    data:{
      id: idRef.current++,
      createdDate,
      emotionId,
      content
    }
  })
}


//기존 일기 수정
const onUpdate = (id, createdDate, emotionId, content)=>{
  dispatch({
    type: 'UPDATE',
    data:{
     id, createdDate, emotionId, content 
    }
  })
  
}

//기존 일기 삭제
const onDelete = (id)=>{
  dispatch({
    type: "DELETE",
    id
  })
  
}


  return (
    <>
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{onCreate,onUpdate,onDelete}}>
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/new'element={<New/>}/>
      <Route path='/diary/:id'element={<Diary/>}/>
      <Route path='/edit/:id'element={<Edit/>}/>
      <Route path='/*'element={<Notfound/>}/>
    </Routes>
    </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  </>
  )
}

export default App

/**
routes안에는 route컴포넌트만 사용된다.
routes컴포넌트 밖에 선언된 것은 모든 라우터에서 랜더링 된다.

Link로 이동할 경우, 컴포넌트만 업데이트 되며
a태그를 이용할 경우 페이지를 날리고 새로운 페이지를 가져온다.

동적 경로 : 동적인 데이터를 가지고 있는 경로
url파라미터 : 아이템의 id 등의 변경되지 않는 값을 주소로 명시하기 위해 사용
- /url/:id /:id id는 url파라미터
useParams라이브러리를 사용
쿼리스트링 : 검색어 등의 자주 변경되는 값을 주소로 명시하기 위해 사용된다.
url/?key=value로 구성
useSearchParams라이브러리 사용


이미지는 asset
폰트는 public
에 넣음
public으로 가져올 경우 vite에서 최적화가 되지 않음
asset에서 가져올 경우 데이터 url로 저장이 되는데 메모리에 캐싱이 된다.
이미지가 많이 필요할 때는 브라우저에 과부하를 줄 수 있으므로
public에 저장하는 것이 좋다.


리액트 빌드
npm run build
npm run preview : 빌드된 파일을 실행

프론트엔드 작업순서
페이지라우팅, 글로벌 레이아웃 설정
공통 컴포넌트 구현
개별 페이지 및 복잡한 기능 구현


*/
