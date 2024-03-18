import React,{useState} from "react";

function TodoList(){
    const [tasks,setTasks] = useState([""]);
    const [newTask,setNewTasks] = useState("");
    function handleInput(event){
      setNewTasks(event.target.value);
    }
    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t =>[...tasks,newTask]);
            setNewTasks("");
        }
    }
    function deleteTask(index){
        const updatedTasks = tasks.filter((element,i)=>i !== index)
        setTasks(updatedTasks);
    }
    function moveTaskUp(index){
     if(index > 0){
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
        setTasks(updatedTasks);
     }
    }
    function moveTaskDown(index){
     if(index < tasks.length-1){
        const updatedTasks = [...tasks];
        [updatedTasks[index+1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index+1]];
        setTasks(updatedTasks);
     }
    }
    // function moveTaskDown(index){

    // }
    
    return (<div className="to-do-list">
        <h1>To-Do-List</h1>
        <div>
            <input type="text"
            placeholder="Enter a task" value={newTask} onChange={handleInput}></input>
            <button className="add_button" onClick={addTask}>
                Add 
            </button>
            <ol>{tasks.map((task,index)=><li key ={index}>
                <span className="text">{task}</span>
                <button className="delete-button" onClick={()=>deleteTask(index)}>Delete</button>
                <button className="move-button" onClick={()=>moveTaskUp(index)}>☝️</button>
                <button className="move-button" onClick={()=>moveTaskDown(index)}>👇</button>
            </li>)}</ol>
        </div>
    </div>)
}
export default  TodoList;