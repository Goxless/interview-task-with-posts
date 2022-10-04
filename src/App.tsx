//import React, { useEffect, useState } from 'react';
import './App.css';
import useSWR,{mutate} from "swr";
import Skeleton from 'react-loading-skeleton';
import { useNavigate } from 'react-router-dom';
import {StyledList,
        StyledPostId,
        StyledPostTitle,
        StyledPostBody
} from './custom styles/customPostsStyles';


const getData = async (path: string) => {
  const response = await fetch(path);
  return await response.json();
};

function App(){

  // const [pagePosts,setPagePosts] = useState([])
  // const [loadStatus,setLoadStatus] = useState(true)

  const navigation = useNavigate()

  const { data } = useSWR("https://jsonplaceholder.typicode.com/posts",
                          getData,
                          {onSuccess: () =>{
                            data.forEach(
                              (post:any) => 
                                mutate(`http://localhost:3000/post/${post.id}`,post)
                            )
                          }});

  
  // useEffect(() => {
  //     setTimeout(() => {
  //       //setPagePosts(posts)
  //     }, 5000);
  // }, [data]);
  
  return(

    <div className="App">
    {data ? data.map((todo:any) => 
      (
        <StyledList key={todo.id} onClick = {() => {navigation(`/post/${todo.id}`)}}>
          <StyledPostId>
            {todo.id }
          </StyledPostId> 

         <StyledPostTitle>
         {todo.title}
          </StyledPostTitle> 
          
          <StyledPostBody>
          {todo.body}
          </StyledPostBody>         
        </StyledList>
      )) : <Skeleton count ={3}/>}

    </div>
  )
}

export default App;
