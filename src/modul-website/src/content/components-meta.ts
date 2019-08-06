import { Meta, MetaService } from 'meta-generator/dist';

class ComponentsMeta {

    private _modulComponentMeta: MetaService;

    constructor() {
        this._modulComponentMeta = new MetaService(require('@ulaval/modul-components/dist/modul-meta.json') as Meta);
    }

    get modulComponentMeta(): MetaService {
        return this._modulComponentMeta;
    }

    get version(): string {
        return this._modulComponentMeta.meta.modulVersion;
    }

}
const componentsMeta: ComponentsMeta = new ComponentsMeta();

export default componentsMeta;
