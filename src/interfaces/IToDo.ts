import { ToDo } from "../models/ToDo";

export interface IToDo {
    toDo: ToDo;
    toDos: ToDo[];
    // setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
    handleDelete: (identifier: number) => void;
    handleDone: (identifier: number) => void;
    handleEdit: (identifier: number, description: string) => void;  
}