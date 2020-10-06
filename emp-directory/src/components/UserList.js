import React from 'react'
import {useState} from "react"

export default function UserList() {
    const [users, setUsers] = useState([
        {   
            id: 1,
            lName: "Java",
            fName: "Learn",
            gender: "female",
            age: 30,
            isActive: false
        },
        {
            id: 2,
            lName: "Mike",
            fName: "Teach",
            gender: "male",
            age: 60,
            isActive: true
        },
        {
            id: 3,
            lName: "Assemply",
            fName: "move",
            gender: "female",
            age: 85,
            isActive: true
        }

    ])
    const setColor = (status) =>{
        if (status){
            backgroundColor = "green"
        }else{
            backgroundColor = "red"
        }
        
    } 

    return (

        <div>
            {
                users.map((user, id) => (
                    <div key={id} className= "userDiv" style={setColor({isActive})}>
                        <h3>{user.fName, user.Lame}</h3>
                        <p>{user.age, user.gender}</p>
                         
                    </div>
                ))
            }
        </div>
    )
}
