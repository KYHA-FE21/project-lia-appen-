import { CalendarDays, CheckCircle, Info, MapPin } from "lucide-react";
import generateBadges from "../../../components/badge/generate-badges";
import PrimaryButton from "../../../components/buttons";
import SecondaryButton from "../../../components/buttons/secondary-button";
import Card, { CardBadges, CardButtons, CardHeader } from "../../../components/card";
import InfoGrid from "../../../components/info-grid";

function ApplicationCard({ item, index, array, advertisement, buttons, readMoreButtonOnClick }) {
	const { attribute } = item;
	const { badges, profession, period, location, work_type } = attribute;
	const [fromDate, toDate] = period;
	return (
		<Card className="applicants-max-width">
			<CardHeader>
				<h1 className="text-base text-white">{profession}</h1>
				<PrimaryButton
					className="gap-1 text-sm"
					onClick={() => {
						readMoreButtonOnClick(index, array);
					}}
					icon={<Info size={20} />}
				>
					Läs Mer
				</PrimaryButton>
			</CardHeader>
			<InfoGrid
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
			<CardBadges>{generateBadges(advertisement.attribute.badges, badges)}</CardBadges>
			<CardButtons className="h-10">
				{buttons.map((button, index) => (
					<SecondaryButton key={button + index} {...{ ...button }} />
				))}
			</CardButtons>
		</Card>
	);
}
export default ApplicationCard;
