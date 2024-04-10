import { ToDo } from "../models/ToDo";

export interface ToDosProps {
  toDos: ToDo[];
  removeToDoHandler: (identifier: number) => void;
  completeToDoHandler: (identifier: number) => void;
  editToDoHandler: (identifier: number, description: string) => void;
  // setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}
