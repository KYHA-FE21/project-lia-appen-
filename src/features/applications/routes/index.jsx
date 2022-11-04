import { useContext } from "react";
import { Navigate, useParams } from "react-router-dom";
import AuthContext from "../../../context";
import CompanyApplicationsContainer from "../components/sections/company-applications-container";
import StudentApplicationContainer from "../components/sections/student-application-container";

import "../style/index.scss";

const Index = () => {
	const { id } = useParams();

	const user = useContext(AuthContext).user.data;

	return (
		<main className="flex flex-col h-full p-3 gap-3 overflow-auto">
			{user.attribute.type === "company" && id && <CompanyApplicationsContainer id={id} />}
			{user.attribute.type === "student" && <StudentApplicationContainer user={user} />}
		</main>
	);
};

export default Index;
