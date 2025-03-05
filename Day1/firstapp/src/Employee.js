import Student from './Student';
import './Employee.css';
const Employee = ({name,salary})=>{
    return(
        <div>
            <h2>EmployeeDetails</h2>
            <h3>name:{name}</h3>
            <h3>salary:{salary}</h3>

            <h5>Students Details</h5>
            <Student name="HHH" dob="10-01-2001"></Student>
        </div>
    )
        
    }

    export default Employee;
    
    

