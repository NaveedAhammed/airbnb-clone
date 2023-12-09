import styles from "./input.module.css";

function Input({
  id,
  label,
  type,
  disabled,
  formatPrice,
  required,
  register,
  errors,
}) {
  return (
    <div className={styles.container}>
      <input
        type={type}
        disabled={disabled}
        id={id}
        {...register(id, { required })}
        placeholder={label}
        className={styles.input}
        style={{
          paddingLeft: formatPrice ? "4rem" : "2rem",
          borderColor: errors[id] ? "#ff385c" : "#b0b0b0",
          ":focus": errors[id] ? "#ff385c" : "#000",
        }}
      />
    </div>
  );
}

export default Input;
