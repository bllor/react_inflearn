import { replace, useNavigate, useParams } from "react-router-dom"
import Button from "../component/Button"
import Editor from "../component/Editor"
import Header from "../component/Header"
import { DiaryStateContext } from "../App"
import { DiaryDispatchContext } from "../App"
import { useContext, useEffect , useState } from "react"
import useDiary from "../hook/useDiary"

const Edit = ()=>{
    const params = useParams();
    
    const curDiaryItem = useDiary(params.id);
    const nav = useNavigate();
    const {onDelete} = useContext(DiaryDispatchContext);
    const {onUpdate} = useContext(DiaryDispatchContext);

    const onClickDelete = ()=>{
        if(window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요")){
                onDelete(params.id);
               nav('/',{replace:true})
        }
    };



    const onSubmit = (input)=>{
        if(window.confirm('일기를 정말 수정할까요?')){

        onUpdate(params.id, input.createdDate.getTime(), input.emotionId, input.content)
            }
        }

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
            <Editor initData = {curDiaryItem} onSubmit={onSubmit}/>
        </div>
    )
}

export default Edit