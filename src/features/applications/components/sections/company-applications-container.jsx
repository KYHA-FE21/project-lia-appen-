import { useEffect, useRef, useState } from "react";

import useAdvertisement from "../../hooks/advertisement";

import { Check, Loader, X } from "lucide-react";

import ApplicationCard from "../application-card";
import Modal from "../modal";

import patchApplicant from "../../api/patch-applicant";
import ApplicationSection from "../application-section";
import ConfirmDialog from "../confirm-dialog";

const CompanyApplicationsContainer = ({ id }) => {
	const [openModal, setOpenModal] = useState(false);
	const [current, setCurrent] = useState(null);

	const { loading, error, advertisement } = useAdvertisement(id);

	const [toContact, setToContact] = useState([]);
	const [toReview, setToReview] = useState([]);

	const dialogRef = useRef();
	const [currentAction, setCurrentAction] = useState({});

	function sortByBadges(a, b) {
		const badges = [...advertisement.attribute.badges].map((item) =>
			item.toUpperCase()
		);
		const aBadges = [...a.attribute.badges]
			.map((item) => item.toUpperCase())
			.filter((item) => badges.includes(item));
		const bBadges = [...b.attribute.badges]
			.map((item) => item.toUpperCase())
			.filter((item) => badges.includes(item));
		if (aBadges.length < bBadges.length) {
			return 1;
		}
		if (aBadges.length > bBadges.length) {
			return -1;
		}
		return 0;
	}

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

	function openDialog(callback, ...args) {
		setCurrentAction([callback, ...args]);
		dialogRef.current.showModal();
		dialogRef.current.classList.remove("hidden");
	}

	function denyButtonOnClick(index, array) {
		const id = array[index].applicant.id;
		const cooldown = Date.now();
		const body = JSON.stringify({ accepted: null, cooldown });
		patchApplicant(id, body)
			.then((res) => {
				if (res.status === 200) {
					removeApplication(index, array);
				} else {
					throw new Error(`Unexpected response code: ${res.status}`);
				}
			})
			.catch((err) => console.error(err));
	}

	function acceptButtonOnClick(index, array) {
		const id = array[index].applicant.id;
		const body = JSON.stringify({ accepted: true });
		patchApplicant(id, body)
			.then((res) => {
				if (res.status === 200) {
					setToContact((prev) => [...prev, array[index]]);
					removeApplication(index, array);
				} else {
					throw new Error(`Unexpected response code: ${res.status}`);
				}
			})
			.catch((err) => console.error(err));
	}

	function readMoreButtonOnClick(index, array) {
		setCurrent({ index, array });
		setOpenModal(true);
	}

	function renderApplicationCard(item, index, array, type) {
		const buttons = [
			{
				icon: <X />,
				onClick: () => {
					openDialog(denyButtonOnClick, index, array);
				},
				color: "white",
				bgColor: "red",
				className: "text-white w-full text-sm",
				children: array === toReview ? "Tacka nej" : "Ta bort",
			},
		];
		if (array === toReview) {
			buttons.push({
				icon: <Check />,
				onClick: () => {
					openDialog(acceptButtonOnClick, index, array);
				},
				color: "white",
				bgColor: "green",
				className: "text-white w-full text-sm",
				children: "Kontakta",
			});
		}

		return (
			<ApplicationCard
				contact={type === "contact" && item}
				key={item.applicant.id}
				index={index}
				array={array}
				attribute={item.attribute}
				readMoreButtonOnClick={readMoreButtonOnClick}
				buttons={buttons}
			/>
		);
	}

	useEffect(() => {
		function handleClose() {
			if (dialogRef.current.returnValue === "true") {
				const copyCurrentAction = [...currentAction];
				const callback = copyCurrentAction.shift();
				callback(...copyCurrentAction);
			}
			dialogRef.current.classList.add("hidden");
		}
		if (dialogRef.current) {
			dialogRef.current.addEventListener("close", handleClose);
		}
		return () => {
			if (dialogRef.current) {
				dialogRef.current.removeEventListener("close", handleClose);
			}
		};
	});

	useEffect(() => {
		const controller = new AbortController();
		if (advertisement && !controller.signal.aborted) {
			const { applicants } = advertisement;
			setToContact(() => {
				return applicants
					.filter((applicant) => applicant.applicant.accepted)
					.sort(sortByBadges);
			});
			setToReview(() => {
				return applicants
					.filter((applicant) => !applicant.applicant.accepted)
					.sort(sortByBadges);
			});
		}
		return () => {
			controller.abort();
		};
	}, [advertisement]);

	return (
		<>
			{loading && <Loader className="spin" />}
			{!loading && (
				<>
					{error && error}
					{!error && (
						<>
							<ApplicationSection title={`Att kontakta - ${toContact.length}`}>
								{toContact.map((item, index, array) =>
									renderApplicationCard(item, index, array, "contact")
								)}
							</ApplicationSection>
							<ApplicationSection title={`Att granska - ${toReview.length}/10`}>
								{toReview.map(renderApplicationCard)}
							</ApplicationSection>
							{openModal && (
								<Modal
									setOpenModal={setOpenModal}
									current={current}
									buttons={[
										{
											icon: <X />,
											onClick: () => {
												openDialog(
													denyButtonOnClick,
													current.index,
													current.array
												);
											},
											color: "white",
											bgColor: "red",
											className: "text-white w-full text-sm",
											children:
												current.array === toReview ? "Tacka nej" : "Ta bort",
										},

										...(current.array === toReview
											? [
													{
														icon: <Check />,
														onClick: () => {
															openDialog(
																acceptButtonOnClick,
																current.index,
																current.array
															);
														},
														color: "white",
														bgColor: "green",
														className: "text-white w-full text-sm",
														children: "Kontakta",
													},
											  ]
											: []),
									]}
								/>
							)}
							<ConfirmDialog
								ref={dialogRef}
								className="flex flex-col gap-4 rounded-md hidden"
							/>
						</>
					)}
				</>
			)}
		</>
	);
};

export default CompanyApplicationsContainer;
