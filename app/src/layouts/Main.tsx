import { h } from "preact";
import { useAppContext } from "../AppContext";
import { RouteComponent, Router } from "./Router";
import { GenerateTRNForm } from "../routes/GenerateTRNForm";
import { GenerateTRNFeedback } from "../routes/GenerateTRNFeedback";
import { useState } from "preact/hooks";
import clsx from "clsx";

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
        <div className=" w-96">
             <div className="bg-white">   
                {/*<div>{title}</div>  */}
                <div className={clsx("relative min-h-44 ",config.styles.classNameContainer)}>
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