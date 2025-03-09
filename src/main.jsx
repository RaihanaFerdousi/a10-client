import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root.jsx";
import Home from "./Components/Home/Home.jsx";
import Login from "./Components/Login/Login.jsx";
import SignUp from "./Components/SignUp/SignUp.jsx";
import MovieDetails from "./Components/MovieDetails/MovieDetails.jsx"; // MovieDetails Component
import AllMovies from "./Components/AllMovies/AllMovies.jsx"; // AllMovies Component
import AddMovies from "./Components/AddMoves/AddMovies.jsx";
import MyFavorites from "./Components/MyFavorites/MyFavorites.jsx";
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";
import OurTeam from "./Components/ourTeam/OurTeam.jsx";
import AboutUs from "./Components/AboutUs/AboutUs.jsx";
import OurProducts from "./Components/OurProducts/OurProducts.jsx";
import AuthProvider from "./Firebase/AuthContext.jsx";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorPage: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signUp",
        element: <SignUp />,
      },
      {
        path: "ourTeam",
        element: <OurTeam />,
      },
      {
        path: "aboutUs",
        element: <AboutUs />,
      },
      {
        path: "ourProducts",
        element: <OurProducts />,
      },
      {
        path: "movies/:id",
        element: (
          // <PrivateRoute>
            <MovieDetails />
          // </PrivateRoute>
        ),
      },
      {
        path: "allMovies",
        element: <AllMovies />,
      },
      {
        path: "addMovies",
        element: (
          // <PrivateRoute>
            <AddMovies />
          // </PrivateRoute>
        ),
      },
      {
        path: "myFavorites",
        element: (
          // <PrivateRoute>
            <MyFavorites />
          // </PrivateRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
