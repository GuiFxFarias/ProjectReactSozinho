
import "./MainStyle.css"

function Main(props){
    return (
        <div className="mainStyle">
            {props.children}
        </div>
    )
}

export default Main