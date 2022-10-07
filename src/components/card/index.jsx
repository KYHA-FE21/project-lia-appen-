import "./index.scss";

function Card({
  id,
  children,
}) {
  return (
    <article className="card-container" id={id}>
      {children}
    </article>
  );
}

export function CardHeader({ children }) {
  return <div className="card-top">{children}</div>;
}

export function CardBadges({ children }) {
  return <div className="card-badges items-stretch gap-4">{children}</div>;
}

export function CardButtons({ children }) {
  return <div className="card-buttons items-stretch gap-4">{children}</div>;
}

export default Card;
