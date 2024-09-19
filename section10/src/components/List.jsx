import './List.css'
import TodoItem from './TodoItem';
import { useState , useMemo  } from 'react';
const List = ({todos, onUpdate,onDelete})=>{
    const [search, setSearch] = useState("");

    const onChangeSearch = (e)=>{
        setSearch(e.target.value)
    }

    const getFilteredData = ()=>{
        if(search===""){
            return todos
        }
        return todos.filter((todo)=>
            todo.content.toLowerCase().includes(search.toLowerCase())
        )
    }

    const filteredData = getFilteredData();

    const {totalCount,doneCount,notDoneCount} =  useMemo(()=>{
        const totalCount = todos.length;
        //filter는 전체 todo리스트를 순회하므로 todo리스트가 많아질 수록 시간이 오래 걸린다.
        const doneCount = todos.filter((todo)=> todo.isDone).length;
        const notDoneCount = totalCount - doneCount;
        return {
            totalCount, doneCount, notDoneCount
        }
    },[todos])
    //deps []에 포함된 변수가 변할 경우 콜백함수를 재실행한다.
    
    // //getAnalyzedData()함수는 현재 list가 리랜더링 될 때마다 실행되는데
    // //글자를 입력하거나 할 때는 리랜더링 될 필요가 없다.
    // const {totalCount,doneCount,notDoneCount} = getAnalyzedData()
    return (<div className = "List">
        <h4>Todo List 🌱</h4>
        <div>total:{totalCount}</div>
        <div>done:{doneCount}</div>
        <div>not done:{notDoneCount}</div>
        <input value={search} onChange={onChangeSearch} 
        placeholder="검색어를 입력하세요."></input>
        <div className='todos_wrapper'>
        {filteredData.map((todo)=>{
            return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete}/>
        })}
        </div>    
    </div>)
};
export default List;