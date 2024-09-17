import './TodoItem.css'
const TodoItem = ({id, isDone, content,date, onUpdate})=>{
    
    const onChangeCheckbox = ()=>{
        onUpdate(id);
    };

    return <div className="TodoItem">
        <input type="checkbox" onChange={onChangeCheckbox} checked={isDone}></input>
        <div className='content'>{content}</div>
        <div className='date'>{new Date(date).toDateString()}</div>
        <button>삭제</button>
    </div>
}
export default TodoItem