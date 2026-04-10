import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  // Replace 'client.user' with wherever your user/auth status is stored in Redux
  const user = useSelector((state) => state.client.user);
  const token = localStorage.getItem("token");

  return (
    <Route
      {...rest}
      render={(props) => {
        // Check if user exists OR if there is a token (depending on your verifyToken logic)
        if (user?.name || token) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location } // This allows redirecting back after login
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;