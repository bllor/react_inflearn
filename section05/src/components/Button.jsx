export function Button(props){
    console.log("props",props)
    return (
    <button
    onClick={()=>{
        console.log(props.text);
    }}
    style={{color: props.color}}>
        {props.text}-{props.color.toUpperCase()}
    </button>);
}

Button.defaultProps = {
    color:"black"
}

/*
이벤트 객체 : 
합성 이벤트 : 모든 브라우저에서 사용할 수 있는 이벤트 
*/