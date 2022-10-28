import React from "react";
import { CalendarDays, Check, CheckCircle, Info, MapPin, X } from "lucide-react";

import InfoGrid from "../../../components/info-grid/";
import SecondaryButton from "../../../components/buttons/secondary-button";
import InfoStats from "../components/info-stats";
import generateBadges from "../../../components/badge/generate-badges";
import HorizontalRow from "../components/hr";
import { CardBadges, CardButtons, CardHeader } from "../../../components/card";

function Information({ advertisementData, getNew, setAction, user }) {
	const { attribute } = advertisementData;
	const { badges, profession, period, location, work_type, decline_rate, response_time, openings } = attribute;
	const [fromDate, toDate] = period;
	return (
		<>
			<CardHeader className="text-2xl text-white px-3">
				<h2>{profession}</h2>
				<Info color="white" size="30" />
			</CardHeader>
			<InfoGrid
				className="px-3"
				color="white"
				entries={[
					{
						icon: <CalendarDays size="20" />,
						children: (
							<span className="text-tiny">
								{fromDate} till {toDate}
							</span>
						),
					},
					{ icon: <MapPin size="20" />, children: <span className="text-tiny">{location}</span> },
					{ icon: <CheckCircle size="20" />, children: <span className="text-tiny">{work_type}</span> },
				]}
			/>
			<HorizontalRow className="px-3 opacity-3" />
			<CardBadges className="px-3">{generateBadges(badges, user.attribute.badges, { className: "flex-1" })}</CardBadges>
			<HorizontalRow className="px-3 opacity-3" />
			<InfoStats className="text-white" statistics={{ decline_rate, response_time, openings }} />
			<HorizontalRow className="px-3 opacity-3" />
			<CardButtons className="px-3 h-10 mt-auto">
				<SecondaryButton icon={<X color="white" />} bgColor="red" className="text-white w-full text-sm" onClick={getNew}>
					Nytt test
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
