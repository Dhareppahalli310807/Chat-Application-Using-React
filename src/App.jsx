import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ChatScreen from './pages/ChatScreen';
import Layout from './pages/Layout';
import BlankChat from './pages/BlankChat';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <BlankChat />,
      },
      {
        path: 'chat/:id',
        element: <ChatScreen />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
