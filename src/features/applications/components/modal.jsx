import { useState } from "react";
import { ChevronLeft, ChevronRight, X, Check } from "lucide-react";
import Badge from "../../../components/badge";
import InfoText from "../../../components/info-grid";
import "./modal.scss";
import SecondaryButton from "../../../components/buttons/secondary-button";

const Modal = ({ applicantList, setApplicantList, companyBadges, index, setOpenModal }) => {
	const [currentIndex, setCurrentIndex] = useState(index);

	function remove(i, m) {
		let animationDir;
		m === "r" ? (animationDir = "animate-right") : (animationDir = "animate-left");

		document.getElementById("modal-card").classList.add(animationDir);
		setTimeout(() => {
			if (applicantList.length === 1) {
				setOpenModal(false);
			} else if (i === applicantList.length - 1) setCurrentIndex(0);
			setApplicantList(applicantList.filter((re, r) => r !== i));
			document.getElementById("modal-card").classList.remove(animationDir);
			document.getElementById("modal-card").classList.add("animate-from-top");
		}, 500);
	}

	return (
		<div className="modal-background">
			<div className="modal-container">
				<div className="modal-card" id="modal-card">
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						<h2>{applicantList[currentIndex].type}</h2>
						<button className="modal-close-button" onClick={() => setOpenModal(false)}>
							X
						</button>
					</div>
					<div className="card-badges">
						{companyBadges.map((badge) => {
							return applicantList[currentIndex].badges.some((e) => e === badge) ? <Badge>{badge}</Badge> : <Badge opacity="0.3">{badge}</Badge>;
						})}
					</div>
					<InfoText startTime={applicantList[currentIndex].startTime} endTime={applicantList[currentIndex].endTime} workModel={applicantList[currentIndex].workModel} location={applicantList[currentIndex].location} />
					<div className="modal-description-container">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores delectus quaerat velit maiores perferendis blanditiis, voluptatem ducimus omnis ea natus totam libero consectetur repellat. Exercitationem a ea eum atque, minus accusantium, dignissimos iure amet vel ducimus maxime ipsum neque blanditiis eveniet debitis itaque magnam, dicta nisi aliquam officia sunt dolorem ut.
							<br />
							<br /> Est, vero dolor delectus incidunt nesciunt alias, similique odit dicta tempora voluptates adipisci debitis vitae. Temporibus asperiores ducimus voluptatum! Libero quam qui quisquam consectetur laborum pariatur harum odit maiores, tempore enim suscipit asperiores. Fugiat porro veritatis temporibus vero quia, odit nisi nemo molestias provident cupiditate nulla, voluptatem nam facilis.
						</p>
					</div>
					<div className="card-buttons">
						<SecondaryButton width="50%" logo={<X />} bg="#fd6d6d" onClick={() => remove(currentIndex, "l")}>
							Neka
						</SecondaryButton>
						<SecondaryButton width="50%" logo={<Check />} bg="#32ba78" onClick={() => remove(currentIndex, "r")}>
							Acceptera
						</SecondaryButton>
					</div>
				</div>
				<div className="modal-bottom-contoller">
					<button className="modal-arrow-left" onClick={() => (currentIndex !== 0 ? setCurrentIndex(currentIndex - 1) : setCurrentIndex(applicantList.length - 1))}>
						<ChevronLeft />
					</button>
					<span>
						{currentIndex + 1} / {applicantList.length}
					</span>
					<button className="modal-arrow-right" onClick={() => (currentIndex !== applicantList.length - 1 ? setCurrentIndex(currentIndex + 1) : setCurrentIndex(0))}>
						<ChevronRight />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
