import React from "react";

interface InputFieldProps {
    toDo: string;
    setToDo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (description: string) => void;
}

const InputField:React.FC<InputFieldProps> = ({toDo, setToDo, handleAdd}):JSX.Element => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(!toDo.trim()) return;
        handleAdd(toDo);
        setToDo("");
    }

    return (
        <form className="max-w-md mx-auto w-[90%]" onSubmit={handleSubmit}>
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Adicionar</label>
            <div className="relative">
                <input type="search" 
                id="default-search" 
                className="focus:outline-0 block w-full p-4 ps-10 text-sm text-gray-900 border 
                border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 
                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder="Adicionar item a lista de a fazeres" required 
                value={toDo} onChange={(e) => {setToDo(e.target.value)}}/>
                <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 
                hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium 
                rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">+</button>
            </div>
        </form>
    );
};

export default InputField;