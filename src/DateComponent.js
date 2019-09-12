import React from "react";
import styled from "styled-components";

const SytledDiv = styled.div`
  background: #b91d73;
  color: #0078d7;
  opacity:0.4;
  font-family: sans-serif;
  border:none;
  width:100%;
  padding:10px 0;
  &:hover {
        font-weight: bold;
      }

  input {
    font-family: sans-serif;
    color:#25afa2;
    border-radius:20%;
    padding:2px;
    background:#e0ebf2;
    &:hover {
        color: blue;
        font-weight: bold;
      }
  }
`;
function Date(props) {
  const { today, handleChange } = props;

  return (
    <SytledDiv>
      Select Date{" "}
      <form action="">
      <input
        onChange={handleChange}
        value={today}
        type="date"
        min="1990-09-09"
        max={today}
      />
      </form>
    </SytledDiv>
  );
}

export default Date;
