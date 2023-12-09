import styles from "./button.module.css";

function Button({
  Icon,
  label,
  type,
  disabled,
  onClick,
  borderRadius,
  fontSize,
  fontWeight,
  iconWidth,
  iconHeight,
  marginBottom,
}) {
  const btnStyle = {
    borderRadius,
    fontSize,
    fontWeight,
    marginBottom,
  };
  const iconStyle = {
    width: iconWidth,
    height: iconHeight,
  };
  return (
    <button
      className={`${styles.btn} ${styles[type]}`}
      disabled={disabled}
      onClick={onClick}
      style={btnStyle}
    >
      {Icon && <Icon className={styles.icon} style={iconStyle} />}
      <span>{label}</span>
    </button>
  );
}

export default Button;
