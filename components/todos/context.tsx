// import * as React from "react";
// import { useReducer } from "react";
// import { Actions } from "./enums";
// import { ITodo } from "./interfaces";

// interface ITodosContext {
//   todos: Array<ITodo>;
//   addTodo(text: string): Array<ITodo>;
//   deleteTodo(id: number): Array<ITodo>;
//   toggleTodo(id: number): Array<ITodo>;
//   updateTodo(id: number, text: string): Array<ITodo>;
//   completeAll(): Array<ITodo>;
// }

// const TodosCtx = React.createContext({
//   todos: [],
//   addTodo: () => [],
//   deleteTodo: () => [],
//   toggleTodo: () => [],
//   updateTodo: () => [],
//   completeAll: () => []
// } as ITodosContext);

// const TodosCtxProvider: React.FunctionComponent = ({ children }) => {
//   const [todos, dispatch]: [Array<ITodo>, Function] = useReducer(reducer, [
//     { id: 0, text: "First things first.", isCompleted: false }
//   ]);

//   const initialContext: ITodosContext = {
//     todos,
//     addTodo: text => dispatch({ type: Actions.ADD, payload: { text } }),
//     deleteTodo: id => dispatch({ type: Actions.DELETE, payload: { id } }),
//     updateTodo: (id, text) =>
//       dispatch({ type: Actions.UPDATE, payload: { id, text } }),
//     toggleTodo: id => dispatch({ type: Actions.TOGGLE, payload: { id } }),
//     completeAll: () => dispatch({ type: Actions.COMPLETE_ALL, payload: {} })
//   };

//   return (
//     <TodosCtx.Provider value={initialContext}>{children}</TodosCtx.Provider>
//   );
// };

// interface IAction {
//   type: Actions;
//   payload: { id: number; text: string };
// }

// function reducer(todos: Array<ITodo>, action: IAction): Array<ITodo> {
//   const { id, text } = action.payload;

//   switch (action.type) {
//     case Actions.ADD:
//       return [
//         ...todos,
//         {
//           id: Math.max(...todos.map(todo => todo.id), 0) + 1,
//           text: text,
//           isCompleted: false
//         }
//       ];
//     case Actions.DELETE:
//       return todos.filter(todo => todo.id !== id);
//     case Actions.TOGGLE:
//       return todos.map(todo =>
//         todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
//       );
//     case Actions.UPDATE:
//       return todos.map(todo => (todo.id === id ? { ...todo, text } : todo));
//     case Actions.COMPLETE_ALL:
//       const areAllCompleted = todos.every(todo => todo.isCompleted);
//       return todos.map(todo => ({ ...todo, isCompleted: !areAllCompleted }));
//     default:
//       return todos;
//   }
// }

// export { TodosCtx, TodosCtxProvider };
