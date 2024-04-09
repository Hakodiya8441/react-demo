import { useState } from "react";
import TodoStyle from "./Style.module.css";

function Todo() {
  const [UserInput, setUserInput] = useState("");

  const [complete,setcomplete] = useState(0);
  const[remaining,setremaining]= useState(0);

  

 const AllData = [
   { task:"Buy Car",completed:true}, 
    { task:"Buy I-phone",completed:true},
     {task:"Buy Guitar", completed:false},
     {task:"Buy Home",completed:false},
     { task:"Buy Book",completed:true},
    ]
  const [todo, setTodo] = useState(AllData);

  function handleValue(e) {
    setUserInput(e.target.value);
  }

  function handleTask() {
    if(UserInput){
    setTodo([...todo,{  UserInput, completed:false}]);
    setUserInput(" ");
  }
}

function handleCheck(index){
  const MyCheckArray =[...todo]
  MyCheckArray[index].completed = !MyCheckArray[index].completed
  setTodo(MyCheckArray)

  let completedTask =  MyCheckArray.filter((value,index)=>{
   return value.completed   
  })
  let remainingTask = MyCheckArray.filter((value,index)=>{
    return ! value.completed  
  })
  setcomplete(completedTask.length)
  setremaining(remainingTask.length)
}

function handleDelete(index){

  let MyArray = [...todo]

 let deleteItems=  MyArray.filter((value,id)=>{
    return index !== id

  })

  setTodo(deleteItems)
}

function handleUpdate(index){
  let updateArray = [...todo]
 let getValue =updateArray[index].task
let updatedValue = prompt(`Update Your task :- ${getValue}` , getValue)
let newValue = { tesk:updatedValue,complete:false}
updateArray.splice(index,0,newValue)
setTodo(updateArray)
}


  return (
    <>
      <div className={TodoStyle.todo}>
        <div className={TodoStyle.todo_main}>
          <h1 className={TodoStyle.h1}>My Todo App 📃</h1>
          <input
            type="text"
            placeholder="Enter Task"
            className={TodoStyle.input}
            value={UserInput}
            onChange={handleValue}
          />
          <button className={TodoStyle.todo_btn} onClick={handleTask}>
            Add Task
          </button>

          {todo.map((value, index) => (
            <div className={TodoStyle.list}>
              <input type="checkbox" 
              checked ={value.completed}
              onClick={()=>{handleCheck(index)}}
              />
            
              <span style={{textDecoration:value.completed ? "line-through" : " "}} 
  >{value.task}</span>

<span className={TodoStyle.icon}>
              <i className={"bi bi-x-circle-fill"}
              onClick={()=>{
           handleDelete(index) }}></i>
              </span>

              <span className={TodoStyle.icon_edit}>
              <i className={"bi bi-pencil-square"}
              onClick={()=>{
                handleUpdate(index)
              }}></i>
              </span>

            </div> 
          ))}
          <span>Completed :- {complete}</span>
           <span>Remaining :- {remaining}</span>
        </div>
      </div>
    </>
  );
}

export default Todo;
