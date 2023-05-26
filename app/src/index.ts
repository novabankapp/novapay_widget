import { h, render } from "preact";
import { Configurations } from "./config";
import './style/index.css';
import loader from "./loader";
import { App } from "./App";

/**
 * Default configurations that are overridden by
 * parameters in embedded script.
 */
const defaultConfig: Configurations = {
    apiKey:"",
    debug: false,
    styles: {}
};



// main entry point - calls loader and render Preact app into supplied element
loader(
    window,
    defaultConfig,
    window.document.currentScript,
    (el, config) => render(h(App, { ...config, element: el }), el));


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