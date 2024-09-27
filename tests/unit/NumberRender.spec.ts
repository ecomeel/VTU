import { mount } from "@vue/test-utils"
import NumberRender from "@/components/NumberRender.vue"

describe('NumberRender', () => {
  it("Выводит четные числа", () => {
    const wrapper = mount(NumberRender, {
      props: {
        even: true
      }
    })
    expect(wrapper.text()).toBe('2, 4, 6, 8')
  })
  it('Выводит нечетные числа', () => {
    const wrapper = mount(NumberRender, {
      props: {
        even: false
      }
    })
    expect(wrapper.text()).toBe('1, 3, 5, 7, 9')
  })
})