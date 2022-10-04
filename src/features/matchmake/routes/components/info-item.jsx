function InfoItem({icon, text}) {
	return (
		<li className="info-item">
			{icon}
			<div>{text}</div>
		</li>
	);
}

export default InfoItem;
