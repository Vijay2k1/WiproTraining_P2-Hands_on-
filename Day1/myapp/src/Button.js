import React from 'react'

export const Button = () => {
    const handleHelloClick = () =>{
        alert("Hello!");
    }

    const handleByeClick = () =>{
        alert("Bye!");
    }
  return (
    <div>
        <button onClick={handleHelloClick}>Say hello</button>
        <button onClick={handleByeClick}>say Bye</button>
    </div>
  )
}

export default Button;
