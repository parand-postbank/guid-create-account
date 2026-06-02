import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Usercontex from "../contex/Usercontex";

function App() {
  const router = createBrowserRouter([
    { path: "/create-bank-account", element: <Dashboard></Dashboard> },
    
  ]);
  return (
    <>
      <Usercontex>
        <RouterProvider  router={router}></RouterProvider>
      </Usercontex>
    </>
  );
}

export default App;
