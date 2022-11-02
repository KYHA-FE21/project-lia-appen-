import { useContext } from 'react'
import { Navigate, Outlet, useLocation} from "react-router-dom";
import { UserContext } from './context';

const ProtectedRoutes = ({allowedRole}) => {

	const auth = useContext(UserContext);
	const location = useLocation();

	console.log("userContext", auth, allowedRole);

	return (
		allowedRole.includes(auth.role) ?
		<Outlet /> :
		<Navigate to='/signin' state={{ from: location }} replace />
	)
}

export default ProtectedRoutes
