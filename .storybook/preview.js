import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { addDecorator, addParameters } from "@storybook/react";

import Center from "../src/components/Center";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator((story) => <Center>{story()}</Center>);

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});
