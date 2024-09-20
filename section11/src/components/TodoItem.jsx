import './TodoItem.css'
import { memo, useContext } from 'react';
import { TodoDispatchContext } from '../App';
const TodoItem = ({id, isDone, content,date})=>{
    const {onUpdate,onDelete}= useContext(TodoDispatchContext);
    const onChangeCheckbox = ()=>{
        onUpdate(id);
    };
    const onClickDeleteButton =()=>{
        onDelete(id);
    }
    return <div className="TodoItem">
        <input type="checkbox" onChange={onChangeCheckbox} checked={isDone}></input>
        <div className='content'>{content}</div>
        <div className='date'>{new Date(date).toDateString()}</div>
        <button onClick={onClickDeleteButton}>삭제</button>
    </div>
}
export default TodoItem;
// //고차 컴포넌트(HOC)
// export default memo(TodoItem, (prevProps, nextProps)=>{
//     //prevProps(이전값),nextProps(현재값)을 비교하여, props가 바뀌었는지 판단
//     //()내의 변수의 이름은 prevProps, nextProps로 사용해야한다.
//     // T -> props가 바뀌지 않음 -> 리랜더링 X
//     // F -> props가 바뀜 -> 리랜더링 O
//     if(prevProps.id !== nextProps.id)return false;
//     if(prevProps.isDone !== nextProps.isDone)return false;
//     if(prevProps.content !== nextProps.content)return false;
//     if(prevProps.date !== nextProps.date)return false;
//     return true;
// });
//객체 타입인 경우 리랜더링되면서 새로운 값을 불러오고
//memo에서는 얕은 비교를 하게 되어서 그냥 memo(object)로 사용할 경우 props가 변경되었다고 느낀다.
// 1.App.jsx에서 함수들을 memo에 넣는 방법
// 2.memo(object)를 커스텀마이즈 해주는 방법
