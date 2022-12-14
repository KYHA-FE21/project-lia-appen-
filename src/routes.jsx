import { useEffect } from "react";
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
import Advertisement from "./features/advertisement/routes";
import useLocalStorage from "./hooks/use-local-storage";
import useUser from "./features/profile/hooks/use-user";
import AuthContext from "./context";
import { useMemo } from "react";

const AppRoutes = () => {
	const userStorage = useLocalStorage("user");
	const user = useUser();

	useEffect(() => {
		const store = userStorage.data;

		if (!store) return;

		if (store.id) {
			user.loadByID(store.id);
		}
	}, [userStorage.data]);

	const userContext = useMemo(() => {
		if (userStorage.data === null) return null;

		if (userStorage.data?.id) {
			if (user.state?.error) {
				userStorage.empty();
				window.location.pathname = "/signin";
			}

			return user.state;
		}

		if (userStorage.data.id === undefined) return { unauthenticated: true };
	}, [user.state, userStorage]);

	return (
		<AuthContext.Provider value={{ user: userContext, update: user.update }}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Splash />}></Route>
						<Route
							path="/applications"
							element={
								<ProtectedRoutes allowedTypes={["student"]}>
									<Applications />
								</ProtectedRoutes>
							}
						/>
						<Route
							path="/applications/:id"
							element={
								<ProtectedRoutes allowedTypes={["company"]}>
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
							path="/questionnaire/editor/:id"
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
						<Route
							path="/advertisement"
							element={
								<ProtectedRoutes allowedTypes={["company"]}>
									<Advertisement />
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
