import { it, describe, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Container from "@/components/Container.vue";

describe("Container", () => {
  it("Should render the slot correctly", () => {
    const containerText = "Mount the slot component";
    const wrapper = mount(Container, {
      slots: {
        default: containerText,
      },
    });
    expect(wrapper.html()).toContain(containerText);
  });
});
