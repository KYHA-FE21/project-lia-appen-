function Review({ info, text }) {
	return (
		<li className="review">
			<h2>{info}</h2>
			<p>{text}</p>
		</li>
	);
}

export default Review;
