import { useParams ,useNavigate, replace} from "react-router-dom"
import Header from "../components/Header";
import Button from "../components/button";
import Editor from "../components/Editor";
import { DiaryDispatchContext ,DiaryStateContext } from "../App";
import { useContext ,useEffect,useState } from "react";
import useDiary from "../hooks/useDiary";
import usePageTitle from "../hooks/usePageTitle";
const Edit = ()=>{
    const nav = useNavigate()
    const params = useParams()
    const curDiaryItem = useDiary(params.id);
    usePageTitle(`${params.id}번 일기 수정 `);

    /*
    데이터를 받아오는 코드를 아래와 같이 작성해서 사용했으나,
    edit, diary페이지에서도 사용되므로 useDiary라는 커스텀훅을 만들어서 관리
    아래의 코드는 기존에 데이터를 받아오는 코드

    const data= useContext(DiaryStateContext);
    const [curDiaryItem, setCurDiaryItem] = useState();
    useEffect(()=>{
        const currentDiaryItem =  data.find((item)=>String(item.id)===String(params.id))
    
        if(!currentDiaryItem){
            window.alert('존재하지 않는 일기 입니다.')
            nav('/',{replace:true})
            //다음과 같이 사용할 경우 컴포넌트가 마운트 되기전에 사용되므로
            //useEffect를 사용해야한다.
        }else{
            setCurDiaryItem(currentDiaryItem);
        }
    },[params.id,data])
    */

    const {onDelete,onUpdate} = useContext(DiaryDispatchContext);


    const onClickDelete = ()=>{
        if(
        window.confirm("일기를 정말 삭제할까요?")
        ){
            //url에 id가 있으므로 id를 받아와서 삭제할 때 사용함
            onDelete(params.id)
            nav('/',{replace:true})
        }
    }


    const onSubmit =(input)=>{
        if(window.confirm("일기를 정말 수정하시겠습니까?")){

        onUpdate(params.id, input.createdDate.getTime(),input.emotionId, input.content)
            nav('/',{replace:true})
    }
    }

    return (
        <div>
            <Header title = {'일기 수정하기 '}
            leftChild={<Button 
                onClick={()=>{
                    nav(-1)
                }}
                text={"< 뒤로 가기"}/>}
            rightChild={<Button 
                onClick={onClickDelete}
                text={"삭제하기"} type={'NEGATIVE'}/>} 
            />
            <Editor initData = {curDiaryItem} onSubmit={onSubmit}/>
        </div>
    )
}

export default Edit