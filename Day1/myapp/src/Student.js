import React from 'react'

export const Student = ({name, address, scores}) => {
  return (
    <div>
        <h1>Student Details</h1>
        <p>Name: {name}</p>
        <p>Adress: {address}</p>
        <p>Scores: {scores}</p>
        </div>
  )
}

export default Student;

