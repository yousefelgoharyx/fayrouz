import { cn } from "@/utils/cn";
import React from "react";

type VStackProps = {} & React.HTMLAttributes<HTMLDivElement>;
const VStack = ({ className, children, ...rest }: VStackProps) => {
  return (
    <div className={cn("flex flex-col", className)} {...rest}>
      {children}
    </div>
  );
};

export default VStack;
