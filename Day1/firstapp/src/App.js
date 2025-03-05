import logo from './logo.svg';
import './App.css';
import Product from'./Product';
import Category from'./Category';
import Welcome from './Welcome';
import Employee from './Employee';
import Student from'./Student';
import { Department, Subject } from './Component';
import Greet from'./Greet';
import { Counter } from './Counter';





function App() {
  return (
    <div>
    <Welcome></Welcome>
    <Counter>Click</Counter>
    
    <Employee name="AAA" salary="90000"></Employee>
    <Student name="GGG" dob="11-11-2011"></Student>
    <Department name="Engg" dept="CSE"></Department>
    <Subject name="DBMS" time="12:00"></Subject>
    <Greet name="Arya"></Greet>
    <Product Pname="Iphone"></Product>
    <Category Cname="Electronics"></Category>
   
    </div>
   
  );
}

export default App;
