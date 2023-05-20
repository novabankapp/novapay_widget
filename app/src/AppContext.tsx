import { h,ComponentChildren, createContext } from "preact";
import { AppConfigurations } from "./config";
import {useContext} from "preact/hooks"

export const ConfigContext = createContext<AppConfigurations>({} as AppConfigurations);
interface Props {
    children: ComponentChildren;
    config: AppConfigurations;
    element?: HTMLElement;
}
export const AppContext = ({ children, config, element }: Props) => {
  
    return (
        <ConfigContext.Provider value={config}>
           {children}
        </ConfigContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(ConfigContext)
}