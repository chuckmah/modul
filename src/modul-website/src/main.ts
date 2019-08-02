
import '@ulaval/modul-components/dist/styles/main.scss';
import '@ulaval/modul-components/dist/utils/polyfills';
import Vue from 'vue';
import { VueRouter } from 'vue-router/types/router';
import Modul from './components/modul/modul';
import WebsiteComponentsPlugin from './components/website-components-plugins';
import FrenchPlugin from './lang/fr/fr';
import ModulPlugin from './modul';
import routerFactory, { ModulRouter } from './router';
import './styles/main.scss';
import SvgPlugin from './utils/svg';

Vue.config.productionTip = false;

Vue.use(ModulPlugin);

Vue.use(FrenchPlugin);
Vue.use(SvgPlugin);

Vue.use(WebsiteComponentsPlugin);

let modulRouter: ModulRouter = routerFactory();
let router: VueRouter = modulRouter.router;

const vue = new Vue({
    router,
    template: '<modul></modul>',
    components: { Modul }
});

Vue.prototype.$routerIndex = modulRouter.index;

vue.$mount('#vue');
