import AdvancedForm from "@/components/AdvancedForm.vue";
import { mount } from "@vue/test-utils";

test("submits a form", async () => {
  const wrapper = mount(AdvancedForm);
  const email = "name@mail.com";
  const description = "Lorem ipsum dolor sit amet";
  const city = "moscow";

  await wrapper.find("input[type=email]").setValue(email);
  await wrapper.find("textarea").setValue(description);
  await wrapper.find("select").setValue(city);
  await wrapper.find("input[type=checkbox]").setValue(); // To be checkbox if we don't pass argument
  await wrapper.find("input[type=radio][value=monthly]").setValue();
  await wrapper.find("form").trigger("submit.prevent");

  expect(wrapper.emitted("submit")[0][0]).toStrictEqual({
    email,
    description,
    city,
    subsribe: true,
    interval: "monthly",
  });
});
console.log("some changing in trying rebase branhc");

const a = 15;
