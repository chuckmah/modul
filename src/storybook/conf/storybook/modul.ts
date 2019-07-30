import FrenchPlugin from '@chuckmah/modul-components/dist/lang/fr';
import '@chuckmah/modul-components/dist/styles/main.scss';
import { FRENCH } from '@chuckmah/modul-components/dist/utils/i18n/i18n';
import '@chuckmah/modul-components/dist/utils/polyfills';
import DefaultSpritesPlugin from '@chuckmah/modul-components/dist/utils/svg/default-sprites';
import UtilsPlugin, { UtilsPluginOptions } from '@chuckmah/modul-components/dist/utils/utils-plugin';
import Vue, { PluginObject } from 'vue';
import './styles/storybook.scss';


export const ModulPlugin: PluginObject<any> = {
    install(v, options): void {

        Vue.config.productionTip = false;

        let utilsOptions: UtilsPluginOptions = {
            propagateVueParserErrors: false,
            i18PluginOptions: {
                curLang: FRENCH
            }
        };

        Vue.use(UtilsPlugin, utilsOptions);
        Vue.use(FrenchPlugin);
        Vue.use(DefaultSpritesPlugin);
    }
};
