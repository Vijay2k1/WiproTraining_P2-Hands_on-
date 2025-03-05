import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Table } from 'react-bootstrap';
import EmployeeForm from './EmployeeForm';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null);

  useEffect(() => {
    async function fetchEmployees() {
      const response = await axios.get('http://localhost:5000/api/employees');
      setEmployees(response.data);
    }
    fetchEmployees();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/employees/${id}`);
    setEmployees(employees.filter(emp => emp.id !== id));
  };

  const handleEdit = (employee) => {
    setEditingEmployee(employee);
  };

  const handleSave = () => {
    setEditingEmployee(null);
    // Re-fetch employees after save
    async function fetchEmployees() {
      const response = await axios.get('http://localhost:5000/api/employees');
      setEmployees(response.data);
    }
    fetchEmployees();
  };

  return (
    <div>
      <h1>Employee List</h1>
      <Button onClick={() => setEditingEmployee({})}>Add New Employee</Button>

      {editingEmployee && <EmployeeForm employee={editingEmployee} onSave={handleSave} />}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Department</th>
            <th>Manager</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp.id}>
              <td>{emp.name}</td>
              <td>{emp.address}</td>
              <td>{emp.dept}</td>
              <td>{emp.manager}</td>
              <td>
                <Button onClick={() => handleEdit(emp)}>Edit</Button>
                <Button onClick={() => handleDelete(emp.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default EmployeeList;
