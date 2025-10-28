import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import User from "../components/pages/Users/User";
import Dashboard from "../components/pages/Dashboard/Dashboard";
import WalletPage from "../components/pages/Wallet/Wallet";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout />,
        children: [
            {
                path: "/",
                element: <Dashboard />
            },
            {
                path: "/users",
                element: <User />
            },
            {
                path: "/wallet",
                element: <WalletPage/>
            }
        ]

    }
])