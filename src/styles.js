import styled from 'styled-components'

export const Input = styled.input`
padding: 0.5em;
margin: 0.5em;
width: 25em;
height: 4em;
color: ${props => props.inputColor || "palevioletred"};
background: papayawhip;
border: none;
border-radius: 3px;;
`;

export const Label = styled.label`
  border: 0px solid #333;
  color: palevioletred;
  font-size: 15px;
  height: 30em;
  width: ${props => props.fullWidth ? '100%' : '500px'};
`;
export const Button = styled.button`
background: ${props => props.primary ? "palevioletred" : "white"};
color: ${props => props.primary ? "white" : "palevioletred"};

font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
`;