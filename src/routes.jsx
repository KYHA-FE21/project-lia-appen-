import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import ProtectedRoutes from "./protected-routes";
// Routes
import Profile from "./features/profile/routes";
import Matchmake from "./features/matchmake/routes";
import Applications from "./features/applications/routes";
import Splash from "./features/splash/routes";
import Signin from "./features/auth/routes/signin";
import Signup from "./features/auth/routes/signup";
import Reset from "./features/auth/routes/reset";
import QuestionnaireEditor from "./features/questionnaire/routes/editor";
import QuestionnaireOverview from "./features/questionnaire/routes/overview";
import useLocalStorage from "./hooks/use-local-storage";
import useUser from "./features/profile/hooks/use-user";
import AuthContext from "./context";

const AppRoutes = () => {
	const [user, setUser] = useState({});
	const userStorage = useLocalStorage("user");
	const { data, loadByID, loading } = useUser();

	useEffect(() => {
		const id = userStorage.store.id;
		if (id) loadByID(id);
	}, [userStorage.store]);

	useEffect(() => {
		if (data?.id) setUser(data);
		else userStorage.empty();
	}, [data, loading]);

	return (
		<AuthContext.Provider value={{ user, loading }}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Splash />}></Route>
						<Route
							path="/applications"
							element={
								<ProtectedRoutes allowedTypes={["student", "company"]}>
									<Applications />
								</ProtectedRoutes>
							}
						/>
						<Route
							path="/profile"
							element={
								<ProtectedRoutes allowedTypes={["student", "company"]}>
									<Profile />
								</ProtectedRoutes>
							}
						/>
						<Route
							path="/matchmake"
							element={
								<ProtectedRoutes allowedTypes={["student"]}>
									<Matchmake />
								</ProtectedRoutes>
							}
						/>
						<Route
							path="/questionnaire/overview/:id"
							element={
								<ProtectedRoutes allowedTypes={["company"]}>
									<QuestionnaireOverview />
								</ProtectedRoutes>
							}
						/>
						<Route
							path="/questionnaire/create/:id"
							element={
								<ProtectedRoutes allowedTypes={["company"]}>
									<QuestionnaireEditor />
								</ProtectedRoutes>
							}
						/>
						<Route
							path="/reset/:id"
							element={
								<ProtectedRoutes allowedTypes={["company"]}>
									<Reset />
								</ProtectedRoutes>
							}
						/>
						<Route path="/signin" element={<Signin />} />
						<Route path="/signup" element={<Signup />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</AuthContext.Provider>
	);
};

export default AppRoutes;
