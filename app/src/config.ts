interface InfraConfigurations {
    element?: HTMLElement;
}

export interface AppConfigurations {
    debug: boolean;
    apiKey: string;
    styles: {
        classNameContainer?: string;
    };
}

export type Configurations = InfraConfigurations & AppConfigurations;