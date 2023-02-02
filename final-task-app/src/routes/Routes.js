import { createBrowserRouter } from "react-router-dom"
import { ProtectedRoute } from "./ProtectedRoute"
import { Layout } from "./Layout";
import SignIn from "pages/signin/SignIn";
import SignUp from "pages/signup/SignUp";
import Profile from "pages/profile/Profile";
import CreateCompany from "pages/createCompany/CreateCompany";
import CompanyDetail from "pages/companyDetail/CompanyDetail";
import Companies from "pages/companies/Companies";
import Loading from "components/loading/Loading";


export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <Loading>
              <SignIn />
            </Loading>
          ),
        },
        {
          path: "signup",
          element: (
            <Loading>
              <SignUp />
            </Loading>
          ),
        },
        {
          path: "profile",
          element: (
            <Loading>
              <ProtectedRoute>
                <Profile />,
              </ProtectedRoute>
            </Loading>
          )
        },
        {
          path: "company/",
          children: [
            {
              index: true,
              element: (
                <Loading>
                  <ProtectedRoute>
                    <Companies />
                  </ProtectedRoute>
                </Loading>
              ),
            },
            {
              path: "detail/:id",
              element: (
                <Loading>
                  <ProtectedRoute>
                    <CompanyDetail />
                  </ProtectedRoute>
                </Loading>
              ),
            },
            {
              path: "create",
              element: (
                <Loading>
                  <ProtectedRoute>
                    <CreateCompany />
                  </ProtectedRoute>
                </Loading>
              )
            },
          ]
        },
        {
          path: "admin/",
          element: (
            <Loading>
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            </Loading>
          )
        }
      ]
    }
  ]
)