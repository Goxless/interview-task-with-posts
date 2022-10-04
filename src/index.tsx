import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CurrentPost from './components/CurrentPost';
import  { SkeletonTheme } from 'react-loading-skeleton'
import {SWRConfig} from "swr";
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
  <SkeletonTheme baseColor="#202020" highlightColor="#444">
    <SWRConfig 
      value={{
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
      }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/post/:postId" element={< CurrentPost />}/>
          <Route path="*" element={<App/>} />
        </Routes>
      </BrowserRouter>

    </SWRConfig>
  </SkeletonTheme>
  </React.StrictMode>
);

