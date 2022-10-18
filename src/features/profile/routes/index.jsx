import { useState, useEffect } from "react";
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
import getUser from '../api/getUser';
import { Link } from "react-router-dom";

const Index = () => {
	const [userData, setUserData] = useState({
		data: [],
		attributes: {
			badges: []
		}
	});

	useEffect(() => {
		getUser('id').then(response => {
			setUserData(response)
		})
	}, [])

	return (
		<main>
			
			{userData.data.type === 'student' || <Avatar />}

				<Wrapper width="unset" direction="column" gap={[1]}>
					
				{userData.data.type === 'company' || <SelectorHeader>Profil</SelectorHeader>}			

					<Information
						styleDirection="center"
						name={userData.data.name}
						profession={userData.attributes.profession}
						school={userData.attributes.work_type}
						date={userData.attributes.period}
						phone={userData.data.phone}
						bio={userData.data.bio}
						location={userData.attributes.location} />
						
				{userData.data.type === 'company' ? 

					<Link
						to="/questionnaire/overview/*"
						className="place-self-center">
						<Button
							icon={<Edit2 />}
							className="gap-4">Redigera frågor</Button>
					</Link>
			
				:
					<>
						<Wrapper
							padding={[2, 0, 0, 0]}
							direction='column'
							gap={[3]}
							styleDirection='center'>
							<Title size={[1.5]}>Kompetenser</Title>

						</Wrapper>

						<Wrapper gap={[1]} styleDirection="center" padding={[0, 1, 2, 1]}>
							{userData.attributes.badges.map((item, index) => {
								return (
									<Badge
										key={item + index}
										width="fit-content"
										className="text-white">
										{item}
									</Badge>
								)
							})}

						</Wrapper>
	
					</>
				
				} 
					<EditInformation userData={userData} />

				</Wrapper>
		
		</main>
	);
};

export default Index;