import { Navigate, useParams } from "react-router-dom";
import useUser from "../../profile/hooks/use-user";
import ApplicationsContainer from "../components/applications-container";

const Index = () => {
	const { id } = useParams();
	const user = useUser({ id: 5 }).data;

	return (
		<main className="flex flex-col h-full p-3 gap-3 overflow-auto">
			{user.attribute.type === "company" && !id && <Navigate to="/profile" replace={true} />}
			{user.attribute.type === "company" && id && <ApplicationsContainer id={id} />}
			{user.attribute.type === "student" && <>Hello Student</>}
		</main>
	);
};

export default Index;
