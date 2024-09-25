import { useContext, useEffect ,useState} from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";
import { useNavigate, useParams } from "react-router-dom";


const useDiary = (id)=>{
    const data = useContext(DiaryStateContext);
    const nav = useNavigate();
    const [curDiaryItem, setCurDiaryItem] = useState();

    useEffect(()=>{
        const currentDiaryItem =  data.find((item)=>String(item.id)===String(id));
        if(!currentDiaryItem){
            window.alert("존재하지 않는 일기입니다.")
            nav('/',{replace:true})
        }
        setCurDiaryItem(currentDiaryItem);
    },[id, data])
    return curDiaryItem
}

export default useDiary;