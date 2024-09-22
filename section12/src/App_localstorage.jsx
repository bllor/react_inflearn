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
import { useReducer ,useRef, createContext, useEffect, useState} from 'react'





function reducer(state, action){
  let nextState;
  switch(action.type){
    case "INIT":
     return action.data

    case "CREATE":
      { nextState = [action.data, ...state]
        break;
      };
    case "UPDATE":
      {nextState =  state.map((item)=>String(item.id) === String(action.data.id) ? action.data : item)
        break;
      }
    case "DELETE":
      {nextState =  state.filter((item)=> String(item.id) !==String(action.id));
        break;
      }
    default:
      return state
    }
    localStorage.setItem("diary", JSON.stringify(nextState));
    return nextState;
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

  // localStorage.setItem('test','hello');
  // localStorage.setItem('person',JSON.stringify({"name":"최동일"}));
  // localStorage에 객체 타입은 Object로 저장이 되므로
  // JSON.stringify를 이용하여 string으로 변환한 다음 넣는다.
  // 객체를 불러올 경우, JSON.parse(객체의 key)를 사용해야 한다.
  // JSON.parse는 undefined, null일 경우 오류가 발생한다.
  // 로컬스토리지에 저장된 것을 삭제하려면 localStorage.removeItem(key)를 한다.

  console.log("getitem",localStorage.getItem('test'))
  const [isLoading, setIsLoading] = useState(true);
  const [data, dispatch]= useReducer(reducer,[]);
  const idRef = useRef(0)

  //localStorage에서 일기 받기
  useEffect(()=>{
    const storedData = localStorage.getItem('diary')
    if(!storedData){
      setIsLoading(false)
      return ;
    }
    const parsedData = JSON.parse(storedData);

    if(!Array.isArray(parsedData)){
      setIsLoading(false)

      return;
    }

    let maxId = 0;
    parsedData.forEach((item)=>{
      if(Number(item.id)>maxId){
        maxId  = Number(item.id)
      }
    })

    idRef.current=maxId+1;

    dispatch({
      type:"INIT",
      data: parsedData
    })
    setIsLoading(false)
  },[])

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

  if(isLoading){
    return <div>데이터 로딩 중입니다....</div>
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


새로추가된 데이터는 새로고침 시 사라지는데
state로 추가된 데이터가 별도로 저장되지 않아서 그럼


웹 스토리지 : 데이터를 브라우저에 보관하는 방법
리액트의 state에 저장하는 것은 자바스크립트에 데이터를 추가한 것과 같으므로
새로고침이나 초기화를 할 경우, 저장된 내용이 사라진다.
그래서 데이터는 db에 넣거나 웹스토리지에 넣어야 한다.
웹스토리지는 sessionStorage, localStorage로 나뉜다
세션스토리지는 브라우저 탭별로 데이터를 보관하고, 탭이 종료되거나 새로고침되지 전까지 데이터를 보관한다.
새로고침되거나 종료될 경우 데이터는 사라진다.
로컬스토리지는 사이트 주소별로 데이터를 보관하고, 사용자가 직접삭제하기 전까지 데이터를 보관한다.
*/
