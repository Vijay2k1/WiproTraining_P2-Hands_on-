let employees = [
    { id: 1, name: 'Vijay', address: '123 Main Bangalore', dept: 'Engineering', manager: 'Smith' },
    { id: 2, name: 'Akash', address: '456 Main Mysore', dept: 'HR', manager: 'Bob' }
  ];
  
  // Get all employees
  exports.getAllEmployees = (req, res) => {
    res.json(employees);
  };
  
  // Get a single employee by ID
  exports.getEmployeeById = (req, res) => {
    const employee = employees.find(emp => emp.id === parseInt(req.params.id));
    if (!employee) return res.status(404).send('Employee not found');
    res.json(employee);
  };
  
  // Create a new employee
  exports.createEmployee = (req, res) => {
    const { name, address, dept, manager } = req.body;
    const newEmployee = {
      id: employees.length + 1,
      name,
      address,
      dept,
      manager
    };
    employees.push(newEmployee);
    res.status(201).json(newEmployee);
  };
  
  // Update an existing employee
  exports.updateEmployee = (req, res) => {
    const employee = employees.find(emp => emp.id === parseInt(req.params.id));
    if (!employee) return res.status(404).send('Employee not found');
  
    const { name, address, dept, manager } = req.body;
    employee.name = name || employee.name;
    employee.address = address || employee.address;
    employee.dept = dept || employee.dept;
    employee.manager = manager || employee.manager;
  
    res.json(employee);
  };
  
  // Delete an employee
  exports.deleteEmployee = (req, res) => {
    const employeeIndex = employees.findIndex(emp => emp.id === parseInt(req.params.id));
    if (employeeIndex === -1) return res.status(404).send('Employee not found');
  
    employees.splice(employeeIndex, 1);
    res.status(204).send();
  };
  