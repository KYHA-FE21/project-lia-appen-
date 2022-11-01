import { Navigate, useParams } from "react-router-dom";
import useUser from "../../profile/hooks/use-user";
import ApplicationsCompany from "../components/company-applications-container";

import "../style/index.scss"

const Index = () => {
	const { id } = useParams();
	const user = useUser({ id: 5 }).data;

	return (
		<main className="flex flex-col h-full p-3 gap-3 overflow-auto">
			{user.attribute.type === "company" && !id && <Navigate to="/profile" replace={true} />}
			{user.attribute.type === "company" && id && <ApplicationsCompany id={id} />}
			{user.attribute.type === "student" && <>Hello Student</>}
		</main>
	);
};

export default Index;
