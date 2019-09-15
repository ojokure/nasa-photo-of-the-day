import React from "react";
import styled from 'styled-components';

const StyledDescription = styled.div`
background: #f44fbf;
color: #f953cc;
font-family:"ABeeZee";
backdrop-filter: greyscale(0.8);
  background: linear-gradient(
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0.3)
  );
&:hover {
    color: pink;
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