import { Outlet, useLocation } from "react-router-dom";
import Header from "../header";
import Footer from "../footer/index";
import { useContext } from "react";
import AuthContext from "../../context";

const Layout = () => {
	const { user } = useContext(AuthContext);

	const { pathname } = useLocation();
	const excludedRoutes = ["signin", "signup", "reset"];
	const noHeadOrFoot = excludedRoutes.includes(pathname.split("/")[1]);

	return (
		<>
			{!noHeadOrFoot && <Header user={user} />}
			<Outlet />
			{!noHeadOrFoot && <Footer user={user} />}
		</>
	);
};

export default Layout;
