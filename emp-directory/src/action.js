import {GET_USERS_REQUEST,  GET_USERS_SUCCESS, GET_USERS_FAILURE} from "./constants"
import axios from "axios"



const getUserSuccess = (users) => ({
    type: GET_USERS_SUCCESS,
    payload: users
  })
  //When Request from API fails
  const getUserFailure = (error) => ({
    type: GET_USERS_FAILURE,
    payload: error,
  })
  
  export const  getUsers = () =>{
      return(dispatch, getState) => {
          dispatch({type: GET_USERS_REQUEST})
          axios
             .get("https://randomuser.me/api/?inc=gender,name,picture,dob,phone&results=2")
             
             .then((response) => {
                console.log(response.data.results)
                dispatch(getUserSuccess(response.data.results))
             })
             .catch((error) =>{
                 dispatch(getUserFailure(error))
             })
      }
  }