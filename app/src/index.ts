import { h, render } from "preact";
import { Configurations } from "./config";
import './style/index.css';
import loader from "./loader";
import { App } from "./App";
import { merchantRepo } from "./main";
import { Merchant } from "./domain/transactionReferenceNumber";
//import { getAPI } from "./data/api/axios_instance";

export const checkKey = async (key: string) : Promise<Merchant | null> => {
    try{
       var response = await merchantRepo.validateMerchantApiKey(key)
       console.log(response)
       return response.merchant
    }
    catch(err : any){
        console.log(err)
        console.log(err.message)
        throw new Error("error validating api key")
     }
}

/*getAPI<any>("https://www.google.com").then(
    res => console.log(res)
)*/

/**
 * Default configurations that are overridden by
 * parameters in embedded script.
 */
const defaultConfig: Configurations = {
    apiKey:"",
    debug: false,
    widget: {
       name: "form",
    }
};

console.log(process.env.PREACT_CLIENT_SECRET);

// main entry point - calls loader and render Preact app into supplied element
loader(
    window,
    defaultConfig,
    window.document.currentScript,
    (el, config, merchant) => render(h(App, { ...config, element: el, merchant: merchant }), el));


/*export type ButtonConfig = {
    generateTRN : () => void
}
export class Nova {
    _config
    public constructor(config: ButtonConfig){
         this._config = config
    }
    public render(elementIdentifier: string){
        const wrappingElement =  window.document.getElementById(elementIdentifier) ?? window.document.body
        const targetElement = wrappingElement?.appendChild(window.document.createElement('div'));
        render(h(NovaButton, { ...this._config, element: targetElement }), targetElement)
    }
}

window.novaPay = new Nova({ generateTRN : () => console.log("") })
console.log(novaPay)*/