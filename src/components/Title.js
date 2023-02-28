import React from 'react'

function Title() {
  console.log("Render Title");
  return (
    <h1>Title</h1>
  )
}

export default React.memo(Title)