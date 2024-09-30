import { mount } from "@vue/test-utils";
import CounterComponent from "@/components/CounterComponent.vue";

test("Counter", () => {
  const wrapper = mount(CounterComponent);

  wrapper.find("button").trigger("click");
  wrapper.find("button").trigger("click");

  // NOTE: Проверяем, был ли вызван эмит
  // expect(wrapper.emitted()).toHaveProperty("increment");

  // NOTE: Проверяем какие паарметры были переданы
  // const incrementEvent = wrapper.emitted("increment");

  // expect(incrementEvent).toHaveLength(2);
  // expect(incrementEvent[0]).toEqual([1]);
  // expect(incrementEvent[1]).toEqual([2]);

  // NOTE: Complex events
  expect(wrapper.emitted("increment")[0]).toEqual([
    {
      count: 1,
      isEven: false,
    },
  ]);
  expect(wrapper.emitted("increment")[1]).toEqual([
    {
      count: 2,
      isEven: true,
    },
  ]);
});
