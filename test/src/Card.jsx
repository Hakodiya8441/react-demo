import profile from "../src/profile.jpeg"
import"./Card.css"
function Card(){

    return(
      <>
      <div className="div_card_main">
        <img className="card_img" src={profile} alt=""/>
  
      <h1 className="card_title">Himanshu Akodiya</h1>
      <p className="card_desc">Card Desc</p>
      <button className="card_btn">More info</button>
      </div>   
      </>
    )
  }
  export default Card;