import React, { useState, PropsWithChildren } from "react";

interface AppStateValue {
  username: string;
  shoppingCart: {
    items: {
      id: number;
      name: string;
    }[];
  };
}

const defaultContextValue: AppStateValue = {
  username: "Kana Chiyuki",
  shoppingCart: {
    items: [],
  },
};

export const appContext =
  React.createContext<AppStateValue>(defaultContextValue);
export const appSetStateContext = React.createContext<
  React.Dispatch<React.SetStateAction<AppStateValue>> | undefined
>(undefined);

export const AppStateProvider: React.FC<PropsWithChildren<{}>> = (props) => {
  const [state, setState] = useState<AppStateValue>(defaultContextValue);

  return (
    <appContext.Provider value={state}>
      <appSetStateContext.Provider value={setState}>
        {props.children}
      </appSetStateContext.Provider>
    </appContext.Provider>
  );
};
