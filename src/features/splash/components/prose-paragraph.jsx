function ProseParagraph({ textAlign = "justify", className = "", children }) {
  return (
    <p className={`leading-normal text-${textAlign} ${className}`}>
      {children}
    </p>
  );
}

export default ProseParagraph;
