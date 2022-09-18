import ApplicationLogo from ".";

export default {
  title: "Components/ApplicationLogo",
  component: ApplicationLogo,
};

const Template = (args) => <ApplicationLogo {...args} />;

export const Default = Template.bind({});
Default.args = {
  dark: true,
};
