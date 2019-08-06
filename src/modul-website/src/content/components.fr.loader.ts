
import { anyJson, Decoder, object, string } from '@mojotech/json-type-validation';

export const componentsfrRequiredContext: any = require.context('./components', true, /\.fr.json$/);

export interface ComponentLangMeta {
    name: string;
    components: {
        [name: string]: {
            name: string;
            props: {
                [name: string]: string
            }
        }
    };
}

const componentMetaDecoder: Decoder<ComponentLangMeta> = object({
    name: string(),
    components: anyJson()
});

export function loadComponentFrMeta(): ComponentLangMeta[] {

    return componentsfrRequiredContext.keys().map((filename) => {

        let componentMeta: any = componentsfrRequiredContext(filename);
        try {
            componentMetaDecoder.runWithException(componentMeta);
        } catch (err) {
            console.error('Error while validating json file ' + filename, err);
        }

        return componentMeta as ComponentLangMeta;
    });
}
