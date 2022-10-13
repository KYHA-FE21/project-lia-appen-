import React from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/quest.scss";
import EditLink from "../components/editLink";
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
		<div className="questContainer">
			<div className="questContent">
				<div className="overviewUpperContent">
					<div className="overviewTextcontet">
						<div>
							<h1>Annons formulär</h1>
							<p>
								Med vårt verktyg för att skapa ansökningsformulär kan du enkelt skapa verifieringsfrågor för din annons.
								Varje sökande tilldelas sedan detta formulär under sin ansökningsprocess.
							</p>
						</div>
					</div>
					<Link className="no-underline" to={`/questionnaire/create/${id}`}>
						<Button children="LÄGG TILL" className="w-full mb-6" />
					</Link>
					<div className="overviewListContent">
						<h2>1/5 frågor</h2>
						{questions.map((item, i) => (
							<Link className="no-underline text-white" key={item.id + i} to={`/questionnaire/create/${item.id}`}>
								<BtnSecondary children={`Fråga ${i} - ${item.option}`} icon={<Edit />} className="w-full bg-primary" />
							</Link>
						))}
					</div>
				</div>
				<div className="overviewLowerContent">
					<Link className="no-underline" to="/company/edit">
						<Button children="TILLBAKA" className="w-full" />
					</Link>
					<Link className="no-underline" to="/profile">
						<Button children="FORTSÄTT" disabled={true} className="w-full" />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Overview;
