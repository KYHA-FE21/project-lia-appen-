import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import "./index.scss";
import Information from "./information";
import Questions from "./questions";
import Verify from "./verify";

const Index = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [data, setData] = useState(null);
	const action = searchParams.get("action")?.toLowerCase();
	const actionExists = ["questions", "verify"].includes(action);

	useEffect(() => {
		if (!actionExists) {
			setSearchParams({});
			setTimeout(() => {
				if (!data) {
					setData({
						questions: [
							{ id: 0, title: "Fråga 1", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, fuga maxime! Illo exercitationem dicta delectus tenetur nobis ex ea aliquam?", answers: ["Svar 1", "Svar 2", "Svar 3", "Svar 4"] },
							{ id: 1, title: "Fråga 2", body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur harum atque quibusdam vel placeat enim doloremque nisi cumque eos. Deserunt quam eum ullam quidem molestias! Hic omnis doloremque maiores ipsa?", answers: ["Svar 1", "Svar 2", "Svar 3"] },
							{ id: 2, title: "Fråga 3", body: "Gillar du React?", answers: ["Ja!"] },
						],
						answers: {},
					});
				}
			}, 1_000);
		}
	}, [actionExists, setSearchParams, data]);
	return (
		<>
			{action === "questions" && <Questions searchParams={searchParams} setSearchParams={setSearchParams} data={data} setData={setData} />}
			{action === "verify" && <Verify setSearchParams={setSearchParams} data={data} setData={setData} />}
			{!actionExists && <Information data={data} setData={setData} setSearchParams={setSearchParams} />}
		</>
	);
};

export default Index;
