import { useState } from "react";
import TodoStyle from "./Style.module.css";

function Todo() {
  const [UserInput, setUserInput] = useState("");

  function handleValue(e) {
    setUserInput(e.target.value);
  }

 const AllData = [
   { task:"Buy Car",completed:true}, 
    { task:"Buy I-phone",completed:true},
     {task:"Buy Guitar", completed:false},
     {task:"Buy Home",completed:false},
     { task:"Buy Book",completed:true},
    ]
  const [todo, setTodo] = useState(AllData);

  function handleTask() {
    if(UserInput){
    setTodo([...todo,{ task: UserInput, completed:false}]);
    setUserInput(" ");
  }
}

function handleCheck(index){
  const MyCheckArray =[...todo]
  MyCheckArray[index].completed = !MyCheckArray[index].completed
  console.log(MyCheckArray)
  setTodo(MyCheckArray)

}

  return (
    <>
      <div className={TodoStyle.todo}>
        <div className={TodoStyle.todo_main}>
          <h1 className={TodoStyle.h1}>My Todo App</h1>
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
            <ul className={TodoStyle.list}>
              <input type="checkbox" 
              checked ={value.completed}
              onClick={()=>{handleCheck(index)}}
              />
           
              <span style={{textDecoration:value.completed ? "line-through" : " "}} 

              >{value.task}</span>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
}

export default Todo;
