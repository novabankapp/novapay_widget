interface InfraConfigurations {
    element?: HTMLElement;
}
type WidgetName = "form" | "button" | "auto"
export interface AppConfigurations {
    debug: boolean;
    apiKey: string;
    widget: {
        name: WidgetName,
        parentId?:string,
        customerRef?: string,
        amount?: number,
        metadata?: string
    }
    
}

export type Configurations = InfraConfigurations & AppConfigurations;