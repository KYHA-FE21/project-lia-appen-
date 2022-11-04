import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import FlexContainer from "../flex-container";
import LinkButton from "../link-button";
import CompanySection from "./company";
import StudentSection from "./student";

function SalesPitchSection() {
	const location = useLocation();
	const [selection, setSelection] = useState(location.hash.replace("#", ""));

	function handleSelectionClick(ev) {
		ev.preventDefault();

		const { hash } = ev.target;

		setSelection(hash.replace("#", ""));
	}

	const selectedBtn = { bgColor: "primary", textColor: "white" };
	const unSelectedBtn = { bgColor: "white", textColor: "black" };

	useEffect(() => {
		const el = document.getElementById(selection);
		if (el) el.scrollIntoView({ behavior: "smooth" });
	}, [selection]);

	return (
		<FlexContainer
			direction="col"
			gap="16"
			className="items-stretch mx-4 relative"
		>
			<FlexContainer direction="col" className="text-2xl items-center">
				<span className="font-display">Hur funkar det</span>
				<FlexContainer className="items-center" gap="4">
					<span className="font-display">som</span>
					<LinkButton
						{...(selection === "student" ? selectedBtn : unSelectedBtn)}
						className="text-sm"
						href="#student"
						onClick={handleSelectionClick}
					>
						Student
					</LinkButton>
					<LinkButton
						{...(selection === "company" ? selectedBtn : unSelectedBtn)}
						className="text-sm"
						href="#company"
						onClick={handleSelectionClick}
					>
						Företag
					</LinkButton>
					<span className="font-display">?</span>
				</FlexContainer>
			</FlexContainer>

			{selection === "student" && <StudentSection />}
			{selection === "company" && <CompanySection />}
		</FlexContainer>
	);
}

export default SalesPitchSection;
