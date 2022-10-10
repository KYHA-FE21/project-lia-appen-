import "./index.scss";

function Card({ id, className = "", children }) {
	return (
		<article className={`shadow card-bg rounded-lg overflow-hidden ${className}`} id={id}>
			<div className="card-container gap-5 p-3 gradient">
				{children}
			</div>
		</article>
	);
}

export function CardHeader({ className = "", children }) {
	return <div className={`card-top py-2 ${className}`}>{children}</div>;
}

export function CardBadges({ className = "", children }) {
	return <div className={`card-badges items-stretch gap-4 ${className}`}>{children}</div>;
}

export function CardButtons({ className = "", children }) {
	return <div className={`card-buttons items-stretch gap-4 ${className}`}>{children}</div>;
}

export default Card;
