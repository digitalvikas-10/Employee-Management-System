import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import FailedTask from "./FailedTask";
import TaskCompleted from "./completeTask";
const TaskList = ({data}) => {

  return (
    <div
      id="tasklist"
      className="h-[55%] w-full py-5 mt-10 rounded-2xl flex items-center justify-start gap-5 flex-wrap overflow-y-auto ml-12"
    >
     {data.tasks.map((e,idx)=>{
      if(e.active){
        return <AcceptTask key={idx}/>
      }
      if(e.newTask){
        return <NewTask key={idx}/>
      }
      if(e.completed){
        return <TaskCompleted key={idx}/>
      }
      if(e.failed){
        return <FailedTask key={idx}/>
      }
     })}
    </div>
  );
};

export default TaskList;
