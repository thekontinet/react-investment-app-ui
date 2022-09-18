import Page from ".";

export default {
    title: "Components/Page",
    component: Page,
    argTypes: {
        number: {
            control: "number"
        }
    }
};

const Template = (args) => <Page {...args}/>

export const Pages = Template.bind({}) 
Pages.args = {
    number : "1"
}
