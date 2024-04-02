import React, { useReducer, useState } from 'react';
import InputField from './components/InputField';
import ToDoList from './components/ToDoList';
import { ToDo } from './models/ToDo';
import './App.css';
import { toDoReducer } from './services/ToDo';

const App:React.FC = ():JSX.Element => {
  const [toDo, setToDo] = useState<string>("");
  const [toDos, setToDos] = useState<ToDo[]>([]);
  const [todos, dispatch] = useReducer(toDoReducer, toDos);

  const addToDo = (description: string) => {
    dispatch({
      type: 'add',
      payload: description
    });
  };

  const removeToDo = (identifier: number) => {
    dispatch({
      type: 'remove',
      payload: identifier
    })
  }

  const completeTodo = (identifier: number) => {
    dispatch({
      type: 'done',
      payload: identifier
    })
  }

  return (
    <div className="App">
      <h1 className="mb-4 mt-2 text-2xl font-bold leading-none tracking-tight text-white md:text-3xl lg:text-3xl">Taskfy</h1>
      <p className="mb-6 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48">Feel free to add all your tasks in the input field below.</p>
      <InputField toDo={toDo} setToDo={setToDo} handleAdd={addToDo} />
      <ToDoList toDos={todos} removeToDoHandler={removeToDo} completeToDoHandler={completeTodo}/>
    </div> 
  );
}

export default App;
  