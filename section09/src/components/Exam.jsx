import { useReducer } from "react"

// reducer : 변환기
// -> 상태를 변환시키는 변환기
function reducer(state, action){
switch(action.type){
    case "INCREASE":
        return state + action.data;
    case "DECREASE":
        return state - action.data;
    default:
        return state
}

}

const Exam =()=>{
    //dispatch : 상태변화가 있어야 한다는 것을 알리는 것
    const [state, dispatch] = useReducer(reducer,0);
    
    const onClickplus =()=>{
        // 인수 : 상태가 어떻게 변화되길 원하는지
        // 인수로 전달된 요청을 담고있는 것을 액션객체라고 한다.
        dispatch({
            type : "INCREASE",
            data: 1
        })
    }

    const onClickminus =()=>{
        // 인수 : 상태가 어떻게 변화되길 원하는지
        // 인수로 전달된 요청을 담고있는 것을 액션객체라고 한다.
        dispatch({
            type : "DECREASE",
            data: 1
        })
    }


    return (<div>
        <h1>{state}</h1>
        <button onClick={onClickplus}>+</button>
        <button onClick={onClickminus}>-</button>
    </div>
    )
}
export default Exam