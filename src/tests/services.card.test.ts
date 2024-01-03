import { it, describe, expect } from "vitest";
import { mount } from "@vue/test-utils";
import ServicesCard from "@/components/ServicesCard.vue";

describe("ServicesCard", () => {
  it("Should render the ServicesCard correctly", () => {
    const title = "Service title";
    const description = "Service descrition";
    const image = "path/to/image.jpg";

    const wrapper = mount(ServicesCard, {
      props: {
        title,
        description,
        image,
      },
    });

    const titleElement = wrapper.find("h1.font-bold");
    expect(titleElement.text()).toBe(title);

    const descriptionElement = wrapper.find("h1.text-gray-500");
    expect(descriptionElement.text()).toBe(description);

    const imageElement = wrapper.find("img");
    expect(imageElement.attributes("src")).toBe(image);
  });
});
