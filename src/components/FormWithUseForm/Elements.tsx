import styled from 'styled-components'

export const FormContainer = styled.div`
    display: grid;
    background: #0e101c;
    max-width: 400px;
    margin: 0 auto;
`

export const Input = styled.input`
display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border: 1px solid white;
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 14px;
`

export const Label = styled.label`
line-height: 2;
text-align: left;
display: block;
margin-bottom: 13px;
margin-top: 20px;
color: white;
font-size: 14px;
font-weight: 200;
`

export const Error = styled.span`
    color: red;
`