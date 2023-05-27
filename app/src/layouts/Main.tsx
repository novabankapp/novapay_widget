import { h } from "preact";
import { useAppContext } from "../AppContext";
import { RouteComponent, Router } from "./Router";
import { GenerateTRNForm } from "../routes/GenerateTRNForm";
import { GenerateTRNFeedback } from "../routes/GenerateTRNFeedback";
import { useState } from "preact/hooks";
import clsx from "clsx";
import { GenerateTRNButton } from "../routes/GenerateTRNButton";

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
    const homeElement  = config.widget.name == "form" ? GenerateTRNForm : GenerateTRNButton
     return (
       
        <div className="">
             <div className="bg-white">   
                {/* fixed bottom-2.5 right-2.5  */}
                <div className={clsx("relative min-h-44 ")}>
                    {<Router
                        onChange={(r) => setTitle(getTitle(r))}
                        routes={{
                            '/': <RouteComponent component={homeElement} />,
                             '/feedback': <RouteComponent component={GenerateTRNFeedback} />,
                           
                        }} /> 
                    }
                </div>
            </div>
        </div>
    )
}