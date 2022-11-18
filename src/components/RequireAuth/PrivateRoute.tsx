import { Navigate, PathRouteProps, Route, RouteProps } from "react-router-dom";

import { GetAuth } from "../../utils/checkAuth";

const PrivateRoute = (props: RouteProps) => {
  // let { to, ...prosParent } = props;
  // if (!to) {
  //   to = "/login";
  // }
  // Check if user is logged in
  // If yes, show route
  // Otherwise, redirect to login page
  if (!GetAuth()) return <Navigate to={"/login"} />;

  return <> {props.children} </>;
};

export default PrivateRoute;
