import React, { useState, useEffect } from 'react'

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = e => {
    console.log("logMousePosition");
    setX(e.clientX);
    setY(e.clientY);
  }

  useEffect(() => {
    console.log("useEffect");
    window.addEventListener("mousemove", logMousePosition)

    return () => {
      console.log("Unmouting");
      window.removeEventListener("mousemove", logMousePosition)
    }
  }, [])

  return (
    <div>
      X - {x}
      <br />
      Y - {y}
    </div>
  )
}

export default HookMouse