import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Home() {
  const [info, setInfo] = useState([]);

  const [newEntry, setNewEntry] = useState({
    Name: '',
    Age: '',
    Qualification: '',
  });

  const [editIndex, setEditIndex] = useState(null);
// ------------------------------------------------------Input -----------------------------------------------------------------------------
  const handleNameChange = (e) => {
    setNewEntry({ ...newEntry, Name: e.target.value });
  };

  const handleAgeChange = (e) => {
    setNewEntry({ ...newEntry, Age: e.target.value });
  };

  const handleQualificationChange = (e) => {
    setNewEntry({ ...newEntry, Qualification: e.target.value });
  };
// ---------------------------------------------Buttons function-----------------------------------------------------------------------------------------
  const handleCreate = () => {
    if (editIndex !== null) {
      const updatedInfo = [...info];
      updatedInfo[editIndex] = newEntry;
      setInfo(updatedInfo);
      setEditIndex(null);
    } else {
      setInfo([...info, newEntry]);
    }
    setNewEntry({ Name: '', Age: '', Qualification: '' });
  };

  const handleEdit = (index) => {
    const selectedEntry = info[index];
    setNewEntry(selectedEntry);
    setEditIndex(index);
  };

  const handleView = (index) => {
    const selectedEntry = info[index];
    console.log('View:', selectedEntry);
    // Implement logic to display the selected entry details
  };

  const handleDelete = (index) => {
    const updatedInfo = info.filter((_, i) => i !== index);
    setInfo(updatedInfo);
  };
// ----------------------------------------------------------------------------------------------------------
  return (
    <div style={{ margin: '20px', padding: '10px' }}>
      <InputGroup>
        <Form.Control onChange={handleNameChange} placeholder="Name" value={newEntry.Name} />
        <Form.Control onChange={handleAgeChange} placeholder="Age" value={newEntry.Age} />
        <Form.Control onChange={handleQualificationChange} placeholder="Qualification"value={newEntry.Qualification}/>

        <Button onClick={handleCreate} variant="primary">
          {editIndex !== null ? 'Update' : 'Create'}
        </Button>

      </InputGroup>
{/* ------------------------------------------------------------------------------------------------------------------------------------ */}
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
          {info.map((i, index) => (
            <tr>
              <td>{i.Name}</td>
              <td>{i.Age}</td>
              <td>{i.Qualification}</td>
              <td>
                <Button onClick={() => handleView(index)} variant="success">
                  View
                </Button>{' '}
                <Button onClick={() => handleEdit(index)} variant="primary">
                  Edit
                </Button>{' '}
                <Button onClick={() => handleDelete(index)} variant="danger">
                  Delete
                </Button>{' '}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Home;
