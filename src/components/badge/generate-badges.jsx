import Badge from ".";

function generateBadges(badges, compareArray, restProps) {
	return (
		<>
			{badges.map((badge) => (
				<Badge key={badge} disabled={!compareArray.includes(badge)} {...restProps}>{badge}</Badge>
			))}
		</>
	);
}

export default generateBadges;
