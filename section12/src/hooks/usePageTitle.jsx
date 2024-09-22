import { useEffect } from "react";

const usePageTitle =(title)=>{
useEffect(()=>{
    const $title  = document.getElementsByTagName("title")[0];
    //dom요소를 저장할 때 $title처럼 사용한다.
    $title.innerText=title
  },[title])
};

export default usePageTitle