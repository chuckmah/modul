import { Meta } from 'meta-generator/dist';
import { ComponentMeta } from './content/components.meta.loader';

export interface ComponentState {
    [k: string]: ComponentMeta[];
}

export class ModulMeta {

    private _componentState: ComponentState;

    constructor(public componentMetas: ComponentMeta[], public modulMeta: Meta) {
        this._componentState = this.buildComponentState(componentMetas);
    }

    get version(): string {
        return this.modulMeta.packageVersion;
    }

    get componentState(): ComponentState {
        return this._componentState;
    }

    private buildComponentState(componentMetas: ComponentMeta[]): ComponentState {
        const result: ComponentState = {};
        componentMetas.forEach((componentMeta: ComponentMeta) => {

            if (result[componentMeta.category] && result[componentMeta.category].length > 0) {
                result[componentMeta.category].concat(componentMeta);
            } else {
                result[componentMeta.category] = [componentMeta];
            }
        });
        return result;
    }
}
