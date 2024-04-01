import "./style.css"
function Style (){

    const Decoration = {
        color:"blue",
    }
    
    return(
        <>
        <h1 className="Headings">Hello Himanshu</h1>
        <h2 style={Decoration}>Hello world</h2>
        <h3 style = {{}}>Hello Class</h3>
        </>
    )
}

export default Style;