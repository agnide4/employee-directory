import React from 'react'
import {useState, useEffect} from "react"
import { useSelector, useDispatch } from "react-redux"
import { getUsers, searchbyName, sortByAge } from '../action';
import { v4 } from "uuid"
import "../App.css"



export default function UserList() {
    // const [users, setUsers] = useState([
    //     // {   
    //     //     id: 1,
    //     //     lName: "Java",
    //     //     fName: "Learn",
    //     //     gender: "female",
    //     //     age: 30,
    //     //     isActive: false
    //     // },
    //     // {
    //     //     id: 2,
    //     //     lName: "Mike",
    //     //     fName: "Teach",
    //     //     gender: "male",
    //     //     age: 60,
    //     //     isActive: true
    //     // },
    //     // {
    //     //     id: 3,
    //     //     lName: "Assemply",
    //     //     fName: "move",
    //     //     gender: "female",
    //     //     age: 85,
    //     //     isActive: true
    //     // }

    // ])
    
   const dispatch = useDispatch();
    const [users, error, searchTerm, filteredList, sortOrder] = useSelector((gState) => [
        gState.users,
        gState.error,
        gState.searchTerm,
        gState.filteredList,
        gState.sortOrder
    ])

    useEffect(() => {
        dispatch(getUsers());
    },[]);

    useEffect(() => {
        dispatch(searchbyName(searchTerm, users))
    },[searchTerm]);

    useEffect(() => {
        dispatch(sortByAge(sortOrder, users))
    },[sortOrder]);

   
    

    

    return (

        <div>
            {
                filteredList ? (
                    filteredList.map((item, id) => (
                        <div key={id = item.id} className= "userDiv" >
                            <span><img src={item.picture.medium} ></img></span> <h3>{item.name.first} {item.name.last} </h3>
                            <p>Gender: {item.gender} Phone number: {item.phone} Age: {item.dob.age}</p>
                        </div>
                        
                    ))

                ): users ? (
                    users.map((user, id) =>(
                        <div  key={id = v4()} className= "userDiv" >
                            <span><img src={user.picture.medium} ></img></span> <h3>{user.name.first} {user.name.last} </h3>
                            <p>Gender: {user.gender} Phone number: {user.phone} Age: {user.dob.age}</p>
                               
                        </div>
                    ))
                ): <p>none</p>
                
            }
        </div>
    )
}
