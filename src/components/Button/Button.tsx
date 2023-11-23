import { IButtonProps } from "./Button.props";

export const Button = ({
  children,
  className,
  text,
  type = "button",
  ...props
}: IButtonProps): JSX.Element => {
  return (
    <button type={type} className={className} value={text} {...props}>
      {text}
      {children}
    </button>
  );
};
