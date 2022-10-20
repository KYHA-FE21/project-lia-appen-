import { Link, useNavigate, useParams } from "react-router-dom";
import "../styles/quest.scss";
import { Edit } from "lucide-react";
import Button from "../../../components/buttons";
import BtnSecondary from "../../../components/buttons/secondary-button";
import { MAX_QUESTIONNAIRES, useQuestionnaires } from "../api/questionnaire";
import i18n from "../i18n";

const Overview = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	// API call to get any pre questions based on this application id
	const { questionnaires, createQuestionnaire } = useQuestionnaires({
		advertisement_id: id,
	});

	async function handleCreateQuestionnaire() {
		const generatedID = await createQuestionnaire({ advertisement_id: id });

		if (generatedID) navigate(`/questionnaire/editor/${generatedID}`);
	}

	return (
		<div className="flex justify-center min-h-full">
			<div className="questionnaireContent questionnaire-cards-max-width-md flex flex-col justify-between p-12">
				<div className="overviewUpperContent">
					<div className="mb-8 flex justify-center">
						<div>
							<h1 className="text-2xl mb-3 text-center">
								{i18n()["Advertisement questions"]}
							</h1>
							<span className="text-sm my-3 block">ID: {id}</span>
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
						{questionnaires.map((item, i) => (
							<Link
								className="no-underline text-white"
								key={item.id}
								to={`/questionnaire/editor/${item.id}`}
							>
								<BtnSecondary
									icon={<Edit />}
									className="w-full bg-primary"
									color="white"
									bgColor="primary"
								>
									{i18n()
										["Question %1 - %2 alternatives"].replace("%1", i + 1)
										.replace("%2", item.alternatives.length)}
								</BtnSecondary>
							</Link>
						))}
					</div>
				</div>
				<div className="overviewLowerContent flex mb-4">
					<Link className="no-underline mr-1" to="/profile">
						<Button className="w-full">{i18n()["Go back"]}</Button>
					</Link>
					<Link className="no-underline ml-1" to="/profile">
						<Button disabled={true} className="w-full">
							{i18n().Continue}
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Overview;
