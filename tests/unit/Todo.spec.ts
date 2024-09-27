import { mount } from "@vue/test-utils";
import TodoApp from "@/components/TodoApp.vue";

test("renders a todo", async () => {
  const wrapper = mount(TodoApp);

  // NOTE: First test - render
  // const todo = wrapper.get('[data-test="todo"]')
  // expect(todo.text()).toBe('Learn Vue3.ks testing')

  // NOTE: Second test - new Todo
  // expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(1);
  // await wrapper.get('[data-test="new-todo"]').setValue("New todo");
  // await wrapper.get('[data-test="form"]').trigger("submit");
  // expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2);

  // NOTE: Third test - Checkbox
  // await wrapper.get('[data-test="todo-checkbox"]').setValue(true);
  // expect(wrapper.get('[data-test="todo"]').classes()).toContain("completed");
});
