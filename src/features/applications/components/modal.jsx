import { X, Check } from "lucide-react";
import SecondaryButton from "../../../components/buttons/secondary-button";
import generateBadges from "../../../components/badge/generate-badges";
import Heading from "../../matchmake/components/heading";
import { CardBadges, CardButtons } from "../../../components/card";
import InfoGrid from "../../../components/info-grid";
import "./modal.scss";

const Modal = ({ applicantList, setApplicantList, companyBadges, currentIndex, setOpenModal }) => {
	function remove(i) {
		setOpenModal(false);
		setApplicantList(applicantList.filter((re, r) => r !== i));
	}
	return (
		<>
			<div
				className="fixed inset-0 z-1 bg-black opacity-5"
				onClick={() => {
					setOpenModal(false);
				}}
			></div>
			<div className="flex flex-col gap-3 rounded-md bg-white p-3 m-auto fixed inset-0 z-1" style={{maxHeight:"min(100%, 500px)", maxWidth:"min(calc(100% - 24px), 640px)"}}>
				<Heading
					className="text-lg"
					{...{
						heading: applicantList[currentIndex].type,
						icon: <X size="30" onClick={() => setOpenModal(false)} />,
					}}
				/>
				<CardBadges className="flex text-white justify-center">{generateBadges(companyBadges, applicantList[currentIndex].badges)}</CardBadges>
				<InfoGrid color="black" fontSize={"0.75rem"} entries={applicantList[currentIndex].info} />
				<div className="p-2 flex flex-col gap-4 overflow-auto" style={{ borderTop: "1px solid black", borderBottom: "1px solid black" }}>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores delectus quaerat velit maiores perferendis blanditiis, voluptatem ducimus omnis ea natus totam libero consectetur repellat. Exercitationem a ea eum atque, minus accusantium, dignissimos iure amet vel ducimus maxime ipsum neque blanditiis eveniet debitis itaque magnam, dicta nisi aliquam officia sunt dolorem ut.</p>
					<p>Est, vero dolor delectus incidunt nesciunt alias, similique odit dicta tempora voluptates adipisci debitis vitae. Temporibus asperiores ducimus voluptatum! Libero quam qui quisquam consectetur laborum pariatur harum odit maiores, tempore enim suscipit asperiores. Fugiat porro veritatis temporibus vero quia, odit nisi nemo molestias provident cupiditate nulla, voluptatem nam facilis.</p>
				</div>
				<CardButtons className="flex h-10 mt-auto">
					<SecondaryButton icon={<X />} onClick={() => remove(currentIndex, "l")} color="white" bgColor="red" className="text-white w-full text-sm">
						Neka
					</SecondaryButton>
					<SecondaryButton icon={<Check />} onClick={() => remove(currentIndex, "r")} color="white" bgColor="green" className="text-white w-full text-sm">
						Acceptera
					</SecondaryButton>
				</CardButtons>
			</div>
		</>
	);
};

export default Modal;
