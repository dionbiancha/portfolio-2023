import React, {
  useContext,
  useState,
  createContext,
  ReactElement,
} from "react";

export enum SELECTED {
  webdesign,
  webDev,
  mobileDev,
}

interface Props {
  children: React.ReactNode;
}

const DEFAULT_VALUE = {
  projectSelected: SELECTED.webDev,
  setProjectSelected: (value: SELECTED) => {},
};

export const MenuContext = createContext(DEFAULT_VALUE);

export const MenuProvider = (props: Props): ReactElement => {
  const [projectSelected, setProjectSelected] = useState<SELECTED>(
    DEFAULT_VALUE.projectSelected
  );

  return (
    <MenuContext.Provider value={{ projectSelected, setProjectSelected }}>
      {props.children}
    </MenuContext.Provider>
  );
};

export default MenuContext;
