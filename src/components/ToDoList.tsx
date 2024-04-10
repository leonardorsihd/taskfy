import React from "react";
import SingleToDo from "./SingleToDo";
import { ToDosProps } from "../interfaces/IToDoList";

const ToDoList: React.FC<ToDosProps> = ({
  toDos,
  removeToDoHandler,
  completeToDoHandler,
  editToDoHandler,
}): JSX.Element => {
  return (
    <div className="px-5 w-full">
      {toDos.map((toDo) => (
        <SingleToDo
          toDo={toDo}
          toDos={toDos}
          key={toDo.id}
          handleDelete={removeToDoHandler}
          handleDone={completeToDoHandler}
          handleEdit={editToDoHandler}
        />
      ))}
    </div>
  );
};

export default ToDoList;
