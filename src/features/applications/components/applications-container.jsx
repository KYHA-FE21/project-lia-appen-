import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import useApplicants from "../hooks/applicants";
import useAdvertisement from "../hooks/advertisement";

import { Check, Loader, X } from "lucide-react";

import ApplicationCard from "./application-card";
import Modal from "./modal";

import "./applications-container.scss";

const ApplicationsContainer = () => {
	const [openModal, setOpenModal] = useState(false);
	const [current, setCurrent] = useState(null);

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

	function removeApplication(index, array) {
		function filterArray(prev) {
			return prev.filter((_, i) => i !== index);
		}
		switch (array) {
			case toContact:
				setToContact(filterArray);
				break;
			case toReview:
				setToReview(filterArray);
				break;
			default:
				break;
		}
		setOpenModal(false);
	}

	function denyButtonOnClick(index, array) {
		removeApplication(index, array);
	}

	function acceptButtonOnClick(index, array) {
		removeApplication(index, array);
	}

	function readMoreButtonOnClick(index, array) {
		setCurrent({ index, array });
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
														children: "Tacka nej",
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
														children: "Tacka nej",
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
									{openModal && <Modal setOpenModal={setOpenModal} current={current} removeApplication={removeApplication} />}
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
