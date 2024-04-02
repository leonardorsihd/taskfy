import React, { useEffect, useReducer, useRef, useState } from "react";
import { ToDo } from "../models/ToDo";
import { BsPencil } from "react-icons/bs";
import { RiDeleteBin7Line } from "react-icons/ri";
import { CiBookmarkCheck } from "react-icons/ci";

interface IToDo {
  toDo: ToDo;
  toDos: ToDo[];
  // setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
  handleDelete: (identifier: number) => void;
  handleDone: (identifier: number) => void;
}

const SingleToDo: React.FC<IToDo> = ({
  toDo,
  toDos,
  handleDelete,
  handleDone
  // setToDos,
}): JSX.Element => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(toDo.description);

  const handleDoneTodo = (): void => {
    handleDone(toDo.id);
  };

  const handleRemove = (): void => {
    handleDelete(toDo.id);  
  };

  // useEffect(()=> {
  //   console.log('state has been changed', state);
  //   setToDos(state);
  // }, [state]);

  const handleEdit = (e: React.FormEvent, id: number): void => {
    e.preventDefault();
    // setToDos(
    //   toDos.map((toDo) =>
    //     toDo.id === id ? { ...toDo, description: editTodo } : toDo
    //   )
    // );
    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  /**
   * The below function automatically sets focus to input field when edit variable's value changes
   * **/
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form action="" className="w-100" onSubmit={(e) => handleEdit(e, toDo.id)}>
      <a
        href="#"
        className="w-100 flex items-center mt-2 block p-6 bg-white border border-gray-200 rounded-lg 
                shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 gap-x-2"
      >
        {edit ? (
          <div>
            <input
              type="text"
              id="description"
              ref={inputRef}
              className="bg-gray-50 border border-gray-300 text-gray-900 
                                text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                                block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                                dark:focus:border-blue-500"
              value={editTodo}
              onChange={(e) => {
                setEditTodo(e.target.value);
              }}
              placeholder="John"
              required
            />
          </div>
        ) : toDo.isDone ? (
          <s className="font-light text-gray-100 dark:text-gray-100 text-sm">
            <span className="font-bold">#{toDo.id}</span> {toDo.description}
          </s>
        ) : (
          <p className="font-light text-gray-100 dark:text-gray-100 text-sm">
            <span className="font-bold">#{toDo.id}</span> {toDo.description}
          </p>
        )}

        <div className="flex gap-x-1">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 
                    focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm p-3 
                    me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none 
                    dark:focus:ring-blue-800"
            onClick={() => {
              if (!edit && !toDo.isDone) {
                setEdit(!edit);
              }
            }}
          >
            <BsPencil />
          </button>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 
                    focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm p-3 
                    me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none 
                    dark:focus:ring-blue-800"
            onClick={() => handleRemove()}
          >
            <RiDeleteBin7Line />
          </button>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 
                    focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm p-3 
                    me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none 
                    dark:focus:ring-blue-800"
            onClick={() => handleDoneTodo()}
          >
            <CiBookmarkCheck />
          </button>
        </div>
      </a>
    </form>
  );
};

export default SingleToDo;
