import { useNavigate } from "react-router-dom"
import Button from "../component/Button"
import Header from "../component/Header"
import Editor from "../component/Editor"
import { useContext } from "react"
import { DiaryDispatchContext } from "../App"
const New = ()=>{
    const nav = useNavigate()
    const {onCreate} = useContext(DiaryDispatchContext);
    
    const onSubmit = (input)=>{
        onCreate(
            input.createdDate.getTime(),
            input.emotionId,
            input.content
        )
        nav('/',{replace:true})
    }

    return(
        <div>
            <Header title={'새 일기 쓰기'}
            leftChild={<Button text={'<'}  onClick={()=>{nav(-1)}}/>}/>
            <div>
                <Editor onSubmit={onSubmit}/>
            </div>
        </div>
    )
}

export default New