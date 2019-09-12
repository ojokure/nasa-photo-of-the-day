import React from "react";
import styled from 'styled-components';

const StyledDescription = styled.div`
background: #f44fbf;
color: #fff;
text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #00DEFF, 0 0 70px #00DEFF, 0 0 80px #00DEFF, 0 0 100px #00DEFF, 0 0 150px #00DEFF;
&:hover {
    color: #ff2525;
    font-weight: bold;
  }

   `;


function Description(props) {
    const { description } = props

    const fontWeight = {
        fontWeight: 'bold'
    }
    return (

        <StyledDescription>
            <h style={fontWeight}> Explanation : </h>{description.explanation}
            <p>Tomorrow's picture: open space </p>
        </StyledDescription>
    )
}

export default Description;