import { it, describe, expect } from "vitest";
import { mount } from "@vue/test-utils";
import TheBreadCrumb from "@/components/TheBreadCrumb.vue";

describe("TheBreadCrumb", () => {
  it("Should render the BreadCrumb text correctly", () => {
    const wrapper = mount(TheBreadCrumb);

    const breadCrumbText = "Home";
    const breadCrumbElement = wrapper.findComponent({
      name: "FwbBreadcrumbItem",
    });
    expect(breadCrumbElement.text()).toBe(breadCrumbText);
  });
});
