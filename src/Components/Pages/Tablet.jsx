import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


function Home() {
  const [info, setInfo] = useState([
    { Id: '1', Name: 'Sai', Age: 25, Qualfication: 'BTech' },
    { Id: '2', Name: 'Teja', Age: 26, Qualfication: 'MTech' },
    { Id: '3', Name: 'Pradeep', Age: 30, Qualfication: 'BSE' },
    { Id: '4', Name: 'Kiran', Age: 36, Qualfication: 'MBA' },
  ]);
// -------------------------------------------------------------------------------------------------------------------------------------
const [create,setCreate]=useState();
const [view,setView]=useState();
const [edit,setEdit]=useState();
const [dele,setDele]=useState();
  return (
    
    <div style={{margin:"20px",padding:"10px"}}>
      <InputGroup> 
           <Form.Control
              
              placeholder="Name"
            />
            <Form.Control
              
              placeholder="Age"
            />
            <Form.Control
              
              placeholder="Qualification"
            />
            <Button variant="primary">Create</Button>
          </InputGroup>
        
      <Table striped bordered hover variant="primary">
        <thead>
          <tr>
            <th>NAME</th>
            <th>AGE</th>
            <th>QUALIFICATION</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {info.map((i) => (
            <tr key={i.Id}>
              <td>{i.Name}</td>
              <td>{i.Age}</td>
              <td>{i.Qualfication}</td>
              <td>
                <Button variant="success">View</Button>{' '}
                <Button variant="primary">EDIT</Button>{' '}
                <Button variant="danger">Delete</Button>{' '}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Home;
