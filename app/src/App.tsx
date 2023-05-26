import { h } from "preact";
import { Configurations } from "./config";
import { Main } from "./layouts/Main";
import { AppContext } from "./AppContext";
type Props = Configurations;
export const App = ({ element, ...appSettings }: Props) => {
    return (
    <AppContext config={appSettings} element={element}>
        <Main />
    </AppContext>
    )
   
};

