import React from "react";

function Date(props){
     const {date}= props

return (
        <div>
       <time className='date' dateTime={date.date}>{date.date}</time>
       </div>
)}

export default Date;
