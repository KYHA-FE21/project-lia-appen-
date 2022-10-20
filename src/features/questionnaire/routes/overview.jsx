import React from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/quest.scss";
import { Edit } from "lucide-react";
import Button from "../../../components/buttons";
import BtnSecondary from "../../../components/buttons/secondary-button";

const Overview = () => {
	const { id } = useParams();
	// API call to get any pre questions based on this application id
	// If existing questions, render these below

	// Mock
	const questions = [{ id: "2", option: "3 svarsalternativ" }];

	return (
		<div className="flex justify-center">
			<div className="questContent flex flex-col justify-between p-12">
				<div className="overviewUpperContent">
					<div className="mb-8 flex justify-center">
						<div>
							<h1 className="text-2xl mb-3 text-center">Annons formulär</h1>
							<p className="text-center">
								Med vårt verktyg för att skapa ansökningsformulär kan du enkelt skapa verifieringsfrågor för din annons.
								Varje sökande tilldelas sedan detta formulär under sin ansökningsprocess.
							</p>
						</div>
					</div>
					<Link className="no-underline" to={`/questionnaire/create/${id}`}>
						<Button children="LÄGG TILL" className="w-full mb-6" />
					</Link>
					<div>
						<h2 className="text-base mb-4">1/5 frågor</h2>
						{questions.map((item, i) => (
							<Link className="no-underline text-white" key={item.id + i} to={`/questionnaire/create/${item.id}`}>
								<BtnSecondary
									children={`Fråga ${i + 1} - ${item.option}`}
									icon={<Edit />}
									className="w-full bg-primary"
									color="white"
									bgColor="primary"
								/>
							</Link>
						))}
					</div>
				</div>
				<div className="overviewLowerContent flex mb-4">
					<Link className="no-underline mr-1" to="/profile">
						<Button children="TILLBAKA" className="w-full" />
					</Link>
					<Link className="no-underline ml-1" to="/profile">
						<Button children="FORTSÄTT" disabled={true} className="w-full" />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Overview;
