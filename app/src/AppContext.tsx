import { h,ComponentChildren, createContext } from "preact";
import { AppConfigurations } from "./config";
import {useContext} from "preact/hooks"
import { Merchant } from "./domain/transactionReferenceNumber";

export const ConfigContext = createContext<AppConfigurations & Merchant>({} as AppConfigurations & Merchant);
interface Props {
    children: ComponentChildren;
    config: AppConfigurations;
    merchant : Merchant;
    element?: HTMLElement;
}
export const AppContext = ({ children, config, merchant, element }: Props) => {
  
    return (
        <ConfigContext.Provider value={{...config,...merchant}}>
           {children}
        </ConfigContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(ConfigContext)
}