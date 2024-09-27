import Emitter from "@/components/Emitter.vue"
import { mount } from "@vue/test-utils"

describe('Emitter', () => {
  it('Порождает событие двумя аргументами', () => {
    const wrapper = mount(Emitter)

    // wrapper.vm.$emit('myEvent', 'name', 'password')
    wrapper.vm.emitEvent()

    expect(wrapper.emitted().myEvent[0]).toEqual(['name', 'password'])
  })
})