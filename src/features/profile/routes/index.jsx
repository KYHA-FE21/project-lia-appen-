import { useContext } from "react";
import { Edit2 } from "lucide-react";
import { Link } from "react-router-dom";

import "./index.scss";

import Badge from "../../../components/badge";
import Wrapper from "../components/wrapper";
import Avatar from "../sections/avatar";
import EditInformation from "../sections/edit_information";
import Information from "../sections/information";
import SelectorHeader from "../sections/selector_header";
import Title from "../components/title";
import Button from "../../../components/buttons";
import AuthContext from "../../../context";

const Index = () => {
	const { user, update } = useContext(AuthContext);

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
					period={
						user.data.attribute.type !== "company" && user.data.attribute.period
					}
					bio={user.data.bio}
					location={user.data.attribute.location}
				/>

				{user.data.attribute.type === "company" ? (
					<Link to="/advertisement" className="place-self-center no-underline">
						<Button icon={<Edit2 />} className="gap-4">
							Redigera annonser
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
				<EditInformation user={{ data: user.data, update }} />
			</Wrapper>
		</main>
	);
};

export default Index;
