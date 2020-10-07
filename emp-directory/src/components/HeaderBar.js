import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import {getSvalue} from "../action"

export default function HeaderBar() {
  const [searchTerm, error] = useSelector((gState) => [
    gState.searchTerm,
    gState.error
])
  const dispatch = useDispatch()
  const handleChange = event => {
  let term = event.target.value
  dispatch(getSvalue(term))
    
  };



    return (
        <div>
            <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">User Directory</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Sort List by" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Department</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Alphabetically</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Seniority</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="search" value={searchTerm} onChange={handleChange} />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

