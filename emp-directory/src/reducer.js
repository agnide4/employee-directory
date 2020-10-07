import {GET_USERS_REQUEST,  GET_USERS_SUCCESS, GET_USERS_FAILURE} from "./constants"



export const initialState = {
    users: [],
    searchTerm: "",
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
          default:
              return state
      }
  }