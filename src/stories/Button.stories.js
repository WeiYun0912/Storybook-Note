import Button from "../components/Button";

export default {
  title: "Component/Button",
  component: Button,
  argTypes: {
    backgroundColor: {
      options: ["red", "green", "blue"],
      control: { type: "select" },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const RedButton = Template.bind({});

export const GreenButton = Template.bind({});
GreenButton.args = {
  backgroundColor: "green",
  label: "Heee",
};

export const BlueButton = Template.bind({});
BlueButton.args = {
  backgroundColor: "blue",
};

export const YellowButton = Template.bind({});
YellowButton.args = {
  backgroundColor: "yellow",
};
