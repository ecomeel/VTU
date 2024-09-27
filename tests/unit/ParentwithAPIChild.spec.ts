import { shallowMount, mount } from "@vue/test-utils"
import ParentWithAPIChild from "@/components/ParentWithAPIChild.vue"
import ComponentWithAPICall from "@/components/ComponentWithAPICall.vue"

describe('ParentWithAPIChild.vue', () => {
  it('Render with mount and make a API call', () => {
    const wrapperParent = mount(ParentWithAPIChild)
    const wrapperChild = mount(ComponentWithAPICall)

    // expect(wrapperParent.find(wrapperChild).exists()).toBe(true)
    // console.log(wrapper.find(ComponentWithAPICall))
    // console.log(wrapper.html())
  })
})