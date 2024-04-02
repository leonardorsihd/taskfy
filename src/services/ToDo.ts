import { ToDo } from "../models/ToDo";

export type ToDoActions =
  | {
      type: "add";
      payload: string;
    }
  | {
      type: "remove";
      payload: number;
    }
  | {
      type: "done";
      payload: number;
    };

export const toDoReducer = (state: ToDo[], action: ToDoActions) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        { id: Date.now(), description: action.payload, isDone: false },
      ];
    case "remove":
      return state.filter((todo) => todo.id !== action.payload);
    case "done":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );
  }
};
