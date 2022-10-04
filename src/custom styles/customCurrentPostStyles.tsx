import styled from 'styled-components'

const StyledTitle = styled.h1`
  font-size: 1.5em;
  text-align: center;
  text-transform: uppercase;
  color: grey;`;

const StyledContent = styled.h2`
font-size: 14px;
text-align: center;
color: black;`;


const StyledDivBox = styled.div`
border-block: solid;
border-radius: 40px;
max-width: 800px;
margin: 20px auto;
padding:10px;`;

const StyledButton = styled.button`
background-color: grey;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
`

export{
    StyledTitle,
    StyledContent,
    StyledDivBox,
    StyledButton
}