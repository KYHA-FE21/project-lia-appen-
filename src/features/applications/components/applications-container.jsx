import Card, { CardBadges, CardButtons, CardHeader } from "../../../components/card";
import PrimaryButton from "../../../components/buttons";
import { applications, myBadges } from "./mock-data";
import { useState } from "react";
import Modal from "./modal";
import "./applications-container.scss";
import { Check, Info, X } from "lucide-react";
import InfoGrid from "../../../components/info-grid";
import SecondaryButton from "../../../components/buttons/secondary-button";
import generateBadges from "../../../components/badge/generate-badges";

const ApplicationsContainer = () => {
	/*   const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = (i) => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe || isRightSwipe)
      console.log('swipe', isLeftSwipe ? 'left' : 'right');
  }; */
	const [applicantList, setApplicantList] = useState([...applications]);
	const [openModal, setOpenModal] = useState(false);
	const [currentIndex, setCurrentIndex] = useState();

	applicantList.sort((a, b) => b.badges.length - a.badges.length);

	function removeApplication(i) {
		console.log(i);
		setApplicantList(applicantList.filter((re, r) => r !== i));
	}

	function denyButtonOnClick(i) {
		document.getElementById("application-card-" + i).classList.add("animate-left");
		setTimeout(() => {
			removeApplication(i);
			document.getElementById("application-card-" + i).classList.remove("animate-left");
		}, 500);
	}

	function acceptButtonOnClick(i) {
		document.getElementById("application-card-" + i).classList.add("animate-right");
		setTimeout(() => {
			removeApplication(i);
			document.getElementById("application-card-" + i).classList.remove("animate-right");
		}, 500);
	}

	function readMoreButtonOnClick(i) {
		setCurrentIndex(i);
		setOpenModal(true);
	}

	return (
		<div className="gradient-bg p-3 flex flex-col gap-3">
			<h1 className="text-center">Applications - {applicantList.length}/10</h1>
			<div className="flex flex-wrap gap-3 justify-center">
				{applicantList.map((a, i) => {
					const { type, info, badges } = a;
					return (
						<Card id={"application-card-" + i} key={i} className="">
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
							<CardBadges>{generateBadges(myBadges, badges)}</CardBadges>
							<InfoGrid fontSize={"0.75rem"} entries={info} />
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
			{openModal && <Modal applicantList={applicantList} setApplicantList={setApplicantList} companyBadges={myBadges} index={currentIndex} setOpenModal={setOpenModal} />}
		</div>
	);
};

export default ApplicationsContainer;
