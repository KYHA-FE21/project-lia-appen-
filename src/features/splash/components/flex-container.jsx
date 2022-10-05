/**
 * @param {{ direction: 'col'|'row', gap: string, children: [] }}
 */
function FlexContainer({
  direction = "row",
  gap = "1",
  className = "",
  children,
}) {
  return (
    <div className={`flex flex-${direction} gap-${gap} ${className}`.trim()}>
      {children}
    </div>
  );
}

export default FlexContainer;
