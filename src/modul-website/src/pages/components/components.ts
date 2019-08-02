
import { MediaQueries, MediaQueriesMixin } from '@ulaval/modul-components/dist/mixins/media-queries/media-queries';
import { ModulVue } from '@ulaval/modul-components/dist/utils/vue/vue';
import Component from 'vue-class-component';
import { Watch } from 'vue-property-decorator';
import WithRender from './components.html?style=./components.scss';

@WithRender
@Component({
    mixins: [MediaQueries]
})
export class MWComponentsPage extends ModulVue {

    showMenu = false;

    mounted() {
        this.isMqMinMChanged(this.as<MediaQueriesMixin>().isMqMinM);
    }

    @Watch('isMqMinM')
    private isMqMinMChanged(value): void {
        this.showMenu = value;
    }

    toggleMenu() {
        this.showMenu = !this.showMenu;
    }
}
