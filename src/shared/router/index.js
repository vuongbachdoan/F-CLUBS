import { Navigate, createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../../pages/dashboard";
import { Auth } from "../../pages/auth";
import { Login } from "../../pages/auth/components/login";
import { Register } from "../../pages/auth/components/register";
import { Manager } from "../../pages/dashboard/manager";
import { Home } from "../../pages/dashboard/manager/home";
import { ClubHome } from "../../pages/dashboard/club/home";
import { Clubs } from "../../pages/dashboard/manager/clubs";
import { Events } from "../../pages/dashboard/manager/events";
import { Club } from "../../pages/dashboard/club";
import { ClubEvents } from "../../pages/dashboard/club/events";
import { ClubCalendar } from "../../pages/dashboard/club/calendar";
import { ClubMembers } from "../../pages/dashboard/club/members";
import { ClubAbout } from "../../pages/dashboard/club/about";
import { Verify } from "../../pages/auth/components/verify";
import { General } from "../../pages/dashboard/general";
import { RequestClub } from "../../pages/dashboard/general/requestClub";

export const appRouter = createBrowserRouter([
    {
        path: "",
        element: <Navigate to="/auth/login" replace />,
        
    },
    {
        path: "app",
        element: <Dashboard/>,
        children: [
            {
                path: "manager",
                element: <Manager/>,
                children: [
                    {
                        path: "home",
                        element: <Home/>
                    },
                    {
                        path: "clubs",
                        element: <Clubs/>
                    },
                    {
                        path: "events",
                        element: <Events/>
                    }
                ]
            },
            {
                path: "club",
                element: <Club/>,
                children: [
                    {
                        path: "home",
                        element: <ClubHome/>
                    },
                    {
                        path: "events",
                        element: <ClubEvents/>
                    },
                    {
                        path: "calendar",
                        element: <ClubCalendar/>
                    },
                    {
                        path: "members",
                        element: <ClubMembers/>
                    },
                    {
                        path: "about",
                        element: <ClubAbout/>
                    },
                ]
            },
            {
                path: "general",
                element: <General/>,
                children: [
                    {
                        path: "request-club",
                        element: <RequestClub/>
                    }
                ]
            }
        ]
    },
    {
        path: "auth",
        element: <Auth/>,
        children: [
            {
                path: "login",
                element: <Login/>
            },
            {
                path: "sign-up",
                element: <Register/>
            },
            {
                path: "verify",
                element: <Verify/>
            }
        ]
    },
    {
        path: "",
        element: <Navigate to="/auth/login" replace />
    }
])