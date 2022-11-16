import { Loader, X } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import patchApplicant from "../../api/patch-applicant";
import useApplications from "../../hooks/applications";
import ApplicationCard from "../application-card";
import ApplicationSection from "../application-section";
import ConfirmDialog from "../confirm-dialog";
import Modal from "../modal";

function StudentApplicationContainer({ user }) {
	const { loading, error, applications } = useApplications(user);

	const [openModal, setOpenModal] = useState(false);
	const [current, setCurrent] = useState(null);

	const [toContact, setToContact] = useState([]);
	const [toReview, setToReview] = useState([]);

	const dialogRef = useRef();
	const [currentAction, setCurrentAction] = useState([]);

	function sortByBadges(a, b) {
		const badges = [...user.attribute.badges].map((item) => item.toUpperCase());
		const aBadges = [...a.advertisement.attribute.badges]
			.map((item) => item.toUpperCase())
			.filter((item) => badges.includes(item));
		const bBadges = [...b.advertisement.attribute.badges]
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
		const id = array[index].id;
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
				children: "Ta bort",
			},
		];
		return (
			<ApplicationCard
				contact={type === "contact" && item.advertisement.user}
				key={item.id}
				index={index}
				array={array}
				attribute={item.advertisement.attribute}
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
		if (applications && !controller.signal.aborted) {
			setToContact(() => {
				return applications
					.filter((applicant) => applicant.accepted)
					.sort(sortByBadges);
			});
			setToReview(() => {
				return applications
					.filter((applicant) => !applicant.accepted)
					.sort(sortByBadges);
			});
		}
		return () => {
			controller.abort();
		};
	}, [applications]);

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
							<ApplicationSection title={`Väntar på svar - ${toReview.length}`}>
								{toReview.map(renderApplicationCard)}
							</ApplicationSection>
						</>
					)}
					{openModal && (
						<Modal
							setOpenModal={setOpenModal}
							current={current}
							buttons={[
								{
									icon: <X />,
									onClick: () => {
										openDialog(denyButtonOnClick, current.index, current.array);
									},
									color: "white",
									bgColor: "red",
									className: "text-white w-full text-sm",
									children: "Ta bort",
								},
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
	);
}
export default StudentApplicationContainer;
