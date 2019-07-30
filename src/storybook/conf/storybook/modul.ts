import FrenchPlugin from '@packages/modul-components//lang/fr';
import { FRENCH } from '@packages/modul-components//utils/i18n/i18n';
import '@packages/modul-components/styles/main.scss';
import '@packages/modul-components/utils/polyfills';
import DefaultSpritesPlugin from '@packages/modul-components/utils/svg/default-sprites';
import UtilsPlugin, { UtilsPluginOptions } from '@packages/modul-components/utils/utils-plugin';
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
