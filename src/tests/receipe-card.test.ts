import { it, describe, expect } from "vitest";
import { mount } from "@vue/test-utils";
import ReceipeCard from "@/components/ReceipeCard.vue";

describe("ReceipeCard", () => {
  it("Should render the receipe data correctly", () => {
    const receipeData = {
      image: "http://example.com/image.jpg",
      title: "Delicious Receipe",
      calories: 200,
    };
    const wrapper = mount(ReceipeCard, {
      props: {
        receipe: receipeData,
      },
    });
    const imageElement = wrapper.find("img");
    const titleElement = wrapper.find("h5");
    const caloriesElement = wrapper.find("p");

    expect(imageElement.attributes("src")).toBe(receipeData.image);
    expect(titleElement.text()).toBe(receipeData.title);
    expect(caloriesElement.text()).toContain(
      `${receipeData.calories} calories`
    );
  });
});
