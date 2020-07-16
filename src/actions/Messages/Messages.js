import * as types from './../Types/ActionTypes'

export function listAll () {
  return {
    type: types.RECEIVE_DATA,
    a: [1]
  }
}
export function toggleForm () {
  return {
    type: types.TOGGLE_FORM
  }
}
export function openForm () {
  return {
    type: types.OPEN_FOMR
  }
}
export function closeForm () {
  return {
    type: types.CLOSE_FORM
  }
}
export function addMessage (data) {
  return {
    type: types.ADD_MESSAGE,
    data
  }
}
export function saveMessage (dataEditMessage) {
  return {
    type: types.SAVE_MESSAGE,
    dataEditMessage
  }
}
export function editMessage (dataEditMessage) {
  return {
    type: types.EDIT_MESSAGE,
    dataEditMessage
  }
}
export function deleteMessage (id) {
  return {
    type: types.DELETE_MESSAGE,
    id
  }
}
export function changeStatus (id, status) {
  return {
    type: types.CHANGE_STATUS,
    id,
    status
  }
}
export function clearData () {
  return {
    type: types.CLEAR_DATA
  }
}
export function filterMessage (filter) {
  return {
    type: types.FILTER_MESSAGE,
    filter
  }
}
export function searchMessage (keyword) {
  return {
    type: types.SEARCH,
    keyword
  }
}
export function sortMessage (sort) {
  return {
    type: types.SORT_MESSAGE,
    sort
  }
}
export function submitLogin (data) {
  return {
    type: types.LOGIN,
    data
  }
}
