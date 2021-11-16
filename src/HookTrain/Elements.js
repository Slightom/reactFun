import styled from "styled-components";

export const Divv = styled.div`
  background: #FF0000;
  color: #000;
`


export const Button = styled.button`
    border: ${({ clickedLast }) => clickedLast ? '1px solid green' : '1px solid #FF0000'};
    padding: 10px;
    margin: 2px;
    background: #eeeeee;

    &:hover{
        background: #cccccc;
    }
`