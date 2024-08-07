import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";
import { Auth } from "./pages/auth";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      // element error
      element: <Dashboard />,
      errorElement: (
        <div>
          <h1>Error!</h1>
        </div>
      ),
    },
    {
      path: "/auth",
      // element error
      element: <Auth />,
      errorElement: (
        <div>
          <h1>Error!</h1>
        </div>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
