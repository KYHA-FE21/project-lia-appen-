import "./index.scss";

const InfoGrid = ({ entries = [], width, fontSize, color = "black", className = "" }) => {
  return (
    <div
      className={`info-container text-${color} ${className}`}
      style={{
        width: width,
        fontSize: fontSize,
      }}
    >
      {entries.map((entry) => <InfoGridEntry key={entry.icon} icon={entry.icon} children={entry.children} />)}
    </div>
  );
};

export function InfoGridEntry({ icon, children }) {
  return (
    <div className="flex items-center gap-2">
      <span>{icon}</span>
      {children}
    </div>
  );
}

export default InfoGrid;
