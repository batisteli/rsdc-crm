import { Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import AppHome from "./pages/AppHome";
import Cases from "./pages/Cases";
import CaseDetails from "./pages/CaseDetails";
import WorkQueue from "./pages/WorkQueue";

function RequireAuth({ children }: { children: JSX.Element }) {
  const role = localStorage.getItem("rsdc_role");
  if (!role) return <Navigate to="/login" replace />;
  return children;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/app"
        element={
          <RequireAuth>
            <AppHome />
          </RequireAuth>
        }
      />
      <Route
        path="/app/cases"
        element={
          <RequireAuth>
            <Cases />
          </RequireAuth>
        }
      />
      <Route
        path="/app/case/:id"
        element={
          <RequireAuth>
            <CaseDetails />
          </RequireAuth>
        }
      />
      <Route
        path="/app/work-queue"
        element={
          <RequireAuth>
            <WorkQueue />
          </RequireAuth>
        }
      />
    </Routes>
  );
}