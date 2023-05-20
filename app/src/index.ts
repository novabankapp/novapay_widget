import { h, render } from "preact";
import { Configurations } from "./config";
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