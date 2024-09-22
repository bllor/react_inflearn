import './Editor.css'
import EmotionItem from "../components/EmotionItem";
import Button from './Button';
import { useState ,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { emotionList } from '../util/constant';

const getStringedDate = (targetDate)=>{
    let year = targetDate.getFullYear();
    let month = targetDate.getMonth()+1;
    let date = targetDate.getDate();

    if(month<10){
        month=`0${month}`
    }
    if(date<10){
        date = `0${date}`
    }

    return `${year}-${month}-${date}`
}


//editor 컴포넌트는 새로 생성할 때도, 수정할 때도 사용되는데
//수정될 때와 생성될 때의 이벤트 핸들러가 다르므로,
//페이지의 정보를 받아와서 사용할 예정


const Editor = ({initData, onSubmit})=>{
    const nav = useNavigate();
    const [input,setInput] = useState({
        createdDate : new Date(),
        emotionId : 3,
        content : ""
    });

    useEffect(()=>{
        if(initData){
            setInput({
                ...initData,
                createdDate : new Date(Number(initData.createdDate))
            })
        }
    },[initData])

    const onChangeInput = (e)=>{
        let name = e.target.name;
        let value = e.target.value;

        if(name==="createdDate"){
            //e.target.value로 날짜를 받아올 경우 , 2024-09-21처럼 string형태이므로
            //date로 객체로 변경해준다.
            value=new Date(value);
        }
        
        setInput({...input,[name]:value})
    }

    const onClickSubmitButton =()=>{
        onSubmit(input);

    }

    return (
    <div className='Editor'>
        <section className='date_section'>
            <h4>오늘의 날짜</h4>
            <input
            name = "createdDate" 
            onChange={onChangeInput}
            value = {getStringedDate(input.createdDate)} type='date'></input>
        </section>
        <section className='emotion_section'>
        <h4>오늘의 감정</h4>
        <div className='emotion_list_wrapper'>
        {emotionList.map((item)=><EmotionItem 
        onClick = {(()=>onChangeInput({
            target:{
                name:"emotionId",
                value:item.emotionId
            }
        }))}
        key={item.emotionId} {...item}
        isSelected = {item.emotionId===input.emotionId}/>)}
        </div>
        </section>
        <section className='content_section'>
            <h4>오늘의 일기</h4>
            <textarea 
            name="content"
            value={input.content}
            onChange={onChangeInput}
            placeholder='오늘은 어땠나요?'></textarea>
        </section>
        <section 
        onClick={()=>{
            nav(-1)
        }}
        className='button_section'>
            <Button text={"취소하기"}/>
            <Button 
            onClick={onClickSubmitButton}
            text={"작성완료"} type='POSITIVE'/>
        </section>
    </div>
    )
}

export default Editor