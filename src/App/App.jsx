import Create_bank_account from "../pages/create_bank_account/Create_bank_account";
import Home_page from "../pages/home_page/home_page";
import { createHashRouter, RouterProvider } from "react-router-dom";

function App() {

  const router = createHashRouter([
    { path: "/", element: <Create_bank_account /> },
    { path: "/home", element: <Home_page /> }
  ]);

  return<><Create_bank_account></Create_bank_account></>;
}

export default App;
