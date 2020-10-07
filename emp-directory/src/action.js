import {GET_USERS_REQUEST,  GET_USERS_SUCCESS, GET_USERS_FAILURE, SEACH_BY_NAME} from "./constants"
import {GET_SVALUE_REQUEST,  GET_SVALUE_SUCCESS, GET_SVALUE_FAILURE} from "./constants"
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
             .get("https://randomuser.me/api/?inc=gender,name,picture,dob,phone&results=5")
             
             .then((response) => {
                console.log(response.data.results)
                dispatch(getUserSuccess(response.data.results))
             })
             .catch((error) =>{
                 dispatch(getUserFailure(error))
             })
      }
  }

  const getSvalueSuccess = (searchTerm) => ({
    type: GET_SVALUE_SUCCESS,
    payload: searchTerm
  })
  //When Request from API fails
  const getSvalueFailure = (error) => ({
    type: GET_SVALUE_FAILURE,
    payload: error,
  })

  export const getSvalue = (svalue) =>{
      return (dispatch, getState) => {
          dispatch({type: GET_SVALUE_REQUEST})
          if(svalue){
              dispatch(getSvalueSuccess(svalue))
          }else{
              dispatch(getSvalueFailure())
          }
      }

  }
  const searchSucess = (filteredList) => ({
    type: SEACH_BY_NAME,
    payload: filteredList
  })
  export const searchbyName = (searchTerm, users) =>{
      return (dispatch, getState) =>{
        let newList = []
          if(searchTerm)(
              users.filter(user => user.name.first.toLowerCase().includes(searchTerm)).map(filteredUser =>{
                  newList.push(filteredUser)
                  dispatch(searchSucess(newList))
              })
          )
          else (
              dispatch(searchSucess())
          )
      }
  }