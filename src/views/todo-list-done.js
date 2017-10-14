/* eslint-disable no-unused-vars */
import {h} from 'hyperapp'
import {TodoItem} from './todo-item'

export const TodoListDone = ({state, actions}) =>
  <div>
    {
      state.todos
        .filter(todo => todo.done)
        .map(todo => <TodoItem todo={todo} actions={actions} />)
    }
  </div>
