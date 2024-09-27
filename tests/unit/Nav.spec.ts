import { mount } from "@vue/test-utils";
import NavBar from "@/components/NavBar.vue";

// describe('NavBar.vue', () => {
test("is profile link rendered", () => {
  const wrapper = mount(NavBar);

  const profileLink = wrapper.get("#profile");

  expect(profileLink.text()).toEqual("Profile");
});
// })

test("doesn't redner ad admin link", () => {
  const wrapper = mount(NavBar);

  expect(wrapper.find("#admin").exists()).toBeFalsy();
});

test("renders an admin link", () => {
  const wrapper = mount(NavBar, {
    props: {
      admin: true,
    },
  });

  expect(wrapper.get("#admin").text()).toEqual("Admin");
});
