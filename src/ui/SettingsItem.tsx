"use client";
import React from "react";

interface Props extends React.HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
  title: string;
  description: string;
  icon: any;
}
const SettingsItem = (props: Props) => {
  return (
    <div className="flex items-center justify-between rounded-lg bg-neutral-800 p-4">
      <div className="flex items-center gap-4">
        <props.icon className="flex-shrink-0" weight="duotone" size={24} />
        <div>
          <h2 className="text-md font-bold">{props.title}</h2>
          <p className="text-sm text-neutral-400">{props.description}</p>
        </div>
      </div>
      {props.children}
    </div>
  );
};

export default SettingsItem;
