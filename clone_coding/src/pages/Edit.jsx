import { replace, useNavigate, useParams } from "react-router-dom"
import Button from "../component/Button"
import Editor from "../component/Editor"
import Header from "../component/Header"
import { DiaryStateContext } from "../App"
import { DiaryDispatchContext } from "../App"
import { useContext, useEffect , useState } from "react"

const Edit = ()=>{
    const params = useParams();
    const data = useContext(DiaryStateContext);

    const getCurrentDiaryItem = ()=>{
        
        
    }

    useEffect(()=>{
        const currentDiaryItem =  data.find((item)=>String(item.id)===String(params.id))
        if(!currentDiaryItem){
            window.alert("존재하지 않는 일기입니다.")
            nav('/',{replace:true})
        }
        setCurDiaryItem(currentDiaryItem);
    },[params.id, data])

    const [curDiaryItem, setCurDiaryItem] = useState();

    const nav = useNavigate();
    const {onDelete} = useContext(DiaryDispatchContext);

    const onClickDelete = ()=>{
        if(window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요")){
                onDelete(params.id);
               nav('/',{replace:true})
        }
    };

    const currentDiaryItem = getCurrentDiaryItem();

    return(
        <div>
            <Header title={"일기 수정하기"}
            leftChild={<Button 
                onClick={()=>{nav(-1,{replace:true})}}
                text={"< 뒤로가기"}/>}
            rightChild={<Button 
                onClick={onClickDelete}
                text={'삭제하기'} type={"NEGATIVE"}/>}
            />
            <Editor initData = {curDiaryItem}/>
        </div>
    )
}

export default Edit