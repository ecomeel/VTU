import { mount, shallowMount } from "@vue/test-utils"
import Greeting from "@/components/Greeting.vue"

describe('Greeting', () => {
  it('render greeting', () => {
    const wrapper = mount(Greeting)
    // const shallowWrapper = shallowMount(Greeting) ЕСЛИ В КОМПОНЕНТЕ ЕСТЬ ВЛОЖЕННЫЕ КОМПОНЕНТЫ, ТО ОНИ НЕ БУДУТ РАСКРЫТЫ (НА ИХ МЕСТЕ СТАВЯТСЯ ЗАГЛУШКИ)
    expect(wrapper.text()).toMatch('Hello world')
  });
});
