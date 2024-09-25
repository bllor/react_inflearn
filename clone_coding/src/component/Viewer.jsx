import './Viewer.css'
import { getEmotionImage } from "../util/get-emotion-image";
import { EmotionList } from "../util/constants";
import useDiary from '../hook/useDiary';
import { useParams } from 'react-router-dom';
const Viewer = ({emotionId,content})=>{
    console.log(emotionId,content);
    
    const emotionItem = EmotionList.find((item)=> String(item.emotionId)===String(emotionId));

    console.log(emotionItem);
    return(
        <div className="Viewer">
            <div className="img_section">
                <h4>오늘의 감정</h4>
                <div className={`emotion_img_wrapper emotion_img_wrapper_${emotionId}`}>
                    <img src={getEmotionImage(emotionId)}></img>
                    <div>{emotionItem.emotionName}</div>
                </div>
            </div>
            <div className="content_section">
                <h4>오늘의 일기</h4>
                <div className='content_wrapper'>
                    <p>{content}</p>
                </div>
            </div>
        </div>
    )
}

export default Viewer