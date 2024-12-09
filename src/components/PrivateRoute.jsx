import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const authCheck = useSelector((state) => state.users.user.isLogged);

  if (!authCheck) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivateRoute;
