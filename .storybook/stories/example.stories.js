// Utilities
import { storyFactory } from "../util/helpers";
import { text, boolean } from "@storybook/addon-knobs";

export default { title: "BaseCard" };

function genComponent(name) {
  return {
    name,

    render(h) {
      return h("div", this.$slots.default);
    }
  };
}

const story = storyFactory({
  BaseBtn: genComponent("BaseBtn"),
  BaseCard: genComponent("BaseCard")
});

export const asDefault = () =>
  story({
    props: {
      /*titleText: {
        default: require("@/assets/descarga.jpeg")
      }*/
    },
    template: `
          <div>
            <!--<div :style="'width: 200px; border: 1px solid red; height: 100px; background-image: url(' + titleText + ')'"></div>-->
            <v-btn color="primary">dasds</v-btn>
          </div>
        `
  });
