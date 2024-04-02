import React  from "react";
import { ToDo } from "../models/ToDo";
import SingleToDo from "./SingleToDo";

interface ToDosProps{
    toDos: ToDo[];
    setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

const ToDoList: React.FC<ToDosProps> = ({toDos, setToDos}): JSX.Element => {
    return (
        <div className="px-5 w-full">
            {toDos.map((toDo) => (
                <SingleToDo toDo={toDo} toDos={toDos} setToDos={setToDos} key={toDo.id}/>
            ))}
        </div>
    );
} 

export default ToDoList;