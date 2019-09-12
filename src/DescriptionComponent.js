import React from "react";

function Description(props) {
    const { description } = props

    const fontWeight = {
        fontWeight: 'bold'
    }


    return (

        <div className='date'>
            <h style={fontWeight}> Explanation : </h>{description.explanation}
            <p>Tomorrow's picture: open space </p>
        </div>
    )
}

export default Description;