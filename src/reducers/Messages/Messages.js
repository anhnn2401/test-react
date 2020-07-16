/* global localStorage */
import * as types from '../../actions/Types/ActionTypes'
// import {findIndex} from 'lodash/findIndex';
const data = JSON.parse(localStorage.getItem('contentMessages'))
const dataMessage = data
const initialState = {
  data: dataMessage,
  isDisplayForm: false,
  formEditing: {
    // id : '',
    // name : '',
    // content : '',
    // status : true,
  },
  filter: {
    name: '',
    status: -1
  },
  keyword: '',
  sort: {
    by: '',
    value: ''
  },
  account: {
    ID: '',
    password: ''
  }
}
const generateID = () => {
  const id = Math.random().toString(36).substring(2, 8)
  return id
}

const findIndex = (data, id) => {
  let result = -1
  data.forEach((dataMessage, index) => {
    if (dataMessage.id === id) {
      result = index
    }
  })
  return result
}

const Messages = (state = initialState, action) => {
  let id = ''
  let index = -1
  const dataNew = [...state.data]
  const account = state.account
  let sort = state.sort
  let formEditing = state.formEditing
  let filter, keyword, newMessage

  switch (action.type) {
    case types.RECEIVE_DATA:
      return Object.assign(state, {
        data: initialState
      })
    case types.TOGGLE_FORM:
      return {
        ...state,
        isDisplayForm: !state.isDisplayForm
      }
    case types.OPEN_FOMR:
      return {
        ...state,
        isDisplayForm: true
      }
    case types.CLOSE_FORM:
      return {
        ...state,
        isDisplayForm: false
      }
    case types.ADD_MESSAGE:
      // console.log(action.data.status, typeof action.data.status)
      newMessage = {
        id: action.data.id,
        name: action.data.name,
        content: action.data.content,
        status: action.data.status // === 'true' ? true : false
      }
      if (!newMessage.id) {
        newMessage.id = generateID()
        dataNew.push(newMessage)
      } else {
        index = findIndex(dataNew, newMessage.id)
        dataNew[index] = newMessage
      }
      localStorage.setItem('contentMessages', JSON.stringify(dataNew))
      return {
        ...state,
        data: dataNew
      }

    case types.EDIT_MESSAGE:
      formEditing = action.dataEditMessage
      return {
        ...state,
        formEditing
      }
    case types.DELETE_MESSAGE:
      id = action.id
      index = findIndex(dataNew, id)
      dataNew.splice(index, 1)
      localStorage.setItem('contentMessages', JSON.stringify(dataNew))
      return {
        ...state,
        data: dataNew
      }
    case types.CHANGE_STATUS:
      id = action.id
      index = findIndex(dataNew, id)
      dataNew[index] = {
        ...dataNew[index],
        status: !dataNew[index].status
      }
      localStorage.setItem('contentMessages', JSON.stringify(dataNew))
      return {
        ...state,
        data: dataNew
      }
    // return {
    //   ...state,
    //   data: state.data.map(item => item.id === action.id ? { ...item, status: !item.status } : item)
    // }
    case types.FILTER_MESSAGE:
      filter = action.filter
      filter.status = parseInt(filter.status)
      return {
        ...state,
        filter
      }
    case types.SEARCH:
      keyword = action.keyword
      return {
        ...state,
        keyword
      }
    case types.SORT_MESSAGE:
      sort = {
        by: action.sort.sortBy,
        value: action.sort.sortValue
      }
      return {
        ...state,
        sort
      }
      // state.sort = {
      //   by: action.sort.sortBy,
      //   value: action.sort.sortValue
      // }
      // const sort = state.sort
      // return {
      //   ...state,
      //   sort
      // }
    case types.LOGIN:
      // console.log(action);
      state.account = {
        ID: action.data.ID,
        password: action.data.password
      }
      return {
        ...state,
        account
      }
    default: return state
  }
}
export default Messages
