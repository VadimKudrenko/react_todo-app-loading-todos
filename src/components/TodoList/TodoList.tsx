import React, { useState } from 'react';

import { Todo } from '../../types/Todo';
import { FilterTypes } from '../../types/FilterTypes';

import { TodoItem } from '../Todo/TodoItem';
import { Footer } from '../Footer/Footer';

type Props = {
  todoList: Todo[];
  showErrorMessage: (message: string, delay?: number) => void;
};

export const TodoList: React.FC<Props> = ({ todoList, showErrorMessage }) => {
  const [activeFilter, setActiveFilter] = useState<FilterTypes>(
    FilterTypes.all,
  );

  const filteredList = (list: Todo[]) => {
    switch (activeFilter) {
      case FilterTypes.all: {
        return list;
      }

      case FilterTypes.active: {
        return list.filter(item => item.completed === false);
      }

      case FilterTypes.completed: {
        return list.filter(item => item.completed === true);
      }
    }
  };

  return (
    <section className="todoapp__main" data-cy="TodoList">
      {filteredList(todoList).map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          showErrorMessage={showErrorMessage}
        />
      ))}

      {todoList?.length !== 0 && (
        <Footer
          todoList={todoList}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
      )}
    </section>
  );
};
