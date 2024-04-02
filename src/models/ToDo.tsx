import { useReducer } from "react";

export interface ToDo {
  id: number;
  description: string;
  isDone: boolean;
}