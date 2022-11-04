import { Loader, X } from "lucide-react";
import { useEffect, useState } from "react";
import patchApplicant from "../../api/patch-applicant";
import renderSection from "../../helpers/render-section";
import useApplications from "../../hooks/applications";
import ApplicationCard from "../application-card";
import Modal from "../modal";

function StudentApplicationContainer({ user }) {
	const { loading, error, applications } = useApplications(user);

	const [openModal, setOpenModal] = useState(false);
	const [current, setCurrent] = useState(null);

	const [toContact, setToContact] = useState([]);
	const [toReview, setToReview] = useState([]);

	function sortByBadges(a, b) {
		const badges = [...user.attribute.badges].map((item) => item.toUpperCase());
		const aBadges = [...a.advertisement.attribute.badges].map((item) => item.toUpperCase()).filter((item) => badges.includes(item));
		const bBadges = [...b.advertisement.attribute.badges].map((item) => item.toUpperCase()).filter((item) => badges.includes(item));
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

	function denyButtonOnClick(index, array) {
		const id = array[index].id;
		const cooldown = Date.now();
		const body = JSON.stringify({ accepted: null, cooldown });
		patchApplicant(id, body)
			.then((res) => {
				if (res.status === 200) {
					removeApplication(index, array);
				}
			})
			.catch((err) => alert("Something went wrong..."));
	}

	function readMoreButtonOnClick(index, array) {
		setCurrent({ index, array });
		setOpenModal(true);
	}

	function renderApplicationCard(item, index, array) {
		return (
			<ApplicationCard
				key={item.id}
				index={index}
				array={array}
				attribute={item.advertisement.attribute}
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
		);
	}

	useEffect(() => {
		const controller = new AbortController();
		if (applications && !controller.signal.aborted) {
			setToContact(() => {
				return applications.filter((applicant) => applicant.accepted).sort(sortByBadges);
			});
			setToReview(() => {
				return applications.filter((applicant) => !applicant.accepted).sort(sortByBadges);
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
							{renderSection("Att kontakta", toContact, renderApplicationCard)}
							{renderSection("Väntar på svar", toReview, renderApplicationCard)}
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
										denyButtonOnClick(current.index, current.array);
									},
									color: "white",
									bgColor: "red",
									className: "text-white w-full text-sm",
									children: "Ta bort",
								},
							]}
						/>
					)}
				</>
			)}
		</>
	);
}
export default StudentApplicationContainer;
