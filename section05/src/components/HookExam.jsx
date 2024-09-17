/*
1.훅은 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
2.조건부로 호출될 수 없다.(조건문, 반복문 내에서 사용 안됨)
-훅의 호출순서가 엉망이 되므로
3.커스텀 훅을 직접만들 수 있다.
*/

import { useState } from "react"
import useInput from "../hooks/useInput"


const HookExam = ()=>{
    const [input, onChange] = useInput();
    return <div >
        <input value={input} onChange={onChange} />
    </div>
}

export default HookExam