import * as React from "react";
import { useReducer } from "react";
import { Actions } from "./enums";
import { ITodo } from "./interfaces";

interface ITodosContext {
  todos: Array<ITodo>;
  addTodo(todo: ITodo): Array<ITodo>;
  deleteTodo(id: number): Array<ITodo>;
  toggleTodo(id: number): Array<ITodo>;
}

const Context = React.createContext({
  todos: [],
  addTodo: () => [],
  deleteTodo: () => [],
  toggleTodo: () => []
} as ITodosContext);

const Provider: React.FunctionComponent = ({ children }) => {
  const [todos, dispatch]: [Array<ITodo>, Function] = useReducer(reducer, [
    { id: 0, text: "First things first.", isCompleted: false }
  ]);

  const initialContext: ITodosContext = {
    todos,
    addTodo: todo => dispatch({ type: Actions.ADD, payload: { todo } }),
    deleteTodo: id => dispatch({ type: Actions.DELETE, payload: { id } }),
    toggleTodo: id => dispatch({ type: Actions.TOGGLE, payload: { id } })
  };

  return <Context.Provider value={initialContext}>{children}</Context.Provider>;
};

interface IAction {
  type: Actions;
  payload: { id: number; todo: ITodo };
}

function reducer(todos: Array<ITodo>, action: IAction): Array<ITodo> {
  const { todo, id } = action.payload;

  switch (action.type) {
    case Actions.ADD:
      return [
        ...todos,
        {
          id: Math.max(...todos.map(todo => todo.id), 0) + 1,
          text: todo.text,
          isCompleted: false
        }
      ];
    case Actions.DELETE:
      return todos.filter(todo => todo.id !== id);
    case Actions.TOGGLE:
      return todos.map(todo =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      );
    default:
      return todos;
  }
}

export { Context, Provider };
