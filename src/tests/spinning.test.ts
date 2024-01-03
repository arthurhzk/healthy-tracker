import { it, describe, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Spinning from "@/components/Spinning.vue";

describe("Spinning", () => {
  it("Should render the Spinning correctly", () => {
    const wrapper = mount(Spinning);

    const spinningElement = wrapper.find("div");
    expect(spinningElement.exists()).toBe(true);
  });
});
