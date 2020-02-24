import React, { useReducer } from "react";
import { Actions } from "./enums";
import { ITodo } from "./interfaces";

interface ITodosContext {
  todos: Array<ITodo>;
  addTodo(text: string): Array<ITodo>;
  deleteTodo(id: number): Array<ITodo>;
  toggleTodo(id: number): Array<ITodo>;
  updateTodo(id: number, text: string): Array<ITodo>;
}

const Context = React.createContext({
  todos: [],
  addTodo: () => [],
  deleteTodo: () => [],
  toggleTodo: () => [],
  updateTodo: () => []
} as ITodosContext);

const Provider: React.FunctionComponent = ({ children }) => {
  const [todos, dispatch]: [Array<ITodo>, Function] = useReducer(reducer, [
    { id: 0, text: "First things first.", isCompleted: false }
  ]);

  const initialContext: ITodosContext = {
    todos,
    addTodo: text => dispatch({ type: Actions.ADD, payload: { text } }),
    deleteTodo: id => dispatch({ type: Actions.DELETE, payload: { id } }),
    updateTodo: (id, text) =>
      dispatch({ type: Actions.UPDATE, payload: { id, text } }),
    toggleTodo: id => dispatch({ type: Actions.TOGGLE, payload: { id } })
  };

  return <Context.Provider value={initialContext}>{children}</Context.Provider>;
};

interface IAction {
  type: Actions;
  payload: { id: number; text: string };
}

function reducer(todos: Array<ITodo>, action: IAction): Array<ITodo> {
  const { id, text } = action.payload;

  switch (action.type) {
    case Actions.ADD:
      return [
        ...todos,
        {
          id: Math.max(...todos.map(todo => todo.id), 0) + 1,
          text: text,
          isCompleted: false
        }
      ];
    case Actions.DELETE:
      return todos.filter(todo => todo.id !== id);
    case Actions.TOGGLE:
      return todos.map(todo =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      );
    case Actions.UPDATE:
      return todos.map(todo => (todo.id === id ? { ...todo, text } : todo));
    default:
      return todos;
  }
}

export { Context, Provider };
