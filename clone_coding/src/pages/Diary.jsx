import { useNavigate, useParams } from "react-router-dom"
import Button from "../component/Button"
import Header from "../component/Header"
import Viewer from "../component/Viewer"
import { useContext } from "react"
import { DiaryStateContext } from "../App"
import useDiary from "../hook/useDiary"
import { stringedDate } from "../util/getStringedDate"

const Diary = ()=>{
    const params = useParams();
    const nav= useNavigate();
    const curDiaryItem = useDiary(params.id);
    console.log(curDiaryItem);
    
    
    if(!curDiaryItem){
        return(<div>로딩중 ...</div>)
    }
    const {createdDate,emotionId,content}=curDiaryItem;
    const curDate = stringedDate(new Date(createdDate));
    return(
        <div>
            <Header title={`${curDate} 기록`}
            leftChild={<Button 
                onClick={()=>{nav(-1)}}
                text={'< 뒤로가기'}/>}
            rightChild={<Button 
                onClick={()=>{nav(`/edit/${params.id}`)}}
                text={'수정하기'}/>}
            />
            <Viewer emotionId = {emotionId} content={content}/>
        </div>
    )
}

export default Diary