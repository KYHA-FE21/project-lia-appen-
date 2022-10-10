import "./index.scss";

function Card({
	id,
	children,
}) {
	return (
		<article className="shadow card-bg rounded-lg overflow-hidden" id={id}>
			<div className="card-container gap-5 p-3 gradient">
				{children}
			</div>
		</article>
	);
}

export function CardHeader({ children }) {
	return <div className="card-top py-2">{children}</div>;
}

export function CardBadges({ children }) {
	return <div className="card-badges items-stretch gap-4">{children}</div>;
}

export function CardButtons({ children }) {
	return <div className="card-buttons items-stretch gap-4">{children}</div>;
}

export default Card;
