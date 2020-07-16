import { createStore } from 'redux'
import messages from './../reducers'
export const store = createStore(messages)
