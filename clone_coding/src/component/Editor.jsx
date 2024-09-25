import { useEffect, useState } from 'react';
import Button from './Button';
import './Editor.css'
import EmotionItem from './EmotionItem';
import { EmotionList } from '../util/constants';
import { stringedDate } from '../util/getStringedDate';



const Editor = ({initData, onSubmit})=>{

    const[input,Setinput]= useState({
        createdDate : new Date(),
        emotionId :3,
        content : ""
    });

    const onChangeInput = (e)=>{
        let name = e.target.name;
        let value = e.target.value;
        
        if (name==="createdDate"){
            value=new Date(value);
        }

        Setinput({
            ...input,[name]:value
        })
    }
    useEffect(()=>{
        if(initData){
            Setinput({...initData,createdDate: new Date(Number(initData.createdDate))})
        }
    },[initData])

    const onClickSubmitButton = ()=>{
        onSubmit(input)
    }
    return(
        <div className='Editor'>
            <div className='date_section'>
                <h4>오늘의 날짜</h4>
                <input 
                name="createdDate"
                onChange={onChangeInput}
                value={stringedDate(input.createdDate)} type='date'></input>
            </div>
            <div className='emotion_section'>
                <h4>오늘의 감정</h4>
                <div className='emotion_list_wrapper'>
                {EmotionList.map((item)=><EmotionItem 
                onClick={(()=>{
                    onChangeInput({
                        target:{
                            name:"emotionId",
                            value:item.emotionId
                        }
                    })
                })}
                key={item.emotionId}{...item}
                 isSelected ={item.emotionId === input.emotionId}/>)}               
                 </div>
            </div>
            <div className='content_section'>
                <h4>오늘의 일기</h4>
                <textarea 
                name='content'
                value={input.content}
                onChange={onChangeInput}
                placeholder='오늘은 어땠나요?'></textarea>
            </div>
            <div className='button_section'>
                <Button text={'취소하기'}/>
                <Button 
                onClick={onClickSubmitButton}
                text={'작성하기'} type={"POSITIVE"}/>
            </div>
        </div>
    )
}

export default Editor;

