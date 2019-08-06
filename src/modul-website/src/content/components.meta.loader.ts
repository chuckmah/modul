
import { array, boolean, constant, Decoder, object, oneOf, optional } from '@mojotech/json-type-validation';

export const componentsRequiredContext: any = require.context('./components', true, /\.meta.json$/);

export interface ComponentMeta {
    category: string;
    type: string;
    beta: boolean;
    components?: any[];
}

const catogoryDecoder: Decoder<string> = oneOf(
    constant('content'),
    constant('forms'),
    constant('navigation'),
    constant('layout'),
    constant('windows'),
    constant('button')
);

const typeDecoder: Decoder<string> = oneOf(
    constant('components'),
    constant('utils')
);

const componentMetaDecoder: Decoder<ComponentMeta> = object({
    category: catogoryDecoder,
    type: typeDecoder,
    beta: boolean(),
    components: optional(array())
});

export function loadComponentMeta(): ComponentMeta[] {

    return componentsRequiredContext.keys().map((filename) => {

        let componentMeta: any = componentsRequiredContext(filename);
        try {
            componentMetaDecoder.runWithException(componentMeta);
        } catch (err) {
            console.error('Error while validating json file ' + filename, err);
        }

        return componentMeta as ComponentMeta;
    });
}
