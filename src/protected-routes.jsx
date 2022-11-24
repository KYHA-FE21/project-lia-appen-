import { Loader } from "lucide-react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "./context";

const ProtectedRoutes = ({ allowedTypes, children }) => {
	const { user } = useContext(AuthContext);
	const location = useLocation();

	return (
		<>
			{user?.loading && (
				<div className="flex justify-center items-center h-full">
					<Loader size={50} className="spin" />
				</div>
			)}

			{user?.data &&
				!user.loading &&
				(allowedTypes.includes(user.data?.attribute?.type) ? (
					children
				) : (
					<Navigate to="/" state={{ from: location }} replace />
				))}

			{user?.unauthenticated && (
				<Navigate to="/signin" state={{ from: location }} replace />
			)}
		</>
	);
};

export default ProtectedRoutes;
