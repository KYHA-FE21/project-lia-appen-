import { X, Check } from "lucide-react";
import SecondaryButton from "../../../components/buttons/secondary-button";
import generateBadges from "../../../components/badge/generate-badges";
import Heading from "../../matchmake/components/heading";
import { CardBadges, CardButtons } from "../../../components/card";
import InfoGrid from "../../../components/info-grid";
import LinkGrid from "./link-grid"
import "./modal.scss";

const Modal = ({ applicantList, setApplicantList, companyBadges, currentIndex, setOpenModal }) => {
	function remove(i) {
		setOpenModal(false);
		setApplicantList(applicantList.filter((re, r) => r !== i));
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
					{...{
						heading: applicantList[currentIndex].type,
						icon: <X size="30" onClick={() => setOpenModal(false)} className="cursor-pointer" />,
					}}
				/>
				<CardBadges className="flex text-white justify-center">{generateBadges(companyBadges, applicantList[currentIndex].badges)}</CardBadges>
				<InfoGrid fontSize={"0.75rem"} entries={applicantList[currentIndex].info} />
				<LinkGrid fontSize={"0.75rem"} iconSize="20" entries={applicantList[currentIndex].links}/>
				<div className="applications-bio p-2 flex flex-col gap-4 overflow-auto">{applicantList[currentIndex].bio}</div>
				<CardButtons className="flex h-10 mt-auto">
					<SecondaryButton icon={<X />} onClick={() => remove(currentIndex)} color="white" bgColor="red" className="text-white w-full text-sm">
						Neka
					</SecondaryButton>
					<SecondaryButton icon={<Check />} onClick={() => remove(currentIndex,)} color="white" bgColor="green" className="text-white w-full text-sm">
						Acceptera
					</SecondaryButton>
				</CardButtons>
			</div>
		</>
	);
};

export default Modal;
