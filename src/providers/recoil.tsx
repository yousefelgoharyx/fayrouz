"use client";
import { IconContext } from "phosphor-react";
import { ReactNode } from "react";
import { RecoilRoot } from "recoil";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <RecoilRoot>
      <IconContext.Provider
        value={{
          weight: "duotone",
        }}
      >
        {children}
      </IconContext.Provider>
    </RecoilRoot>
  );
};

export default Providers;

