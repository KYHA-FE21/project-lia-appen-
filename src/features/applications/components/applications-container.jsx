import Card, { CardBadges, CardButtons, CardHeader } from "../../../components/card";
import PrimaryButton from "../../../components/buttons";
import { applications, companyBadges } from "./mock-data";
import { useState } from "react";
import Modal from "./modal";
import { Check, Info, X } from "lucide-react";
import InfoGrid from "../../../components/info-grid";
import SecondaryButton from "../../../components/buttons/secondary-button";
import generateBadges from "../../../components/badge/generate-badges";

const ApplicationsContainer = () => {
	const [applicantList, setApplicantList] = useState([...applications]);
	const [openModal, setOpenModal] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(null);

	applicantList.sort((a, b) => b.badges.length - a.badges.length);

	function removeApplication(i) {
		setApplicantList(applicantList.filter((re, r) => r !== i));
	}

	function denyButtonOnClick(i) {
		removeApplication(i);
	}

	function acceptButtonOnClick(i) {
		removeApplication(i);
	}

	function readMoreButtonOnClick(i) {
		setCurrentIndex(i);
		setOpenModal(true);
	}

	return (
		<>
			<h1>Applications - {applicantList.length}/10</h1>
			<div className="flex flex-wrap gap-3 justify-center">
				{applicantList.map((a, i) => {
					const { type, info, badges } = a;
					return (
						<Card id={"application-card-" + i} key={i}>
							<CardHeader>
								<h1 className="text-base text-white">{type}</h1>
								<PrimaryButton
									className="gap-1 text-sm"
									onClick={() => {
										readMoreButtonOnClick(i);
									}}
									icon={<Info size={20} />}
								>
									Läs Mer
								</PrimaryButton>
							</CardHeader>
							<InfoGrid color="white" fontSize={"0.75rem"} entries={info} />
							<CardBadges>{generateBadges(companyBadges, badges)}</CardBadges>
							<CardButtons className="h-10">
								<SecondaryButton
									icon={<X />}
									onClick={() => {
										denyButtonOnClick(i);
									}}
									color="white"
									bgColor="red"
									className="text-white w-full text-sm"
								>
									Neka
								</SecondaryButton>
								<SecondaryButton
									icon={<Check />}
									onClick={() => {
										acceptButtonOnClick(i);
									}}
									color="white"
									bgColor="green"
									className="text-white w-full text-sm"
								>
									Acceptera
								</SecondaryButton>
							</CardButtons>
						</Card>
					);
				})}
			</div>
			{openModal && <Modal applicantList={applicantList} setApplicantList={setApplicantList} companyBadges={companyBadges} currentIndex={currentIndex} setOpenModal={setOpenModal} />}
		</>
	);
};

export default ApplicationsContainer;
