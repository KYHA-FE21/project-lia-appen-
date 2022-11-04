import { useState } from "react";
import Title from "../components/title";
import Wrapper from "../components/wrapper";
import InputField, { InputLabel } from "../../../components/input-field";
import PrimaryButton from "../../../components/buttons/index";
import TextArea from "../components/text-area";
import { Mail, GraduationCap, Star, Calendar } from "lucide-react";
import InputButton from "../components/input-button";
import { useEffect } from "react";

const EditInformation = ({ user }) => {
	const { data, update } = user;

	const [radioCheck, setRadioCheck] = useState(null);

	const [sendData, setSendData] = useState({
		school: "",
		email: "",
		bio: "",
		badges: [],
		badgesRaw: "",
		period: ["", ""],
		profession: "",
		location: "",
		work_type: "",
	});

	useEffect(() => {
		setSendData((state) => {
			return {
				...state,
				email: data.email,
				bio: data.bio,
				...user.data.attribute,
				badgesRaw: user.data.attribute.badges.join(", "),
			};
		});
		setRadioCheck(user.data.attribute.work_type);
	}, [user]);

	const handleSave = (e) => {
		const reqData = {
			id: data.id,
			name: data.name,
			email: sendData.email.length > 0 ? sendData.email : data.email,
			password: data.password,
			bio: sendData.bio.length > 0 ? sendData.bio : data.bio,
			attribute_id: data.attribute.id,
			attribute: {
				id: data.attribute.id,
				period:
					sendData.period[0].length > 0 && sendData.period[1].length > 0
						? sendData.period
						: data.attribute.period,
				profession:
					sendData.profession.length > 0
						? sendData.profession
						: data.attribute.profession,
				badges:
					sendData.badgesRaw.length > 0
						? [...new Set(sendData.badgesRaw.split(",").map((badge) => badge.trim()))].filter(Boolean)
						: data.attribute.badges,
				location:
					sendData.location.length > 0
						? sendData.location
						: data.attribute.location,
				work_type:
					sendData.work_type,
				school:
					sendData.school.length > 0 ? sendData.school : data.attribute.school,
				type: data.attribute.type,
				decline_rate: data.attribute.decline_rate,
				response_time: data.attribute.response_time,
				openings: data.attribute.openings,
				is_active: data.attribute.is_active,
			},
		};

		update(reqData);
	};

	const handleRadio = (e) => {
		setRadioCheck(e.target.value);
		setSendData((state) => ({
			...state,
			work_type: e.target.value,
		}));
	};

	return (
		<>
			<Wrapper direction="column" gap={[3]} padding={[5, 1, 0, 1]}>
				<Title size={[1.5]}>{`${
					data.attribute.type === "student" ? "Om dig" : "Om företaget"
				}`}</Title>

				<InputField
					value={sendData.email}
					onChange={(e) =>
						setSendData((state) => ({ ...state, email: e.target.value }))
					}
					icon={<Mail strokeWidth={1} />}
					type="email"
					placeholder="E-post"
				/>

				{data.attribute.type === "student" && (
					<InputField
						value={sendData.school}
						onChange={(e) =>
							setSendData((state) => ({ ...state, school: e.target.value }))
						}
						icon={<GraduationCap strokeWidth={1} />}
						type="text"
						placeholder="Skola / Utbildning"
					/>
				)}

				<InputField
					value={sendData.location}
					onChange={(e) =>
						setSendData((state) => ({ ...state, location: e.target.value }))
					}
					icon={<GraduationCap strokeWidth={1} />}
					type="text"
					placeholder={`${
						data.attribute.type === "company"
							? "Vilken stad befinner företaget sig inom?"
							: "Vilken stad befinner du dig inom?"
					}`}
				/>

				{data.attribute.type === "student" && (
					<>
						<InputField
							value={sendData.profession}
							onChange={(e) =>
								setSendData((state) => ({
									...state,
									profession: e.target.value,
								}))
							}
							icon={<GraduationCap strokeWidth={1} />}
							type="text"
							placeholder="Din yrkesinriktning?"
						/>

						<InputField
							value={sendData.badgesRaw}
							list="badges-list"
							onChange={(e) =>
								setSendData((state) => ({
									...state,
									badgesRaw: e.target.value,
								}))
							}
							icon={<Star strokeWidth={1} />}
							type="text"
							placeholder="Kompentenser"
						/>
					</>
				)}

				<datalist id="badges-list">
					<option value="HTML" />
					<option value="JavaScript" />
					<option value="ReactJs" />
					<option value="CSS" />
					<option value="PHP" />
				</datalist>

				<TextArea
					value={sendData.bio}
					onChange={(e) =>
						{
							setSendData((state) => ({ ...state, bio: e.target.value }))
						}
					}
					placeholder={`Kort beskrivning om ${
						data.attribute.type === "student" ? "dig själv" : "företaget"
					}`}
				/>
			</Wrapper>

			{data.attribute.type === "student" && (
				<Wrapper direction="column" gap={[3]} padding={[7, 1, 7, 1]}>
					<Title size={[1.5]}>Önskemål LIA</Title>

					<InputLabel>Datum period från</InputLabel>
					<InputField
						value={sendData.period[0]}
						onChange={(e) =>
							setSendData((state) => ({
								...state,
								period: [e.target.value, state.period[1]],
							}))
						}
						icon={<Calendar strokeWidth={1} />}
						type="date"
					/>

					<InputLabel>Datum period till</InputLabel>
					<InputField
						value={sendData.period[1]}
						onChange={(e) =>
							setSendData((state) => ({
								...state,
								period: [state.period[0], e.target.value],
							}))
						}
						icon={<Calendar strokeWidth={1} />}
						type="date"
					/>

					<Wrapper direction="column" gap={[1]}>
						<Wrapper gap={[1]} styleDirection="center">
							<InputButton
								id={1}
								name="work_type"
								checked={radioCheck === 'Remote'}
								type="radio"
								value="Remote"
								label="Remote"
								onChange={handleRadio}
							/>

							<InputButton
								id={2}
								name="work_type"
								checked={radioCheck === 'På plats'}
								type="radio"
								value="På plats"
								label="På plats"
								onChange={handleRadio}
							/>

							<InputButton
								id={3}
								name="work_type"
								checked={radioCheck === 'Hybrid'}
								type="radio"
								value="Hybrid"
								label="Hybrid"
								onChange={handleRadio}
							/>
						</Wrapper>
					</Wrapper>
				</Wrapper>
			)}

			<Wrapper styleDirection="center" padding={[0, 0, 5, 0]} gap={[1]}>
				<PrimaryButton onClick={handleSave}>Spara</PrimaryButton>
			</Wrapper>
		</>
	);
};

export default EditInformation;
