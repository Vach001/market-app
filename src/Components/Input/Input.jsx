import clsx from "clsx";
import styles from "./Input.module.css"

export default function Input(props) {
  const { className, placeholder, required, type = "text", ...rest } = props;

  const classNames = clsx({ input: true }, className);

  return (
    <label className={styles.label}>
      {placeholder}
      {required && <span className={styles.inputRequired}>*</span>}
      <div>
        <input
          type={type}
          placeholder={placeholder}
          className={classNames}
          required={required}
          {...rest}
        />
      </div>
    </label>
  );
}