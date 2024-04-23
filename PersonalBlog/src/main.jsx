import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/store.js';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import { AuthLayout, SignUp } from './component/index.js';
import LoginPage from './pages/LoginPage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import AllPostPage from './pages/AllPostPage.jsx';
import AddPostPage from './pages/AddPostPage.jsx';
import EditPostPage from './pages/EditPostPage.jsx';
import Post from './pages/PostPage.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/login',
        element:(
          <AuthLayout authentication={false}>
            <LoginPage/>
          </AuthLayout>
        )
      },
      {
        path: '/signup',
        element:(
          <AuthLayout authentication={false}>
            <SignupPage/>
          </AuthLayout>
        )
      },
      {
        path: '/all-posts',
        element:(
          <AuthLayout authentication>
            {" "}
            <AllPostPage/>
          </AuthLayout>
        )
      },
      {
        path: '/add-post',
        element:(
          <AuthLayout authentication>
            {" "}
            <AddPostPage />
          </AuthLayout>
        )
      },
      {
        path: '/edit-post/:slug',
        element:(
          <AuthLayout authentication>
            {" "}
            <EditPostPage />
          </AuthLayout>
        )
      },
      {
        path: '/post/:slug',
        element:<Post />
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
     <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
