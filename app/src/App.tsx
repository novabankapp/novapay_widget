import { h } from "preact";
import { Configurations } from "./config";
import { Main } from "./layouts/Main";
import { AppContext } from "./AppContext";
import { Merchant } from "./domain/transactionReferenceNumber";

export type MerchantProps = {
    merchant : Merchant
}
type Props = Configurations & MerchantProps;
export const App = ({ element, merchant, ...appSettings }: Props) => {
    return (
    <AppContext config={appSettings} merchant={merchant} element={element}>
        <Main />
    </AppContext>
    )
   
};

