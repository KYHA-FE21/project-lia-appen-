import { useEffect, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import useApplicants from "../hooks/applicants";

import Card, { CardBadges, CardButtons, CardHeader } from "../../../components/card";
import PrimaryButton from "../../../components/buttons";
import { applications, companyBadges } from "./mock-data";
import { Check, Info, Loader, X } from "lucide-react";
import InfoGrid from "../../../components/info-grid";
import SecondaryButton from "../../../components/buttons/secondary-button";
import generateBadges from "../../../components/badge/generate-badges";
import Modal from "./modal";

import "./applications-container.scss";

const ApplicationsContainer = () => {
	const [applicantList, setApplicantList] = useState([...applications]);
	const [openModal, setOpenModal] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(null);

	const { id } = useParams();
	const { loading, error, applicants } = useApplicants(id);

	const [toContact, setToContact] = useState([]);
	const [toReview, setToReview] = useState([]);

	useEffect(() => {
		const controller = new AbortController();
		if (applicants && !controller.signal.aborted) {
			setToContact(() => {
				return applicants.filter((applicant) => applicant.applicant.accepted);
			});
			setToReview(() => {
				return applicants.filter((applicant) => !applicant.applicant.accepted);
			});
		}
		return () => {
			controller.abort();
		};
	}, [applicants]);

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
			{loading && <Loader className="spin" />}
			{!loading && (
				<>
					{error && error}
					{!error && (
						<>
							<h1>Att kontakta - {toContact.length}/10</h1>
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
													Tacka nej
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
													Kontakta
												</SecondaryButton>
											</CardButtons>
										</Card>
									);
								})}
							</div>
							<h1>Att granska - {toReview.length}/10</h1>
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
													Tacka nej
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
													Kontakta
												</SecondaryButton>
											</CardButtons>
										</Card>
									);
								})}
							</div>
							{openModal && <Modal applicantList={applicantList} setApplicantList={setApplicantList} companyBadges={companyBadges} currentIndex={currentIndex} setOpenModal={setOpenModal} />}
						</>
					)}
				</>
			)}
		</>
	);
};

export default ApplicationsContainer;
