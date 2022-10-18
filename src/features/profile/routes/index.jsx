import { useState } from "react";
import Badge from "../../../components/badge";
import Wrapper from "../components/wrapper";
import Avatar from "../sections/avatar";
import AboutMe from "../sections/about-me";
import Information from "../sections/information";
import SelectorHeader from "../sections/selector_header";
import Title from "../components/title";
import "./index.scss";
import Button from "../../../components/buttons";
import { Edit2 } from "lucide-react";

import { Link, useSearchParams } from "react-router-dom";

const Index = () => {
	const [searchParams] = useSearchParams()

	const [isCompany] = useState(searchParams.get('company'))

	return (
		<main>
			{isCompany ? (
				<>
					<Avatar />

					<Wrapper direction="column" gap={[1]}>
						<Information styleDirection="center" name="Mooi Design" />
						<Link to="/questionnaire/overview/*" className="place-self-center">
							<Button icon={<Edit2 />} className="gap-4">Redigera frågor</Button>
						</Link>
					</Wrapper>
				</>
			) : (
				<Wrapper width="unset" direction="column" gap={[1]}>
					<SelectorHeader>Profil</SelectorHeader>

					<Information
						styleDirection="center"
						name="Sofie Larsson"
						role="Front end utvecklare"
						school="HiG"
						date="28 nov - 4 apr 2022"
					/>

          <Wrapper
            padding={[2, 0, 0, 0]}
            direction='column'
            gap={[3]}
            styleDirection='center'>
          <Title size={[1.5]}>Kompetenser</Title>

         </Wrapper>

					<Wrapper gap={[1]} styleDirection="center" padding={[0, 1, 2, 1]}>
						<Badge width="fit-content" className="text-white">
							Node
						</Badge>
						<Badge width="fit-content" className="text-white">
							JS
						</Badge>
						<Badge width="fit-content" className="text-white">
							HTML
						</Badge>
						<Badge width="fit-content" className="text-white">
							CSS
						</Badge>
						<Badge width="fit-content" className="text-white">
							React
						</Badge>
					</Wrapper>

					<AboutMe />
				</Wrapper>
			)}
		</main>
	);
};

export default Index;
