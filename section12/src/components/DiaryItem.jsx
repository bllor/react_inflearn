import { getEmotionImage } from "../util/get-emotion-image"
import Button from "./Button"
import './DiaryItem.css'
import { useNavigate } from "react-router-dom"
const DiaryItem = ({id, emotionId,createdDate, content})=>{
    const nav = useNavigate();

    return (
    <div className="DiaryItem">
        <div className={`img_section img_section_${emotionId}`}>
            <img 
            onClick={()=>nav(`/diary/${id}`)}
            src={getEmotionImage(emotionId)}/>
        </div>
        <div
        onClick={()=>nav(`/diary/${id}`)}
        className="info_section">
            <div className="created_date">{new Date(createdDate).toLocaleDateString()}</div>
            <div className="content">{content}</div>
        </div>
        <div className="button_section">
            <Button 
            onClick={()=>nav(`/edit/${id}`)}
            text={"수정하기"}></Button>
        </div>
    </div>
    )
}
export default DiaryItem

/*
{data.map((item) => {<DiaryItem key={item.id} {...item} />})}
map(()=>{})과 같은 형태를 사용할 경우 {}안에 return문이 있어야 한다.


*/