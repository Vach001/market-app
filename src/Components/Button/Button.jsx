import clsx from "clsx";
import "./Button.module.css"

export default function Button(props) {
  const { children, outline, className, ...rest } = props;

  const classNames = clsx(
    {
      btn: true,
      "btnDefault": !outline,
      "btnOutline": outline,
    },
    className
  );

  return (
    <button className={classNames} {...rest}>
      {children}
    </button>
  );
}
