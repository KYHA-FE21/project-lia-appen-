import { Loader } from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "./context";

const ProtectedRoutes = ({ allowedTypes, children }) => {
	const auth = useContext(AuthContext);
	const location = useLocation();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (auth.id) setLoading(false);
	}, [auth]);

	return !loading ? (
		allowedTypes.includes(auth?.attribute?.type) ? (
			children
		) : (
			<Navigate to="/signin" state={{ from: location }} replace />
		)
	) : (
		<Loader className="spin" />
	);
};

export default ProtectedRoutes;
