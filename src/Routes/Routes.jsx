import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Providers/Login/Login";
import SignUp from "../Providers/SignUp/SignUp";
import Errorpage from "../Errorpage/Errorpage";
import AddBook from "../AllPage/AddBook";
// import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ScienceBook from "../Pages/Home/NewBook/ScienceBook/ScienceBook";
import HistoricalBook from "../Pages/Home/NewBook/HistoricalBook/HistoricalBook";
import AdventureBook from "../Pages/Home/NewBook/AdventureBook/AdventureBook";
import AllBook from "../Pages/AllBook/AllBook";
import UpdateButton from "../Pages/AllBook/UpdateButton";
import DetailsButton from "../Pages/Home/NewBook/DetailsButton/DetailsButton";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "addbook",
        element: <AddBook></AddBook>,
      },

      {
        path: "scienceBook",
        element: <ScienceBook></ScienceBook>,
      },
      {
        path: "historicalBook",
        element: <HistoricalBook></HistoricalBook>,
      },

      {
        path: "detailsButton",
        element: <DetailsButton></DetailsButton>,
      },
      {
        path: "adventureBook",
        element: <AdventureBook></AdventureBook>,
      },
      {
        path: "/allbook",
        element: <AllBook></AllBook>,
      },

      {
        path: "update/:id",
        element: <UpdateButton></UpdateButton>,
        loader: ({ params }) =>
          fetch(
            ` https://assignment-11-backend-site-b9xypwvmd-somrat-masuds-projects.vercel.app /singleData/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
