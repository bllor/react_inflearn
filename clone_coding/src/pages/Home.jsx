import Button from "../component/Button"
import Header from "../component/Header"
import DiaryList from "../component/DiaryList"
import { useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { DiaryStateContext } from "../App"

const getMonthlyData = (pivotData, data)=>{
    const beginTime = new Date(pivotData.getFullYear(), pivotData.getMonth(),1,0,0,0).getTime();
    const EndTime = new Date(pivotData.getFullYear(), pivotData.getMonth()+1,0,23,59,59).getTime();

    return data.filter((item)=> beginTime<=item.createdDate && item.createdDate <=EndTime)
}

const Home = ()=>{
    const data = useContext(DiaryStateContext);
    const [pivotDate, setPivotDate] = useState(new Date());
    const onIncreaseMonth = ()=>{
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth()+1))
    };
    const onDecreaseMonth = ()=>{
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth()-1))
    };

    const filteredData= getMonthlyData(pivotDate,data);
    return(
        
        <div>
            <Header title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth()+1}월 `}
            leftChild={<Button onClick={onDecreaseMonth}
                text={"<"}/>}
            rightChild={<Button onClick={onIncreaseMonth} text={">"}/>}
            />
            <DiaryList filteredData = {filteredData}/>
        </div>
    )
}

export default Home