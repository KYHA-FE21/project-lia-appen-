import React from "react";
import { CalendarDays, Check, CheckCircle, Info, MapPin, X } from "lucide-react";

import Container from "../components/container";
import Heading from "../components/heading";
import InfoGrid from "../../../components/info-grid/";
import SecondaryButton from "../../../components/buttons/secondary-button";
import InfoStats from "../components/info-stats";
import generateBadges from "../../../components/badge/generate-badges";
import HorizontalRow from "../components/hr";
import Card, { CardBadges, CardButtons } from "../../../components/card";

function Information({ advertisementData, getNew, setAction }) {
	const { attributes, statistics, openings } = advertisementData;
	const { badges, profession, period, location, work_type } = attributes;
	const [fromDate, toDate] = period;
	return (
		<>
			<Heading
				className="text-2xl text-white px-3"
				{...{
					heading: profession,
					icon: <Info color="white" size="30" />,
				}}
			/>
			<Container className="px-3" type="article">
				<InfoGrid
					fontSize={"0.75rem"}
					color="white"
					entries={[
						{
							icon: <CalendarDays size="20" />,
							children: (
								<span className="font-bold">
									{fromDate} till {toDate}
								</span>
							),
						},
						{ icon: <MapPin size="20" />, children: <span className="font-bold">{location}</span> },
						{ icon: <CheckCircle size="20" />, children: <span className="font-bold">{work_type}</span> },
					]}
				/>
			</Container>
			<HorizontalRow className="px-3" />
			<CardBadges className="matchmake-badgesfix">{generateBadges(badges, ["HTML", "CSS"])}</CardBadges>
			<HorizontalRow className="px-3" />
			<InfoStats className="text-white" statistics={{ ...statistics, openings }} />
			<HorizontalRow className="px-3" />
			<CardButtons className="px-3 h-10 mt-auto">
				<SecondaryButton icon={<X color="white" />} bgColor="red" className="text-white w-full text-sm" onClick={getNew}>
					Neka
				</SecondaryButton>
				<SecondaryButton
					icon={<Check color="white" />}
					bgColor="green"
					className="text-white w-full text-sm"
					onClick={() => {
						setAction("questions");
					}}
				>
					Gör test
				</SecondaryButton>
			</CardButtons>
		</>
	);
}

export default Information;
