import {
  createBrowserRouter,
  Navigate,
} from "react-router-dom";

import MainLayout
from "../components/layout/MainLayout";

import ProtectedRoute from "../components/layout/ProtectedRoute"

import Home from "../pages/Home";
import Jobs from "../pages/Jobs";
import Resume from "../pages/Resume";
import InterviewPrep
from "../pages/InterviewPrep";

import Profile from "../pages/Profile";

import Login from "../pages/Login";

import Signup from "../pages/Signup";
import JobDetails from "../pages/JobDetails";

const router = createBrowserRouter([

  {
    path: "/",

    element: <MainLayout />,

    children: [

      // PUBLIC
      {
        index: true,
        element: <Home />,
      },

      // PROTECTED
      {
        path: "jobs",

        element: (
          <ProtectedRoute>
            <Jobs />
          </ProtectedRoute>
        ),
      },

      {
        path: "roles/:roleId",
        element: (
          <ProtectedRoute>
            <JobDetails />
          </ProtectedRoute>
        ),
      },

      {
        path: "resume",

        element: (
          <ProtectedRoute>
            <Resume />
          </ProtectedRoute>
        ),
      },

      {
        path: "interview-prep",

        element: (
          <ProtectedRoute>
            <InterviewPrep />
          </ProtectedRoute>
        ),
      },

      {
        path: "profile",

        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },

      // LOGIN
      {
        path: "login",
        element: <Login />,
      },

      // SIGNUP
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },

  // INVALID ROUTE
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);

export default router;