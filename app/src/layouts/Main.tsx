import { h } from "preact";
import style from './main.css';
import { useAppContext } from "../AppContext";
import clsx from "clsx";
import { RouteComponent, Router } from "./Router";
import { GenerateTRNForm } from "../routes/GenerateTRNForm";
import { GenerateTRNFeedback } from "../routes/GenerateTRNFeedback";
import { useState } from "preact/hooks";

export const Main = () => {
     const config = useAppContext()    
     const [title, setTitle] = useState('');
     const getTitle = (route: string) => {
        switch (route) {
            case '/feedback':
                return  'TRN Generated';
            case '/':
            default:
                return 'Generate TRN';
        }
    };
     return (
        <div className={clsx(style.root)}>
             <div>     
                <div className={clsx(
                    style.container,
                    config.styles.classNameContainer)}>
                    {<Router
                        onChange={(r) => setTitle(getTitle(r))}
                        routes={{
                            '/': <RouteComponent component={GenerateTRNForm} />,
                             '/feedback': <RouteComponent component={GenerateTRNFeedback} />,
                            //'/faq': <RouteComponent component={Faq} />
                        }} /> 
                    }
                </div>
            </div>
        </div>
    )
}