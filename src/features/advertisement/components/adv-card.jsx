import React from "react";
import Card, { CardHeader, CardBadges, CardButtons } from "../../../components/card";
import InfoStats from "../../../components/info-stats/info-stats";
import Badges from "../../../components/badge";
import InfoGrid from "../../../components/info-grid";
import { CalendarDays, MapPin, CheckCircle } from "lucide-react";

const AdvCard = ({ add, children }) => {
	return (
		<Card className="gap-4">
			<CardHeader className="text-2xl px-3">
				<h2>{add.attribute.profession}</h2>
			</CardHeader>
			<InfoGrid
				className="px-3"
				color="black"
				entries={[
					{
						icon: <CalendarDays size="20" />,
						children: (
							<span className="text-tiny">
								{add.attribute.period[0]} <br /> {add.attribute.period[1]}
							</span>
						),
					},
					{
						icon: <MapPin size="20" />,
						children: <span className="text-tiny">{add.attribute.location}</span>,
					},
					{
						icon: <CheckCircle size="20" />,
						children: <span className="text-tiny">{add.attribute.work_type}</span>,
					},
				]}
			/>
			<div className="divider" />
			<CardBadges>
				{add.attribute.badges.map((badge, i) => (
					<Badges key={badge + i} className="text-white">
						{badge}
					</Badges>
				))}
			</CardBadges>
			<div className="divider" />
			<InfoStats
				statistics={{
					response_time: add.attribute.response_time,
					openings: add.attribute.openings,
					decline_rate: add.attribute.decline_rate,
				}}
			/>
			<div className="divider" />
			<CardButtons>{children}</CardButtons>
		</Card>
	);
};

export default AdvCard;
