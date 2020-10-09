import {GET_USERS_REQUEST,  GET_USERS_SUCCESS, GET_USERS_FAILURE, GET_SVALUE_REQUEST, GET_SVALUE_SUCCESS, GET_SVALUE_FAILURE} from "./constants"
import { GET_SORDER_REQUEST, GET_SORDER_SUCCESS, GET_SORDER_FAILURE } from "./constants"
import {SEACH_BY_NAME} from "./constants"


export const initialState = {
    users: [],
    searchTerm: "",
    filteredList: [],
    sortOrder:"",
    error: ""
  };


  export default (state = initialState, action) => {
      switch(action.type){
          case GET_USERS_REQUEST:
              return {...state, users: [], error: null}
          case GET_USERS_SUCCESS: 
              return {...state, users: action.payload, error: null}
          case GET_USERS_FAILURE: 
              return {...state, error: action.payload}
          case GET_SVALUE_REQUEST:
              return {...state, searchTerm: "", error: null}
          case GET_SVALUE_SUCCESS:
              return {...state, searchTerm: action.payload, error: null}
          case GET_SVALUE_FAILURE:
              return {...state, error: action.payload}
        case GET_SORDER_REQUEST:
                return {...state, sortOrder: "", error: null}
        case GET_SORDER_SUCCESS:
                return {...state, sortOrder: action.payload, error: null}
        case GET_SORDER_FAILURE:
                return {...state, error: action.payload}
         case SEACH_BY_NAME:
              return {...state, filteredList:action.payload, error: null}
          default:
              return state
      }
  }