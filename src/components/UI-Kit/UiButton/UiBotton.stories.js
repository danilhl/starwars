import UiButton from "./UiButton";


export default {
    title: 'Ui-Kit/UiButton',
    component: UiButton,

}

const Template = (args) => <UiButton {...args} />;

const props = {
    text: 'Test',
    disabled: false,
    theme: 'light',

}

export const Light = Template.bind({});

Light.args = {
    ...props,
    theme: 'light'
};

export const Dark = Template.bind({});

Dark.args = {
    ...props,
    theme: 'dark'
};

export const Disabled = Template.bind({});

Dark.args = {
    ...props,
    disabled: true
};