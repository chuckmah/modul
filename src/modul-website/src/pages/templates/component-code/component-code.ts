
import { ModulVue } from '@ulaval/modul-components/dist/utils/vue/vue';
import Component from 'vue-class-component';
import { Watch } from 'vue-property-decorator';
import WithRender from './component-code.html';

@WithRender
@Component
export class MWComponentCode extends ModulVue {

    @Watch('$route')
    private routeChanged(): void {
        console.log('routeChanged = ' + this.$route.meta.name);
    }

}
