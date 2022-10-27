import React from "react";
import InputField, { InputLabel } from "../../../components/input-field";
import Button from "../../../components/buttons";
import Select from "./option";
import { User, MapPin, CalendarDays, Wrench, Globe2, Users, Plus } from "lucide-react";

const Modal = ({ display, data = null, method = "POST" }) => {
	const [id, setId] = React.useState(""); // on existing for PATCH
	const [profession, setProfession] = React.useState("");
	const [location, setLocation] = React.useState("");
	const [period, setPeriod] = React.useState(["", ""]);
	const [badges, setBadges] = React.useState("");
	const [workType, setWorkType] = React.useState("");
	const [openings, setOpenings] = React.useState();

	const handleSubmit = (e) => {
		e.preventDefault();

		let data = {
			profession,
			location,
			period,
			badges,
			workType,
			openings,
			type: "advertisement",
		};
		if (id) data.id = id;

		// FETCH
	};

	React.useEffect(() => {
		if (data) console.log(data); // Lägg till data i state fält
	}, [data]);

	return (
		<div className={`advertisement-modal-container ${display ? "flex" : "hidden"}`}>
			<div className="content bg-white my-6 rounded-md p-8">
				<h1 className="text-xl text-center">Skapa/Redigera Annons</h1>
				<form className="flex flex-col justify-between h-full" onSubmit={handleSubmit}>
					<div>
						<div className="mt-8">
							<InputLabel children="Yrke" />
							<InputField
								required
								icon={<User size={30} className="text-grey pt-2" />}
								placeholder="Systemutvecklare"
								className="mt-2"
								value={profession}
								handleChange={(e) => setProfession(e.target.value)}
							/>
						</div>
						<div className="mt-8">
							<InputLabel children="Plats" />
							<InputField
								required
								placeholder="Örebro"
								icon={<MapPin size={30} className="text-grey pt-2" />}
								className="mt-2"
								value={location}
								handleChange={(e) => setLocation(e.target.value)}
							/>
						</div>
						<div className="mt-8">
							<InputLabel children="Period" />
							<div className="location-contaier">
								<InputField
									required
									type="date"
									icon={<CalendarDays size={30} className="text-grey pt-2" />}
									className={`mt-2 ${!period[0] ? "text-grey" : "text-black"}`}
									value={period[0]}
									handleChange={(e) => setPeriod([e.target.value, period[1]])}
								/>
								<InputField
									required
									type="date"
									className={`mt-2 ${!period[1] ? "text-grey" : "text-black"}`}
									value={period[1]}
									handleChange={(e) => setPeriod([period[0], e.target.value])}
								/>
							</div>
						</div>
						<div className="mt-8">
							<InputLabel children="Kunskaper" />
							<div className="flex">
								<InputField
									placeholder="Typescript"
									icon={<Wrench size={30} className="text-grey pt-2" />}
									className="mt-2"
									value={badges}
									handleChange={(e) => setBadges(e.target.value)}
								/>
								<Button children={<Plus size={20} className="text-white" />} className=" mt-2 bg-green ml-2" />
							</div>
						</div>
						<div className="mt-8">
							<InputLabel children="Arbetsform" />
							<Select
								required
								icon={<Globe2 size={30} className="text-grey pt-2" />}
								className="mt-2"
								value={workType}
								handleChange={(e) => setWorkType(e.target.value)}
							/>
						</div>
						<div className="mt-8">
							<InputLabel children="Antal" />
							<InputField
								required
								placeholder="0"
								type="number"
								icon={<Users size={30} className="text-grey pt-2" />}
								className="mt-2"
								value={openings}
								handleChange={(e) => setOpenings(e.target.value)}
							/>
						</div>
					</div>
					<Button className="w-full" children={id ? "Updatera" : "Skapa annons"} />
				</form>
			</div>
		</div>
	);
};

export default Modal;
