import Badge from "../../../components/badge";
import Wrapper from "../components/wrapper";
import Avatar from "../sections/avatar";
import EditInformation from "../sections/edit_information";
import Information from "../sections/information";
import SelectorHeader from "../sections/selector_header";
import Title from "../components/title";
import "./index.scss";
import Button from "../../../components/buttons";
import { Edit2 } from "lucide-react";
import { Link } from "react-router-dom";
import useUser from "../hooks/use-user";

const Index = () => {
	const user = useUser({ id: 1 });


	return (
		<main>
			{user.data.attribute.type === "company" && <Avatar />}

			<Wrapper width="unset" direction="column" gap={[1]}>
				{user.data.attribute.type === "student" && (
					<SelectorHeader>Profil</SelectorHeader>
				)}

				<Information
					styleDirection="center"
					name={user.data.name}
					profession={user.data.attribute.profession}
					school={user.data.attribute.school}
					date={user.data.attribute.period}
					phone={user.data.phone}
					bio={user.data.bio}
					location={user.data.attribute.location}
				/>

				{user.data.attribute.type === "company" ? (
					<Link to="/questionnaire/overview/*" className="place-self-center">
						<Button icon={<Edit2 />} className="gap-4">
							Redigera frågor
						</Button>
					</Link>
				) : (
					<>
						<Wrapper
							padding={[2, 0, 0, 0]}
							direction="column"
							gap={[3]}
							styleDirection="center"
						>
							<Title size={[1.5]}>Kompetenser</Title>
						</Wrapper>

						<Wrapper gap={[1]} styleDirection="center" padding={[0, 1, 2, 1]}>
							{user.data.attribute.badges.map((item, index) => {
								return (
									<Badge
										key={item + index}
										width="fit-content"
										className="text-white"
									>
										{item}
									</Badge>
								);
							})}
						</Wrapper>
					</>
				)}
				<EditInformation user={user} />
			</Wrapper>
		</main>
	);
};

export default Index;
