import { useNavigate } from "react-router-dom"
import Button from "../component/Button"
import Header from "../component/Header"
import Editor from "../component/Editor"
const New = ()=>{
    const nav = useNavigate()
    return(
        <div>
            <Header title={'새 일기 쓰기'}
            leftChild={<Button text={'<'}  onClick={()=>{nav(-1)}}/>}/>
            <div>
                <Editor/>
            </div>
        </div>
    )
}

export default New