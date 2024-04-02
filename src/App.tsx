import React, { useReducer, useState } from 'react';
import InputField from './components/InputField';
import ToDoList from './components/ToDoList';
import { ToDo } from './models/ToDo';
import './App.css';

const App:React.FC = ():JSX.Element => {
  const [toDo, setToDo] = useState<string>("");
  const [toDos, setToDos] = useState<ToDo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if(!toDo) return;
    
    setToDos([
      ...toDos, 
      {
        id: Date.now(),
        description: toDo,
        isDone: false
      }
    ]);

    setToDo("");

  }; 

  return (
    <div className="App">
      <h1 className="mb-4 mt-2 text-2xl font-bold leading-none tracking-tight text-white md:text-3xl lg:text-3xl">Taskfy</h1>
      <p className="mb-6 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48">Feel free to add all your tasks in the input field below.</p>
      <InputField toDo={toDo} setToDo={setToDo} handleAdd={handleAdd} />
      <ToDoList toDos={toDos} setToDos={setToDos}/>
    </div> 
  );
}

export default App;
  