import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./components/Login.jsx";
import {ChakraProvider} from "@chakra-ui/react";
import SignUp from "./components/SignUp.jsx";
import Dashboard from "./components/Dashboard.jsx";

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
