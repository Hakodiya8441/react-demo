// import Card from "./Card";
// import Boot from "./Day1/Boot";
// import Style from "./Day2/style";
// import Test from "./Day2/text";
// import Customer from "./Day3/Customer";
// import Product from "./Day3/Product";
// import Count from "./Day4/Count";
// import Example from "./Day4/Example";
// import State from "./Day4/State";
// import Form from "./Day5/Form";
import Todo from "./Todo/Todo";


function App(){

    // let Products = [
    //     {
    //         Id:"ahjha",
    //         Item:"I-Phone",
    //         Price:"$999",
    //         Desc:"Apple"
    //     },
    //     {
    //         Id:"817817h",
    //         Item:"Samsung",
    //         Price:"$999",
    //         Desc:"Samsung Phone"
    //     },
    //     {
    //         Id:"86617h",
    //         Item:"MI",
    //         Price:"$933",
    //         Desc:"MI Phone" 
    //     }

    // ]


    // let Customers = [
    //     {

    //         CustomerName:"Himanshu",
    //         CustId:"22",
    //         CustProduct:"Clothes",
    //         CustAddress:"Jaipur"
    //     },
    //     {

    //         CustomerName:"Harshit",
    //         CustId:"23",
    //         CustProduct:"Jeans",
    //         CustAddress:"Bihar"
    //     },
    //     {

    //         CustomerName:"Priyanshu",
    //         CustId:"24",
    //         CustProduct:"Shirts",
    //         CustAddress:"Kota"
    //     },
    //     {

    //         CustomerName:"Supratik",
    //         CustId:"25",
    //         CustProduct:"Tshirt",
    //         CustAddress:"Himachal"
    //     },
    //     {

    //         CustomerName:"Kunal",
    //         CustId:"26",
    //         CustProduct:"Socks",
    //         CustAddress:"Chandigarh"
    //     },
    // ]

    return(


        
        <>
     {/* <Card/>
     <Card/>
     <Boot/>
     <Style/>
     <Test/>
     {
        Products.map((value,index)=>(
            <Product id ={value.Id} Pname={value.Item} Price={value.Price} Desc= {value.Desc} /> 
        ))
     }


     {
       Customers.map((value,index)=>(
        <Customer Name ={value.CustomerName} Id ={value.CustId} Product={value.CustProduct} Address={value.CustAddress}/>
       ))
     }

     <Example/>
     <State/>
     <Count/> */}
     {/* <Form/> */}
     <Todo/>
        </>
    )
}

export default App;