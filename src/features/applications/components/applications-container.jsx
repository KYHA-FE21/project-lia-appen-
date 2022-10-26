import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import useApplicants from "../hooks/applicants";
import useAdvertisement from "../hooks/advertisement";

import { applications, companyBadges } from "./mock-data";
import { Check, Loader, X } from "lucide-react";

import ApplicationCard from "./application-card";
import Modal from "./modal";

import "./applications-container.scss";

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
		if (applicants.length && !controller.signal.aborted) {
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

	function readMoreButtonOnClick(i, array) {
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
										{toContact.map((item, index, array) => (
											<ApplicationCard
												key={`contact-${item.id}`}
												item={item}
												index={index}
												array={array}
												advertisement={advertisement}
												readMoreButtonOnClick={readMoreButtonOnClick}
												buttons={[
													{
														icon: <X />,
														onClick: () => {
															denyButtonOnClick(index, array);
														},
														color: "white",
														bgColor: "red",
														className: "text-white w-full text-sm",
														children: "Ta bort",
													},
												]}
											/>
										))}
									</div>
									<h1>Att granska - {toReview.length}/10</h1>
									<div className="flex flex-wrap gap-3 justify-center">
										{toReview.map((item, index, array) => (
											<ApplicationCard
												key={`review-${item.id}`}
												item={item}
												index={index}
												array={array}
												advertisement={advertisement}
												buttons={[
													{
														icon: <X />,
														onClick: () => {
															denyButtonOnClick(index, array);
														},
														color: "white",
														bgColor: "red",
														className: "text-white w-full text-sm",
														children: "Ta bort",
													},
													{
														icon: <Check />,
														onClick: () => {
															acceptButtonOnClick(index, array);
														},
														color: "white",
														bgColor: "green",
														className: "text-white w-full text-sm",
														children: "Kontakta",
													},
												]}
											/>
										))}
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
