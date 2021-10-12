import React from 'react'
import ReactDOM from 'react-dom';
const Renderlist= () =>{
  const stationary = ["pen","pencil","eraser","scale"];
  return(<center>
    <div style={{backgroundColor:'pink',fontWeight:'bold'}}>
      <h1><u>Rendering list</u></h1>
      {
 stationary.map((stationary)=>{
	return <ol>{stationary}</ol>;
})
      }
    </div>
    </center>
  )
}
export default Renderlist;