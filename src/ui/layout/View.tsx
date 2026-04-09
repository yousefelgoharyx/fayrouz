import { cn } from "@/utils/cn";
import React from "react";

type ViewProps = {} & React.HTMLAttributes<HTMLDivElement>;
const View = ({ className, children, ...rest }: ViewProps) => {
  return (
    <div className={cn("flex", className)} {...rest}>
      {children}
    </div>
  );
};

export default View;
