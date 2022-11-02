import { useContext } from 'react'
import { Navigate, Outlet, useLocation} from "react-router-dom";
import { AuthContext } from './context';

const ProtectedRoutes = ({allowedRole}) => {

	const auth = useContext(AuthContext);
	const location = useLocation();

	console.log('context', auth)
	return (
		allowedRole.includes(auth.role) ?
		<Outlet /> :
		<Navigate to='/signin' state={{ from: location }} replace />
	)
}

export default ProtectedRoutes
