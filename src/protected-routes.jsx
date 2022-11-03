import { Loader } from "lucide-react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "./context";

const ProtectedRoutes = ({ allowedTypes, children }) => {
	const { user, loading } = useContext(AuthContext);
	const location = useLocation();

	return (
		<>
			{loading && <Loader className="spin" />}
			{!loading &&
				(allowedTypes.includes(user?.attribute?.type) ? (
					children
				) : (
					<Navigate to="/signin" state={{ from: location }} replace />
				))}
		</>
	);
};

export default ProtectedRoutes;
