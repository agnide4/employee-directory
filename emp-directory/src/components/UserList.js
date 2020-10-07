import React from 'react'
import {useState, useEffect} from "react"
import { useSelector, useDispatch } from "react-redux"
import { getUsers } from '../action';
import { v4 } from "uuid"



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
    const [users, error] = useSelector((gState) => [
        gState.users,
        gState.error
    ])

    useEffect(() => {
        dispatch(getUsers());
    },[]);

    console.log(users)
    

    const setColor = (status) =>{
        if(status){
            return {background: "green"}

        }else {
            return {background: "red"}
        }
    }

    return (

        <div>
            {
                users ? (
                    users.map((user, id) => (
                        <div  key={id = v4()} className= "userDiv" style={setColor(user.isActive)}>
                            <span><img src={user.picture.medium} ></img></span> <h3>{user.name.first} {user.name.last} </h3>
                            <p>Gender: {user.gender} Phone number: {user.phone} Age: {user.dob.age}</p>
                               
                        </div>
                    ))

                ): <p>No user added</p>
                
                
            }
        </div>
    )
}
