import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const EmployeeForm = ({ employee = {}, onSave }) => {
  const formik = useFormik({
    initialValues: {
      name: employee.name || '',
      address: employee.address || '',
      dept: employee.dept || '',
      manager: employee.manager || ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      address: Yup.string().required('Address is required'),
      dept: Yup.string().required('Department is required'),
      manager: Yup.string().required('Manager is required')
    }),
    onSubmit: async (values) => {
      try {
        if (employee.id) {
          await axios.put(`http://localhost:5000/api/employees/${employee.id}`, values);
        } else {
          await axios.post('http://localhost:5000/api/employees', values);
        }
        onSave();
      } catch (error) {
        console.error('Error saving employee:', error);
      }
    }
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          isInvalid={formik.touched.name && formik.errors.name}
        />
        <Form.Control.Feedback type="invalid">{formik.errors.name}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter address"
          name="address"
          onChange={formik.handleChange}
          value={formik.values.address}
          isInvalid={formik.touched.address && formik.errors.address}
        />
        <Form.Control.Feedback type="invalid">{formik.errors.address}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formDept">
        <Form.Label>Department</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter department"
          name="dept"
          onChange={formik.handleChange}
          value={formik.values.dept}
          isInvalid={formik.touched.dept && formik.errors.dept}
        />
        <Form.Control.Feedback type="invalid">{formik.errors.dept}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formManager">
        <Form.Label>Manager</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter manager name"
          name="manager"
          onChange={formik.handleChange}
          value={formik.values.manager}
          isInvalid={formik.touched.manager && formik.errors.manager}
        />
        <Form.Control.Feedback type="invalid">{formik.errors.manager}</Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit">
        Save
      </Button>
    </Form>
  );
};

export default EmployeeForm;
