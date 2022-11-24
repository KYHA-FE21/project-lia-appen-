import userEvent from "@testing-library/user-event";
import { CalendarDays, CheckCircle, Info, MapPin } from "lucide-react";
import Badge from "../../../components/badge";
import PrimaryButton from "../../../components/buttons";
import SecondaryButton from "../../../components/buttons/secondary-button";
import Card, {
	CardBadges,
	CardButtons,
	CardHeader,
} from "../../../components/card";
import InfoGrid from "../../../components/info-grid";

function ApplicationCard({
	index,
	array,
	attribute,
	buttons,
	readMoreButtonOnClick,
	contact,
}) {
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
						children: (
							<>
								{fromDate}
								<br />
								{toDate}
							</>
						),
					},
					{ icon: <MapPin size="20" />, children: location },
					{ icon: <CheckCircle size="20" />, children: work_type },
				]}
			/>
			{contact && (
				<div className="flex flex-col gap-2">
					<span className="text-lg">Kontaktuppgifter</span>
					<span>{contact.name}</span>
					<span>{contact.email}</span>
				</div>
			)}
			<CardBadges>
				{badges.map((badge) => (
					<Badge key={badge} className="flex-1">
						{badge.toUpperCase()}
					</Badge>
				))}
			</CardBadges>
			<CardButtons>
				{buttons.map((button, index) => (
					<SecondaryButton key={button + index} {...button} />
				))}
			</CardButtons>
		</Card>
	);
}
export default ApplicationCard;
