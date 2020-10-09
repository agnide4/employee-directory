import React from 'react'



export default function home() {


    return (

        <div>
            <h1>This is a react based app with functionality of a directory</h1>

                <h2>Apped was created using "create-react-app</h2>
                <p> Other techlogies used are react-redux, redux thunk, react-bootstrap, react-router and bootstrap cdn</p>
                <p>Within the scope of this assignment no database is required and all data is reset once page is refreshed</p>
                <p> Api Used for random user generation is randomme.com</p>
                
                <h2> App relies mainly on hooks to pass states from component to component</h2>
                <p> User can sort list by age ascending and descending</p>
                <p> User can search by first name and component rerenders as you type in seacr bar. If no match original state is returned</p>

                
                <h3>Checkout git repo for code details https://github.com/agnide4/employee-directory </h3>
            
        </div>
    )
}
