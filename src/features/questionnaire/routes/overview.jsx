import { Link, useNavigate, useParams } from "react-router-dom";
import "../styles/quest.scss";
import { ArrowLeftCircle, Edit } from "lucide-react";
import Button from "../../../components/buttons";
import BtnSecondary from "../../../components/buttons/secondary-button";
import useQuestionnaires from "../hooks/use-questionnaires";
import i18n from "../i18n";
import { MAX_QUESTIONNAIRES } from "../api/questionnaire";
import IconLink from "../components/icon-link";

const QuestionnaireRedirectButton = ({ entry, index }) => {
	return (
		<Link
			className="no-underline text-white"
			to={`/questionnaire/editor/${entry.id}`}
		>
			<BtnSecondary
				icon={<Edit />}
				className="w-full bg-primary"
				color="white"
				bgColor="primary"
			>
				{i18n()
					["Question %1 - %2 alternatives"].replace("%1", index + 1)
					.replace("%2", entry.alternatives.length)}
			</BtnSecondary>
		</Link>
	);
};

const Overview = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	// API call to get any pre questions based on this application id
	const { questionnaires, createQuestionnaire } = useQuestionnaires({
		advertisement_id: id,
	});

	async function handleCreateQuestionnaire() {
		const response = await createQuestionnaire({ advertisement_id: id });

		if (response.data) navigate(`/questionnaire/editor/${response.data.id}`);
	}

	return (
		<div className="flex justify-center h-full">
			<div className="questionnaireContent questionnaire-cards-max-width-md flex flex-col gap-3 justify-between p-12">
				<div className="overviewUpperContent">
					<div className="mb-8 flex justify-center">
						<div>
							<IconLink to="/advertisement" icon={<ArrowLeftCircle />}>
								{i18n()["Go back"]}
							</IconLink>
							<h1 className="text-2xl mb-3 text-center">
								{i18n()["Advertisement questions"]}
							</h1>
							<p className="text-justify leading-normal">
								{i18n()["Overview.pitch"]}
							</p>
						</div>
					</div>

					<Button
						className="w-full mb-6"
						onClick={handleCreateQuestionnaire}
						disabled={questionnaires.length === MAX_QUESTIONNAIRES}
					>
						{i18n().Add}
					</Button>

					<div className="flex flex-col gap-4">
						<h2 className="text-base">
							{i18n()
								["%1/%2 questions"].replace("%1", questionnaires.length)
								.replace("%2", MAX_QUESTIONNAIRES)}
						</h2>
						{questionnaires.map((entry, i) => (
							<QuestionnaireRedirectButton
								key={entry.id}
								entry={entry}
								index={i}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Overview;
