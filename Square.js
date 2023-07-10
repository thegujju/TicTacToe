import React from 'react'

function Square(props) {
  return (
    <div
        style={{
            border: '1px solid',
            height:'150px' ,
            width : '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize : '50px'
        }}  
        className='square'    
        onClick={props.onClick}
    >
        <h5>{props.value}</h5>
    </div>
  )
}

export default Square