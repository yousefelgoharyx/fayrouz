"use client";
import React from "react";
import { IconProps } from "phosphor-react";
type InputProps = {
  icon?: React.FC<IconProps>;
} & React.InputHTMLAttributes<HTMLInputElement>;
const Input = (props: InputProps) => {
  return (
    <div className="relative  w-full max-w-xs">
      {props.icon && (
        <props.icon size={24} className="absolute top-[12px] left-[16px]" />
      )}
      <input
        {...props}
        className={`h-[48px] w-full rounded-full bg-neutral-800 px-4 text-sm outline-none autofill:bg-black ${
          props.icon && " pl-[48px]"
        }`}
      />
    </div>
  );
};

export default Input;
