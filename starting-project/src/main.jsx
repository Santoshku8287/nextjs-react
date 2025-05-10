import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Posts, {loader as postLoader} from './routes/Posts'
import NewPost, {action as newPostAction} from './routes/NewPost'
import PostDetails, {loader as postDetailsLoader} from './routes/PostDetails'
import RootLayout from './routes/RootLayout';
import './index.css'




const router = createBrowserRouter([
  { path: '/', element: <RootLayout/>, 
    children:[
        { path: '/', 
          element: <Posts/>, 
          loader: postLoader,
          children:
          [
            { path: '/create-post', element: <NewPost/>, action: newPostAction},
            { path: '/:id', element: <PostDetails/>, loader: postDetailsLoader}
          ],
        },
    ]},
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
