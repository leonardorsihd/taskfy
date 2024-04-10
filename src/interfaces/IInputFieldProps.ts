export interface InputFieldProps {
    toDo: string;
    setToDo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (description: string) => void;
}