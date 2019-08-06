import { ComponentLangMeta, loadComponentFrMeta } from '@/content/components.fr.loader';
import { ComponentMeta, loadComponentMeta } from '@/content/components.meta.loader';
import { PluginObject } from 'vue';

declare module 'vue/types/vue' {
    interface Vue {
        $meta: Meta;
    }
}

export class Meta {
    constructor(public langMeta: ComponentLangMeta[], public componentMeta: ComponentMeta[]) {

    }
}

const FrenchMetaPlugin: PluginObject<any> = {
    install(v, options) {
        v.prototype.$meta = new Meta(loadComponentFrMeta(), loadComponentMeta());
    }
};

export default FrenchMetaPlugin;
