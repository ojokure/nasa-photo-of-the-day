import React from "react";

function Description(props){
    const {description}= props

const fontWeight = {
    fontWeight :'bold'
}


return (

      <div  className='date'> <h  style={fontWeight}> Explanation : </h>{description.explanation} </div>
)}

export default Description;