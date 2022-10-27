import { X, Check, CalendarDays, MapPin, CheckCircle } from "lucide-react";
import SecondaryButton from "../../../components/buttons/secondary-button";
import generateBadges from "../../../components/badge/generate-badges";
import Heading from "../../matchmake/components/heading";
import { CardBadges, CardButtons } from "../../../components/card";
import InfoGrid from "../../../components/info-grid";
import LinkGrid from "./link-grid";

const Modal = ({ setOpenModal, current, removeApplication }) => {
	const { array, index } = current;
	const applicant = array[index];
	const { attribute, link, bio } = applicant;
	const { profession, badges, period, location, work_type } = attribute;
	const [fromDate, toDate] = period;
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
					{...{
						heading: profession,
						icon: <X size="30" onClick={() => setOpenModal(false)} className="cursor-pointer" />,
					}}
				/>
				<CardBadges className="flex text-white justify-center">{generateBadges(badges, badges)}</CardBadges>
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
				<LinkGrid className="text-tiny" iconSize="20" entries={link} />
				<div className="applications-bio p-2 flex flex-col gap-4 overflow-auto">{bio}</div>
				<CardButtons className="flex h-10 mt-auto">
					<SecondaryButton icon={<X />} onClick={() => removeApplication(current.index, current.array)} color="white" bgColor="red" className="text-white w-full text-sm">
						Neka
					</SecondaryButton>
					<SecondaryButton icon={<Check />} onClick={() => removeApplication(current.index, current.array)} color="white" bgColor="green" className="text-white w-full text-sm">
						Acceptera
					</SecondaryButton>
				</CardButtons>
			</div>
		</>
	);
};

export default Modal;
