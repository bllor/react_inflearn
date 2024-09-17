//1.회원가입 폼

import { useState,useRef } from "react"

//이름, 생년월일, 국적, 자기소개
// const Register =()=>{
//     const [name, setName] = useState("이름");
//     const [birth,setBirth] = useState("");
//     const [country, setContry]  = useState("");
//     const [bio, setBio] = useState("");
//     const onChangeName = (e)=>{
//         setName(e.target.value)
//     }
    
//     const onChangeBirth = (e)=>{
//         setBirth(e.target.value)
//     }

//     const onChangeCountry = (e)=>{
//         setContry(e.target.value)
//     }
//     const onChangeBio = (e)=>{
//         setBio(e.target.value)
//     }
//     return( 
//     <div>
//         <div >
//             <input 
//             value = {name} 
//             onChange={onChangeName} 
//             placeholder={"이름"}>            
//             </input>
//         </div>
//         <div>
//             <input
//             value={birth}
//             onChange={onChangeBirth}
//             type='date'
//             >
//             </input>
//         </div>
//         <div>
//             <select value = {country} onChange={onChangeCountry}>
//                 <option></option>
//                 <option value = "kr">한국</option>
//                 <option value = "us">미국</option>
//                 <option value = "uk">영국</option>
//             </select>
//         </div>
//         <div>
//             <textarea value= {bio} onChange={onChangeBio}></textarea>
//         </div>
//     </div>
//     )
// }


const Register = ()=>{
    const [input,setInput]= useState({
        name:"",
        birth:"",
        country:"",
        bio:"",
    })
    const countRef = useRef(0);
    const inputRef = useRef(0);
    
    const onSubmit = ()=>{
        if(input.name ===""){
            inputRef.current.focus();        
        }

    }
    let count = 0;
    //자바스크립트로 상태를 표현하지는 못한다.
    //리랜더링 되면서 0으로 초기화 되므로
    //usestate, useRef는 초기화 되지 않는다.
    //왜냐하면 처음부터 그렇게 설계되었기 때문
    //광역변수로 사용하면 자바스크립트로 할 수 있겠지만, 
    //두 개의 컴포넌트를 같이 사용할 경우 두 개의 함수가 하나의 변수를 공유함으로
    //원하는 결과가 아님 

    const onChange = (e)=>{
        // countRef.current++;
        count++;
        console.log(countRef.current)
        console.log("count",count)
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    return( 
    <div>
        <div >
            <input 
            ref = {inputRef}
            name = "name"
            value = {input.name} 
            onChange={onChange} 
            placeholder={"이름"}>            
            </input>
        </div>
        <div>
            <input
            name= 'birth'
            value={input.birth}
            onChange={onChange}
            type='date'
            >
            </input>
        </div>
        <div>
            <select
            name = "country" 
            value = {input.country} onChange={onChange}>
                <option></option>
                <option value = "kr">한국</option>
                <option value = "us">미국</option>
                <option value = "uk">영국</option>
            </select>
        </div>
        <div>
            <textarea 
            name = "bio"
            value= {input.bio} onChange={onChange}></textarea>
        </div>
        <button onClick={onSubmit}>제출</button>
    </div>
    )
}
export default Register