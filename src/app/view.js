/* eslint-disable no-unused-vars */
import {h} from 'hyperapp'
import {TodoMain} from '../views/todo-main'

export const view = (state, actions) =>
  <TodoMain state={state} actions={actions} />
