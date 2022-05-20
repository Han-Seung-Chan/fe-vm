function Button({ className, content, disabled, onClick }) {
  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {content}
    </button>
  );
}

export default Button;
