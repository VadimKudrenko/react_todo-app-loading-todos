import React from 'react';
import classNames from 'classnames';

import { FilterTypes } from '../../types/FilterTypes';

type Props = {
  activeFilter: string;
  setActiveFilter: (filter: FilterTypes) => void;
};

export const Filter: React.FC<Props> = ({ activeFilter, setActiveFilter }) => {
  const handlerFilter = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    filter: FilterTypes,
  ) => {
    event.preventDefault();
    setActiveFilter(filter);
  };

  return (
    <nav className="filter" data-cy="Filter">
      <a
        href="#/"
        className={classNames('filter__link ', {
          selected: activeFilter === FilterTypes.all,
        })}
        data-cy="FilterLinkAll"
        onClick={e => handlerFilter(e, FilterTypes.all)}
      >
        All
      </a>

      <a
        href="#/active"
        className={classNames('filter__link ', {
          selected: activeFilter === FilterTypes.active,
        })}
        data-cy="FilterLinkActive"
        onClick={e => handlerFilter(e, FilterTypes.active)}
      >
        Active
      </a>

      <a
        href="#/completed"
        className={classNames('filter__link ', {
          selected: activeFilter === FilterTypes.completed,
        })}
        data-cy="FilterLinkCompleted"
        onClick={e => handlerFilter(e, FilterTypes.completed)}
      >
        Completed
      </a>
    </nav>
  );
};
