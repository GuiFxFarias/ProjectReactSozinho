import Principal from "../pages/Principal"
import Container from "./Container"
import "./MainStyle.css"

function Main(props){
    return (
        <Container customClass="mainStyle">
            {props.children}
        </Container>
    )
}

export default Main