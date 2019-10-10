import { configure, addDecorator, addParameters } from "@storybook/react";
import { initDsm } from "@invisionapp/dsm-storybook";

// if (process.env.STORYBOOK_DSM) {
initDsm({
  addDecorator,
  addParameters,
  callback: () =>
    configure(require.context("../src/stories", true, /\.stories\.js$/), module)
});
// } else {
//   configure(require.context("../src/stories", true, /\.stories\.js$/), module);
// }
