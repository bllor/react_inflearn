import "./Main.css"

export function Main (){
    const user = {
        name:"최동일",
        isLogin : true,
    }
    // return(
    //     <>
    //     {user.isLogin?(<div>로그아웃</div>)
    //     :(<div>로그인</div>)}
    //     </>
    // )
    

    if(user.isLogin){
        return <div className="logout">로그아웃</div>
    }else{
        return <div className="logout">로그인</div>
    }
}
//jsx에서는 자바스크립트의 ㅣ예약어인 class를 사용하지 못하여 className을 사용
