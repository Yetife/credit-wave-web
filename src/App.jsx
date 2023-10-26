import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./pages/Login.jsx";
import {ChakraProvider} from "@chakra-ui/react";
import SignUp from "./pages/SignUp.jsx";
import Dashboard from "./pages/Dashboard.jsx";

const router = createBrowserRouter([
     {path: '/', element: <Login />},
     {path: '/sign-up', element: <SignUp />},
     {path: '/dashboard', element: <Dashboard/>},
])
function App() {
  return (
      <ChakraProvider>
          <RouterProvider router={router}/>
      </ChakraProvider>
  )
}

export default App
