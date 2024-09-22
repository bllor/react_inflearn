import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import {DiaryDispatchContext} from '../App'
import usePageTitle from "../hooks/usePageTitle";

const New = ()=>{
    const {onCreate} = useContext(DiaryDispatchContext)
    //const onCreate = useContext(DiaryDispatchContext)
    //처럼 onCreate를 사용하면 안되는데,
    //DiaryDispatchContext에서 onCreate가 객체로 넘어오기 때문   
    const nav  = useNavigate()
    const onSubmit = (input)=>{
      onCreate(input.createdDate.getTime(), input.emotionId, input.content);
      nav('/',{replace:true})
      //nav('/',{replace:true})
      //Home으로 이동시켜주고,
      //replace:true를 하게 될 경우 웹에서 뒤로가기 클릭 시 이전 페이지로 이동하지 못하게 하는 기능이다.
    }

    // useEffect(()=>{
    //   const $title  = document.getElementsByTagName("title")[0];
    //   //dom요소를 저장할 때 $title처럼 사용한다.
    //   $title.innerText="새 일기 쓰기"
    // },[])

    usePageTitle("새 일기 쓰기");

    return(
        <div>
          <Header title={'새 일기 쓰기'}
          leftChild={<Button text={"뒤로 가기"} onClick={()=>{
            nav('/')
          }}></Button>}/> 
          <Editor onSubmit={onSubmit}/> 
        </div>
    )
}

export default New;
/*
nav(-1)을 하게 될 경우 페이지를 뒤로 이동시켜준다.
*/