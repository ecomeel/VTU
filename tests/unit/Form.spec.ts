import { mount } from "@vue/test-utils";
import BasicForm from "@/components/BasicForm.vue";

test("emits the input to its parent", async () => {
  const wrapper = mount(BasicForm);

  await wrapper.find("input").setValue("my@mail.com");
  await wrapper.find("button").trigger("click");

  expect(wrapper.emitted("submit")[0][0]).toBe("my@mail.com");
});
