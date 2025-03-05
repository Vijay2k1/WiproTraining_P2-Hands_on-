import logo from './logo.svg';
import './App.css';
import Second from './Second';
import First from './First';
import Third from './Third';
import Fourth from './Fourth';
import Student from './Student';
import Student1 from './Student1';
import Button from './Button';

function App() {
  return (
    <div >
   Hello, World!
   <First />
   <Second />
   <Third />
   <Fourth />
   <Student name="Vijay" address="Bangalore" scores="98,92,95,90"  ></Student>
   <Student1 studentname="Ajay" studentaddress="Mysore" studentgrades="A"></Student1>
   <Button />

    </div>
  );
}

export default App;
