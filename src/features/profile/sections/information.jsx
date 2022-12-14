import React from "react";
import Wrapper from "../components/wrapper";
import Title from "../components/title";
import { MapPin, CalendarDays } from "lucide-react";

const Information = ({ name, profession, school, period, bio, location }) => {
	return (
		<Wrapper
			padding={[5, 0, 0, 0]}
			direction="column"
			gap={[5]}
			styleDirection="center"
		>
			<Title size={[1.5]} bold={700} subTitle={profession}>
				{name}
			</Title>

			<Wrapper wrap="wrap" gap={[1]} styleDirection="center">
				{location && (
					<Title
						className="items-center justify-center"
						size={[1]}
						img={<MapPin color="black" size={18} />}
					>
						{location}
					</Title>
				)}

				{school && (
					<Title
						className="items-center justify-center"
						size={[1]}
						img={<MapPin color="black" size={18} />}
					>
						{school}
					</Title>
				)}

				{period.join("").length > 0 && (
					<Title
						className="items-center justify-center"
						size={[1]}
						img={<CalendarDays color="black" size={18} />}
					>
						{period.join(" till ")}
					</Title>
				)}
			</Wrapper>

			<Wrapper maxWidth="800px" lineHeight={[1.5]} padding={[0, 1]}>
				<Title size={[1]}>{bio}</Title>
			</Wrapper>
		</Wrapper>
	);
};

export default Information;
