import styled from 'styled-components'

const StyledList = styled.div`
width:100%;
display:inline-block;
flex-direction: column;
border: 2px solid grey;
border-radius: 10px;
justify-content:space-between;
align-items:flex-start;  
padding: 15px;
margin: 20px;`;

const StyledPostId = styled.div`
color: grey;
font-size: 20px;
flex-direction: column;`;

const StyledPostTitle = styled.div`
color: black;
text-transform: uppercase;
font-weight: bold;
text-align: center;
flex-direction: column;`;


const StyledPostBody = styled.div`
font-size: 14px;
color: black;`;

export{
    StyledList,
    StyledPostId,
    StyledPostTitle,
    StyledPostBody
}