import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import User from "../components/pages/Users/User";
import Dashboard from "../components/pages/Dashboard/Dashboard";
import WalletPage from "../components/pages/Wallet/Wallet";
import Login from "../components/pages/Auth/Login";
import EmailVerficiation from "../components/pages/Auth/EmailVerficiation";
import OtpVerification from "../components/pages/Auth/OtpVerification";
import Vendor from "../components/Vendor/Vendor";
import Customer from "../components/Customer/Customer";
import Income from "../components/Income/Income";
import Settings from "../components/Settings/Settings";
import ChangePass from "../components/Settings/ChangePass";
import ForgotPassword from "../components/Settings/ForgotPassword";
import PrivacyPolicy from "../components/Settings/PrivacyPolicy";
import About from "../components/Settings/About";
import Support from "../components/Settings/Support";
import TeamService from "../components/Settings/TeamService";
import NotificationList from "../components/Settings/NotificationList";
import SetNewPass from "../components/pages/Auth/SetNewPass";

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
      {
        path : "/vendor",
        element :<Vendor/>
      }
      ,
      {
        path : "/customer",
        element: <Customer/>
      },
      {
        path: '/income',
        element : <Income/>
      },
     {
      path : '/settings',
      element : <Settings />,
      children:[
        {
          path : 'changepassword',
          element: <ChangePass/>
        },
        {
           path :'/settings/forgot-password',
          element: <ForgotPassword />
        },
        {
          path :"/settings/privacy-policy",
          element: <PrivacyPolicy />
        },
        {
           path :"/settings/about",
           element: <About />
        },
        {
          path : "/settings/support",
          element : <Support />
        },
         {
          path : "/settings/terms",
          element : <TeamService />
        },
        {
          path: "/settings/notifications",
          element : <NotificationList />
        }
      ]
     }

    ],
  },
  // Child path has been finished line of 28
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
  {
    path :"/setnew-password",
    element : <SetNewPass />
  }
]);
