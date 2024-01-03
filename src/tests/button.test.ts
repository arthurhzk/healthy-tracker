import { it, describe, expect } from "vitest";
import { mount } from "@vue/test-utils";
import TheButton from "@/components/TheButton.vue";

describe("TheButton", () => {
  it("Should render the button text correctly", () => {
    const buttonText = "Click me";
    const wrapper = mount(TheButton, {
      props: {
        text: buttonText,
      },
    });
    const buttonElement = wrapper.find("button");
    expect(buttonElement.text()).toBe(buttonText);
  });
});
