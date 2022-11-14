import { X, CalendarDays, MapPin, CheckCircle } from "lucide-react";
import SecondaryButton from "../../../components/buttons/secondary-button";
import Heading from "../../matchmake/components/heading";
import { CardBadges, CardButtons } from "../../../components/card";
import InfoGrid from "../../../components/info-grid";
import LinkGrid from "./link-grid";
import Badge from "../../../components/badge";

const Modal = ({ setOpenModal, current, buttons }) => {
	const { array, index } = current;
	const item = array[index];
	const { attribute, link, bio } = getProps(item);
	const { profession, badges, period, location, work_type } = attribute;
	const [fromDate, toDate] = period;

	function getProps(item) {
		if (item.advertisement) {
			const { attribute, user } = item.advertisement;
			const { bio } = user;
			const link = [];
			return { attribute, bio, link };
		}
		return item;
	}

	return (
		<>
			<div
				className="fixed inset-0 z-1 bg-black opacity-5"
				onClick={() => {
					setOpenModal(false);
				}}
			></div>
			<div className="applications-modal flex flex-col gap-3 rounded-md bg-white p-3 m-auto fixed inset-0 z-1">
				<Heading
					className="text-lg"
					heading={profession}
					icon={
						<X
							size="30"
							onClick={() => setOpenModal(false)}
							className="cursor-pointer"
						/>
					}
				/>
				<CardBadges className="flex text-white justify-center">
					{badges.map((badge) => (
						<Badge key={badge} className="flex-1">
							{badge.toUpperCase()}
						</Badge>
					))}
				</CardBadges>
				<InfoGrid
					color="black"
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
				{link.length > 0 && (
					<LinkGrid className="text-tiny" iconSize="20" entries={link} />
				)}
				<div className="applications-bio p-2 flex flex-col gap-4 overflow-auto">
					{bio}
				</div>
				<CardButtons className="flex mt-auto">
					{buttons.map((button, index) => (
						<SecondaryButton key={button + index} {...button} />
					))}
				</CardButtons>
			</div>
		</>
	);
};

export default Modal;
