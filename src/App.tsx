import { BrowserHistory } from "history";
import React from "react";
import { Route, Router, Routes } from "react-router-dom";

import PrivateRoute from "./components/RequireAuth/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import CRM from "./pages/Menu/CRM";
import ECommerce from "./pages/Menu/ECommerce";
import Register from "./pages/Register";
import { history } from "./utils/history";

// Use routes to render components Login based on the path /login
export interface HistoryRouterProps {
  history: BrowserHistory;
  basename?: string;
  children?: React.ReactNode;
}

export function HistoryRouter({ basename, children, history }: HistoryRouterProps) {
  let [state, setState] = React.useState({
    action: history.action,
    location: history.location,
  });

  React.useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      basename={basename}
      children={children}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  );
}

const App = () => {
  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path="/dashboard/ecommerce" element={<ECommerce />} />
          <Route path="/dashboard/crm" element={<CRM />} />
        </Route>
      </Routes>
    </HistoryRouter>
  );
};

export default App;
