import React  from "react";
import { ToDo } from "../models/ToDo";
import SingleToDo from "./SingleToDo";

interface ToDosProps{
    toDos: ToDo[];
    removeToDoHandler:(identifier : number) => void;
    completeToDoHandler:(identifier: number) => void;
    // setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

const ToDoList: React.FC<ToDosProps> = ({toDos, removeToDoHandler, completeToDoHandler}): JSX.Element => {
    return (
        <div className="px-5 w-full">
            {toDos.map((toDo) => (
                <SingleToDo 
                toDo={toDo} 
                toDos={toDos} 
                key={toDo.id} 
                handleDelete={removeToDoHandler}
                handleDone={completeToDoHandler}
                />
            ))}
        </div>
    );
} 

export default ToDoList;