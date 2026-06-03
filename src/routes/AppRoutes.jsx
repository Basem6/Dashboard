import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import ApplicationPage from "../pages/ApplicationPage";
import DashboardPage from "../pages/DashboardPage";
import DocumentsPage from "../pages/DocumentsPage";
import FundingPage from "../pages/FundingPage";
import SettingsPage from "../pages/SettingsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: "application", element: <ApplicationPage /> },
      { path: "funding", element: <FundingPage /> },
      { path: "documents", element: <DocumentsPage /> },
      { path: "settings", element: <SettingsPage /> },
    ],
  },
]);
