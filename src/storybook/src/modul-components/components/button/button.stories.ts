import { actions } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/vue';
import ButtonPlugin from '@ulaval/modul-components/dist/components/button/button';
import { BUTTON_NAME } from '@ulaval/modul-components/dist/components/component-names';
import Vue from 'vue';
import { modulComponentsHierarchyRootSeparator } from '../../../../conf/storybook/utils';

Vue.use(ButtonPlugin);

storiesOf(`${modulComponentsHierarchyRootSeparator}${BUTTON_NAME}`, module)
    //
    .add('default', () => ({
        props: {
            text: {
                default: text('Text', 'A Button')
            }
        },
        methods: actions(
            'click',
            'focus',
            'blur'
        ),
        template: '<m-button @click="click" @focus="focus" @blur="blur">{{ text }}</m-button>'
    }))
    .add('disabled', () => ({
        template: '<m-button :disabled="true">A Button</m-button>'
    }))
    .add('waiting', () => ({
        template: '<m-button :waiting="true">A Button</m-button>'
    }))
    .add('fullsize', () => ({
        template: '<m-button fullSize="true">A Button</m-button>'
    }))
    .add('precision', () => ({
        template: '<m-button >A Button <template slot="precision">Button precision</template></m-button>'
    }))
    .add('submit', () => ({
        template: '<m-button type="submit">A Button</m-button>'
    }))
    .add('reset', () => ({
        template: '<m-button type="reset">A Button</m-button>'
    }));

storiesOf(`${modulComponentsHierarchyRootSeparator}${BUTTON_NAME}/skin="secondary"`, module)
    .add('default', () => ({
        template: '<m-button skin="secondary">A Button</m-button>'
    }))
    .add('disabled', () => ({
        template: '<m-button skin="secondary" :disabled="true">A Button</m-button>'
    }))
    .add('waiting', () => ({
        template: '<m-button skin="secondary" :waiting="true">A Button</m-button>'
    }))
    .add('fullSize', () => ({
        template: '<m-button :fullSize="true" skin="secondary">A Button</m-button>'
    }))
    .add('icon-name="m-svg__close-clear"', () => ({
        template: '<m-button icon-name="m-svg__close-clear" skin="secondary">A Button</m-button>'
    }))
    .add('icon="20px"', () => ({
        template: '<m-button icon-name="m-svg__close-clear" icon-size="20px" skin="secondary">A Button</m-button>'
    }))
    .add('icon-position="right"', () => ({
        template: '<m-button icon-name="m-svg__close-clear" icon-position="right" skin="secondary">A Button</m-button>'
    }))
    .add('precision', () => ({
        template: '<m-button skin="secondary" >A Button <template slot="precision">Button precision</template></m-button>'
    }));

storiesOf(`${modulComponentsHierarchyRootSeparator}${BUTTON_NAME}/icon-name="m-svg__close-clear"`, module)
    .add('default', () => ({
        template: '<m-button icon-name="m-svg__close-clear">A Button</m-button>'
    }))
    .add('disabled', () => ({
        template: '<m-button :disabled="true" icon-name="m-svg__close-clear">A Button</m-button>'
    }))
    .add('waiting', () => ({
        template: '<m-button icon-name="m-svg__close-clear" waiting="true">A Button</m-button>'
    }))
    .add('fullSize', () => ({
        template: '<m-button :fullSize="true" icon-name="m-svg__close-clear">A Button</m-button>'
    }))
    .add('icon="20px"', () => ({
        template: '<m-button icon-name="m-svg__close-clear" icon-size="20px">A Button</m-button>'
    }))
    .add('precision', () => ({
        template: '<m-button icon-name="m-svg__close-clear">A Button <template slot="precision">' +
            'Button precision</template></m-button>'
    }));

storiesOf(`${modulComponentsHierarchyRootSeparator}${BUTTON_NAME}/icon-position="right"`, module)
    .add('default', () => ({
        template: '<m-button icon-name="m-svg__close-clear" icon-position="right">A Button</m-button>'
    }))
    .add('disabled', () => ({
        template: '<m-button :disabled="true" icon-name="m-svg__close-clear" icon-position="right">A Button</m-button>'
    }))
    .add('waiting', () => ({
        template: '<m-button icon-position="right" icon-name="m-svg__close-clear" waiting="true">A Button</m-button>'
    }))
    .add('fullSize', () => ({
        template: '<m-button :fullSize="true" icon-name="m-svg__close-clear" icon-position="right">A Button</m-button>'
    }))
    .add('icon="20px"', () => ({
        template: '<m-button icon-name="m-svg__close-clear" icon-position="right" icon-size="20px">A Button</m-button>'
    }))
    .add('precision', () => ({
        template: '<m-button icon-name="m-svg__close-clear" icon-position="right" >A Button <template slot="precision">' +
            'Button precision</template></m-button>'
    }));

