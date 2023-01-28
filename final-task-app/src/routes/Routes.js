import { createBrowserRouter } from "react-router-dom"
import { ProtectedRoute } from "./ProtectedRoute"
import { Layout } from "./Layout";
import SignIn from "pages/signin/SignIn";
import SignUp from "pages/signup/SignUp";
import Profile from "pages/profile/Profile";
import CreateCompany from "pages/createCompany/CreateCompany";
import CompanyDetail from "pages/companyDetail/CompanyDetail";
import Companies from "pages/companies/Companies";
import CompanyEdit from "pages/companyEdit/CompanyEdit";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "signin",
                element: <SignIn />,
            },
            {
                path: "signup",
                element: <SignUp />,
            },
            {
                path: "profile",
                element:
                    (
                        <ProtectedRoute>
                            <Profile />,
                        </ProtectedRoute>
                    )
            },
            {
                path: "company/",
                children: [
                    {
                        path: "detail",
                        element:
                            (
                                <ProtectedRoute>
                                    <CompanyDetail />
                                </ProtectedRoute>
                            ),
                    },
                    {
                        path: "create",
                        element:
                            (
                                <ProtectedRoute>
                                    <CreateCompany />
                                </ProtectedRoute>
                            )
                    },
                    {
                        path: "all",
                        element:
                            (
                                <ProtectedRoute>
                                    <Companies />
                                </ProtectedRoute>
                            )
                    },
                    {
                        path: "edit",
                        element:
                            (
                                <ProtectedRoute>
                                    <CompanyEdit />
                                </ProtectedRoute>
                            )
                    },
                ]
            },
            {
                path: "admin/",
                element:
                    (
                        <ProtectedRoute>
                            <Profile />
                        </ProtectedRoute>
                    )
            }
        ]
    }
])