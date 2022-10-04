/**
 * @param {{ direction: 'col'|'row', gap: string, children: [] }}
 */
function FlexContainer({ direction = "row", gap = "1", className, children }) {
  return <div className={`flex gap-${gap} flex-${direction} ${className}`}>{children}</div>;
}

export default FlexContainer;
