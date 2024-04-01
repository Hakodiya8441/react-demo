function Test(){

    let myItem = ["Bmw","Audi","Alto","Swift"]




    return(
        <>
    {myItem.map((value,index)=>(
        <ul>
            <li>{value}  {index}</li>
        </ul>
    ))}
        </>
    )
    
}

export default Test;