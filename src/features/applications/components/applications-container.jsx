import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import useApplicants from "../hooks/applicants";

import Card, { CardBadges, CardButtons, CardHeader } from "../../../components/card";
import PrimaryButton from "../../../components/buttons";
import { applications, companyBadges } from "./mock-data";
import { CalendarDays, Check, CheckCircle, Info, Loader, MapPin, X } from "lucide-react";
import InfoGrid from "../../../components/info-grid";
import SecondaryButton from "../../../components/buttons/secondary-button";
import generateBadges from "../../../components/badge/generate-badges";
import Modal from "./modal";

import "./applications-container.scss";
import useAdvertisement from "../hooks/advertisement";

const ApplicationsContainer = () => {
	const [applicantList, setApplicantList] = useState([...applications]);
	const [openModal, setOpenModal] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(null);

	const { id } = useParams();
	const { loading: applicantsLoading, error: applicantsError, applicants } = useApplicants(id);
	const { loading: advertisementLoading, advertisementError, advertisement } = useAdvertisement(id);

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

	function removeApplication(i, array) {
		switch (array) {
			case toContact:
				setToContact(array.filter((re, r) => r !== i));
				break;
			case toReview:
				setToReview(array.filter((re, r) => r !== i));
				break;
			default:
				break;
		}
	}

	function denyButtonOnClick(i, array) {
		removeApplication(i, array);
	}

	function acceptButtonOnClick(i, array) {
		removeApplication(i, array);
	}

	function readMoreButtonOnClick(i) {
		setCurrentIndex(i);
		setOpenModal(true);
	}

	return (
		<>
			{(applicantsLoading || advertisementLoading) && <Loader className="spin" />}
			{!applicantsLoading && !advertisementLoading && (
				<>
					{(applicantsError || advertisementError) && (applicantsError || advertisementError)}
					{!applicantsError && !advertisementError && (
						<>
							{!advertisement && <>Sidan kunde ej hittas</>}
							{advertisement && (
								<>
									<h1>Att kontakta - {toContact.length}</h1>
									<div className="flex flex-wrap gap-3 justify-center">
										{toContact.map((item, i, array) => {
											const { id, attribute } = item;
											const { badges, profession, period, location, work_type } = attribute;
											const [fromDate, toDate] = period;
											return (
												<Card key={`contact-${id}`} className="applicants-max-width">
													<CardHeader>
														<h1 className="text-base text-white">{profession}</h1>
														<PrimaryButton
															className="gap-1 text-sm"
															onClick={() => {
																readMoreButtonOnClick(i, array);
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
														<SecondaryButton
															icon={<X />}
															onClick={() => {
																denyButtonOnClick(i, array);
															}}
															color="white"
															bgColor="red"
															className="text-white w-full text-sm"
														>
															Ta bort
														</SecondaryButton>
													</CardButtons>
												</Card>
											);
										})}
									</div>
									<h1>Att granska - {toReview.length}/10</h1>
									<div className="flex flex-wrap gap-3 justify-center">
										{toReview.map((item, i, array) => {
											const { id, attribute } = item;
											const { badges, profession, period, location, work_type } = attribute;
											const [fromDate, toDate] = period;
											return (
												<Card key={`review-${id}`} className="applicants-max-width">
													<CardHeader>
														<h1 className="text-base text-white">{profession}</h1>
														<PrimaryButton
															className="gap-1 text-sm"
															onClick={() => {
																readMoreButtonOnClick(i, array);
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
														<SecondaryButton
															icon={<X />}
															onClick={() => {
																denyButtonOnClick(i, array);
															}}
															color="white"
															bgColor="red"
															className="text-white w-full text-sm"
														>
															Ta bort
														</SecondaryButton>
														<SecondaryButton
															icon={<Check />}
															onClick={() => {
																acceptButtonOnClick(i, array);
															}}
															color="white"
															bgColor="green"
															className="text-white w-full text-sm"
														>
															Godkänn
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
			)}
		</>
	);
};

export default ApplicationsContainer;
