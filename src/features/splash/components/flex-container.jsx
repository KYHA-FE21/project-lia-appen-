/**
 * @param {{ direction: 'col'|'row', gap: string, desktopDirection: 'col'|'row',  children: [] }}
 */
function FlexContainer({
	direction = "row",
	desktopDirection = "",
	gap = "1",
	className = "",
	children,
	innerRef,
	...restProps
}) {
	let dirClasses = "flex-" + direction;

	if (desktopDirection) {
		dirClasses += " md:flex-" + desktopDirection;
	}

	return (
		<div
			className={`flex ${dirClasses} gap-${gap} ${className}`}
			ref={innerRef}
			{...restProps}
		>
			{children}
		</div>
	);
}

export default FlexContainer;
