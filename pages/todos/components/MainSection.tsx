import React from "react";
import { TodoFilters } from "../enums";
import TodoList from "./TodoList";
// import Footer from './Footer';

type Props = {
  todosCount?: number;
  completedCount?: number;
};

const MainSection: React.FunctionComponent<Props> = props => {
  const { todosCount, completedCount } = props;
  const handleCompleteAllClick = () => {};
  const filter = TodoFilters.SHOW_ALL;

  return (
    <section className="main">
      {!!todosCount && (
        <span>
          <input
            className="toggle-all"
            type="checkbox"
            checked={completedCount === todosCount}
            readOnly
          />
          <label onClick={handleCompleteAllClick} />
        </span>
      )}
      <TodoList filter={filter} />
      {/* {!!todosCount && (
        <Footer
          completedCount={completedCount}
          activeCount={todosCount - completedCount}
          onClearCompleted={clearCompleted}
          filter={filter}
        />
      )} */}
    </section>
  );
};

export default MainSection;
