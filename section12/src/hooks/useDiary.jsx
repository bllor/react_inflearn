import { useContext,useState,useEffect } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";
const useDiary = (id)=>{
    const nav = useNavigate();
    const data= useContext(DiaryStateContext);
    const [curDiaryItem, setCurDiaryItem] = useState();

    useEffect(()=>{
        const currentDiaryItem =  data.find((item)=>String(item.id)===String(id))
    
        if(!currentDiaryItem){
            window.alert('존재하지 않는 일기 입니다.')
            nav('/',{replace:true})
            //다음과 같이 사용할 경우 컴포넌트가 마운트 되기전에 사용되므로
            //useEffect를 사용해야한다.
        }else{
            setCurDiaryItem(currentDiaryItem);
        }
    },[id,data]);
    return curDiaryItem;

}

export default useDiary