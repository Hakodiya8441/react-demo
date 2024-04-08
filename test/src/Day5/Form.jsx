// import { useState } from "react";
// import "./Form.css"

// function Form(){

    
//         const  [Fname,setFname] = useState("")
//          const [Lname,setLname] = useState("")
//           const [Fvalue,setFvalue] =useState("")
//           const [Lvalue,setLvalue] =  useState("")


//          function handleSubmit(e){
//             e.preventDefault()
//             console.log("first name :- "+Fname ,"last name :- "+Lname )
//             setFvalue(Fname)
//             setLvalue(Lname)
//             setFname("")
//             setLname("")
//     }

//          function handleFname(e){
//             setFname(e.target.value)

//          }

//          function handleLname(e){
//             setLname(e.target.value)
//          }

//     return(
//         <>

//         <div className="form">
//             <h1>Hello {Fvalue} {Lvalue} How are you....!</h1>
//             <h1 className="form-clr">Form Comp...</h1>
//             <div className="form-comp">
//                 <form onSubmit={handleSubmit}>
//                     <label>First Name</label>
//                     <input type="text" className="form-control"
//                     value={Fname}
//                     onChange={handleFname}
//                     />

//                     <label>Last Name</label>
//                     <input type="text" className="form-control"
//                     value={Lname}
//                     onChange={handleLname}
//                     />

//                     <button className="form-control btn-danger" >Submit</button>
//                 </form>
//             </div>
             
//         </div>

//         </>
//     )
// }

// export default Form;