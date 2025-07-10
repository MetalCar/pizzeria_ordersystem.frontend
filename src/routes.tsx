import { createBrowserRouter, redirect } from "react-router";
import Home from "./pages/Home";
import App from "./App";
import Register from "./pages/Register";
import axios from "axios";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/register",
        Component: Register,
        action: async ({ request }) => {
          const formData = await request.formData();
          const username = formData.get("username");
          const password = formData.get("password");

          try {
            const userResponse = await axios.post(
              "http://localhost:5087/api/Auth/register",
              {
                username,
                password,
              }
            );

            if (userResponse.status === 200) {
              // ToDo: set user here
              return redirect("/login");
            } else {
              return { error: userResponse.data };
            }
          } catch (e) {
            return { error: "Fehler beim Registrieren", details: e };
          }
        },
      },
    ],
  },
]);
