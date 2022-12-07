import { BrowserHistory } from "history";
import React from "react";
import { Route, Router, Routes } from "react-router-dom";

import CreateProduct from "./components/Dashboard/CreateProduct";
import ECommerce from "./components/Dashboard/ECommerce";
import Permission from "./components/Dashboard/Permission";
import Roles from "./components/Dashboard/Roles";
import PrivateRoute from "./components/RequireAuth/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
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
          <Route path="/dashboard/crm" element={<CreateProduct />} />
        </Route>
        <Route
          path="/roles-permission"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path="/roles-permission/roles" element={<Roles />} />
          <Route path="/roles-permission/permissions" element={<Permission />} />
        </Route>
      </Routes>
    </HistoryRouter>
  );
};

export default App;
