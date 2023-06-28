import React from "react";
import cn from "classnames";
import Spinner from "../Spinner";
type ButtonProps = {
  title: string;
  icon?: React.ReactNode;
  variant?: "primary" | "secondary" | "text";
  loading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
const Button = ({
  title,
  icon,
  variant = "primary",
  loading,
  ...rest
}: ButtonProps) => {
  const classes = cn({
    "bg-blue-700": variant === "primary",
    "bg-neutral-700": variant === "secondary",
    "h-[40px] min-w-[100px] w-full rounded-full px-3": true,
    "active:scale-95 transition-all": true,
    "hover:bg-neutral-800": variant === "text",
    "disabled:opacity-50 disabled:active:scale-100 disabled:cursor-not-allowed":
      true,
    "flex items-center justify-center gap-2": true,
  });
  return (
    <button className={classes} {...rest} disabled={loading}>
      {loading ? <Spinner size={24} /> : icon}
      <span>{title}</span>
    </button>
  );
};

export default Button;
