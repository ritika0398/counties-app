import { createRoot } from "react-dom/client";
import App from './App.jsx'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./assets/components/Home.jsx";
import Contact from "./assets/components/Contact.jsx";
import Error from "./assets/components/Error.jsx";
import CountryDetails from "./assets/components/CountryDetails.jsx";
import LoadingPage from "./assets/components/LoadingPage.jsx";
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/:country',
                element: <CountryDetails />,

            }
        ]
    },



]);
const root = createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={router} />);