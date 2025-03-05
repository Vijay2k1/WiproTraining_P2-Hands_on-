
import  react, { Component } from 'react'

export default class Student extends Component {
  render() {
    return (
      <div>
        <h1>Details of the Students</h1>
        <p>
            <h4>Student Name: {this.props.studentname}</h4>
            <h4>Student Address: {this.props.studentaddress}</h4>
            <h4>Student Grades: {this.props.studentgrades}</h4>
        </p>
        </div>
    )
  }
}
