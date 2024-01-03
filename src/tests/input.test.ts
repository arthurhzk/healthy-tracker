import { it, describe, expect } from "vitest";
import { mount } from "@vue/test-utils";
import TheInput from "@/components/TheInput.vue";

describe("TheInput", () => {
  it("Should emit the props correctly", () => {
    const placeholderText = "Should render the placeholder text correctly";
    const wrapper = mount(TheInput, {
      props: {
        placeholder: placeholderText,
      },
    });
    const inputElement = wrapper.find("input");
    expect(inputElement.attributes("placeholder")).toBe(placeholderText);
  });
});
