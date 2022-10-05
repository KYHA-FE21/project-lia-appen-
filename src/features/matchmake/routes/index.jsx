import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import "./index.scss";
import Information from "./information";
import Questions from "./questions";
import Verify from "./verify";

const Index = () => {
	const [searchParams] = useSearchParams();
	const [data, setData] = useState(null);
	const action = searchParams.get("action");
	useEffect(() => {
		if (!action) {
			setData(true);
		}
	}, [action]);
	return (
		<>
			{(() => {
				switch (action?.toLowerCase()) {
					case "questions":
						return <Questions />;
					case "verify":
						return <Verify />;
					default:
						return <Information data={data} />;
				}
			})()}
		</>
	);
};

export default Index;
