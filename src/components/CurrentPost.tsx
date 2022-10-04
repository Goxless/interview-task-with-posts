import React, { useEffect, useState } from 'react';
import '../App.css';
import useSWR,{SWRConfig} from "swr";
import { useParams } from 'react-router-dom';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import {
  StyledTitle,
  StyledContent,
  StyledDivBox,
  StyledButton
} from '../custom styles/customCurrentPostStyles';


const getData = async (path: string) => {
  const response = await fetch(path);
  return await response.json();
};

function CurrentPost(){
  const { data } = useSWR("https://jsonplaceholder.typicode.com/posts", getData);
  
  const {postId} = useParams()
  useEffect(() => {
    console.log("data",data)
  }, [data])

  return(
    <div>
      <Link to="/">
        <StyledButton>
              return to the posts
        </StyledButton>
      </Link>
      <StyledDivBox>
        <StyledTitle>{ data && data[Number(postId)-1].title}</StyledTitle>
        <StyledContent>{ data && data[Number(postId)-1].body}</StyledContent>
      </StyledDivBox>
    </div>
  )
}

export default CurrentPost;
