import { CalendarDays, CheckCircle, Info, MapPin } from "lucide-react";
import generateBadges from "../../../components/badge/generate-badges";
import PrimaryButton from "../../../components/buttons";
import SecondaryButton from "../../../components/buttons/secondary-button";
import Card, { CardBadges, CardButtons, CardHeader } from "../../../components/card";
import InfoGrid from "../../../components/info-grid";

function ApplicationCard({ index, array, advertisement, buttons, readMoreButtonOnClick }) {
	const { attribute } = array[index];
	const { badges, profession, period, location, work_type } = attribute;
	const [fromDate, toDate] = period;
	return (
		<Card className="applicants-max-width gap-2">
			<CardHeader>
				<h1 className="text-base">{profession}</h1>
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
				className="text-tiny"
				entries={[
					{
						icon: <CalendarDays size="20" />,
						children: `${fromDate} till ${toDate}`,
					},
					{ icon: <MapPin size="20" />, children: location },
					{ icon: <CheckCircle size="20" />, children: work_type },
				]}
			/>
			<CardBadges>{generateBadges(badges, badges, { className: "flex-1" })}</CardBadges>
			<CardButtons>
				{buttons.map((button, index) => (
					<SecondaryButton key={button + index} {...button} />
				))}
			</CardButtons>
		</Card>
	);
}
export default ApplicationCard;
