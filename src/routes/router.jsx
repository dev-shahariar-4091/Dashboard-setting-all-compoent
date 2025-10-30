import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import User from "../components/pages/Users/User";
import Dashboard from "../components/pages/Dashboard/Dashboard";
import WalletPage from "../components/pages/Wallet/Wallet";
import Login from "../components/pages/Auth/Login";
import EmailVerficiation from "../components/pages/Auth/EmailVerficiation";
import OtpVerification from "../components/pages/Auth/OtpVerification";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/users",
        element: <User />,
      },
      {
        path: "/wallet",
        element: <WalletPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/email-verification",
    element: <EmailVerficiation />,
  },
  {
    path: "/otp-verfication",
    element: <OtpVerification />,
  },
]);
