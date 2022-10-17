import React from "react";
import Button from "../../../components/buttons";
import TextArea from "../components/TextArea";
import IconBtn from "../components/iconBtn";
import { X, Check, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";

const Create = ({ handleSubmit }) => {
	const [amount, setAmount] = React.useState(3);
	const [questionBody, setQuestionBody] = React.useState("");
	const [data, setData] = React.useState(["", ""]);

	const newAnswear = (i, type = "Fel") => {
		return {
			label: (
				<span className="flex items-center text-sm">
					Svarsalternativ #{i} - {type}{" "}
					<span
						className="ml-2"
						style={{ color: type === "Fel" ? "#FD6D6D" : "#32BA78" }}
					>
						{type === "Fel" ? <X /> : <Check />}
					</span>
				</span>
			),
			placeholder: "Aaa",
			rows: 2,
			id: `questAnswear${i}`,
		};
	};

	const initialState = [newAnswear(1, "Rätt"), newAnswear(2)];

	const reducer = (state, action) => {
		switch (action.type) {
			case "ADD":
				setAmount(amount + 1);
				setData([...data, ""]);
				return [...state, newAnswear(amount)];
			case "REMOVE":
				setAmount(amount - 1);
				let newData = data.slice(0, -1);
				setData(newData);
				const newState = state.slice(0, -1);
				return newState;
			default:
				return state;
		}
	};

	const [questions, dispatch] = React.useReducer(reducer, initialState);

	React.useEffect(() => {
		console.log(data);
	}, [data]);

	function handleQuestionnaireSubmit (ev) {
		ev.preventDefault()

		const { questionbody, question1, question2, question3, question4 } = ev.target.elements

		console.log(data)

		// validate

		// handleSubmit({... })
	}

	return (
		<div className="flex justify-center">
			<form className="questContent flex flex-col justify-between p-12" onSubmit={handleQuestionnaireSubmit}>
				<div>
					<h1 className="text-2xl mb-3 text-center">
						Skapa/Redigera verifieringsfråga
					</h1>
					<TextArea
						label="Huvudtext för frågan:"
						placeholder="Aaa"
						rows="12"
						id="question-body"
						value={questionBody}
						setValue={(a) => {
							setQuestionBody(a);
						}}
						name={"questionbody"}
					/>
					{questions.map((item, qi) => (
						<TextArea
							key={item.id}
							label={item.label}
							placeholder={item.placeholder}
							rows={item.rows}
							id={item.id}
							value={data[qi]}
							setValue={(a) => {
								setData(
									data.map((item, di) => {
										if (qi === di) return a;
										return item;
									})
								);
							}}
							name={"question" + (qi+1)}
						/>
					))}
					<div className="flex justify-center items-center mb-10">
						<IconBtn
							icon={<Minus size={20} />}
							onClick={() => dispatch({ type: "REMOVE" })}
							disabled={questions.length === 1}
						/>
						<span>{questions.length} / 4 </span>
						<IconBtn
							icon={<Plus size={20} />}
							onClick={() => dispatch({ type: "ADD" })}
							disabled={questions.length === 4}
						/>
					</div>
				</div>
				<div className="createLowerContent">
					<Button className="w-full bg-green mb-8">SPARA</Button>
					<Link to="/questionnaire/overview/*" className="no-underline">
						<Button className="w-full bg-primary mb-8" type="button" disabled={true}>
							TA BORT
						</Button>
					</Link>
				</div>
			</form>
		</div>
	);
};

export default Create;
