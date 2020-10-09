import {GET_USERS_REQUEST,  GET_USERS_SUCCESS, GET_USERS_FAILURE, SEACH_BY_NAME, SORT_BY_AGE} from "./constants"
import {GET_SVALUE_REQUEST,  GET_SVALUE_SUCCESS, GET_SVALUE_FAILURE} from "./constants"
import { GET_SORDER_REQUEST, GET_SORDER_SUCCESS, GET_SORDER_FAILURE } from "./constants"
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
  const searchSuccess = (filteredList) => ({
    type: SEACH_BY_NAME,
    payload: filteredList
  })
  
  export const searchbyName = (searchTerm, users) =>{
      return (dispatch, getState) =>{
        let newList = []
          if(searchTerm)(
              users.filter(user => user.name.first.toLowerCase().includes(searchTerm)).map(filteredUser =>{
                  newList.push(filteredUser)
                  dispatch(searchSuccess(newList))
              })
          )
          else (
              dispatch(searchSuccess())
          )
      }
  }


  const getSorderSuccess = (sortOrder) => ({
    type: GET_SORDER_SUCCESS,
    payload: sortOrder
  })
  //When Request from API fails
  const getSorderFailure = (error) => ({
    type: GET_SORDER_FAILURE,
    payload: error,
  })

  export const getSortValue = (order) =>{
      return (dispatch, getState) => {
          dispatch({type: GET_SORDER_REQUEST})
          if(order){
              dispatch(getSorderSuccess(order))
          }else{
              dispatch(getSorderFailure())
          }
      }

  }

  const sortbyAgeSuccess = (users) => ({
    type: SORT_BY_AGE,
    payload: users
  })
  export const sortByAge = (sortOrder, users) =>{
      return (dispatch, getState) =>{
        switch(sortOrder) {
            case "asc":
                users.sort((a,b)=> (a.dob.age>b.dob.age) ? 1 : -1)
                // list.sort((a, b) => (a.color > b.color) ? 1 : -1)
                console.log(users)
                dispatch(sortbyAgeSuccess(users))
                break;
            case "dsc":
                users.sort((a,b)=> (a.dob.age < b.dob.age) ? 1 : -1 )
                console.log(users)
                dispatch(sortbyAgeSuccess(users))
                break;
            default:
                return users;
        }
      }
  }
