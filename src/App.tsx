import React from 'react';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  Outlet,
  Navigate,
} from 'react-router-dom';
import Navbar from './components/molecules/navBar/Navbar';
import LeftBar from './components/molecules/leftBar.tsx/LeftBar';
// import { AuthContext } from './context/authContext';
import { DarkModeContext } from './context/darkModeContext';
import { useContext } from 'react';
import Home from './pages/home/Home';
import NotFoundPage from './pages/notFound/notfound';
import Archive from './pages/archivePage/ArchivePage';
import Detailpage from './pages/detailPage/Detailpage';
import EditDiary from './pages/editDiary/EditDiary';
// import RightBar from './components/molecules/rightBar/RightBar';

function App() {
  const currentUser = localStorage.getItem('userToken');

  // console.log(currentUser, 'here current');
  const { darkMode } = useContext(DarkModeContext);

  // console.log('dark mode', darkMode);

  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div style={{ display: 'flex' }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          {/* <RightBar /> */}
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({ children }: any) => {
    console.log('current or not', currentUser);
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/archive',
          element: <Archive />,
        },
        {
          path: '/detailpage/:id',
          element: <Detailpage />,
        },
        {
          path: '/editpage/:id',
          element: <EditDiary />,
        },
      ],
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
