import React from "react";
import Card, {
	CardHeader,
	CardBadges,
	CardButtons,
} from "../../../components/card";
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
				className="px-3 text-tiny"
				color="black"
				entries={[
					{
						icon: <CalendarDays size="20" />,
						children: (
							<>
								{add.attribute.period[0]}
								<br />
								{add.attribute.period[1]}
							</>
						),
					},
					{
						icon: <MapPin size="20" />,
						children: add.attribute.location,
					},
					{
						icon: <CheckCircle size="20" />,
						children: add.attribute.work_type,
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
			<CardButtons className="flex-col">{children}</CardButtons>
		</Card>
	);
};

export default AdvCard;
