import Badge from ".";

function generateBadges(badges, compareArray) {
  return (
    <>
      {badges.map((badge) => (
        <Badge key={badge} disabled={!compareArray.includes(badge)}>{badge}</Badge>
      ))}
    </>
  );
}

export default generateBadges;
