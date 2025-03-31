import { RouterProvider, createBrowserRouter } from "react-router";
import HomePage from "./pages/Homepage";
import RootLayout from "./pages/layout/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {index: true, Component: HomePage},
    ],
  },
]);


export default function App() {
  return <RouterProvider router={router}/>;
}
