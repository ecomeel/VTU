import { mount } from "@vue/test-utils"
import SubmitButton from "@/components/SubmitButton.vue"

const msg = 'Войти'
const wrapperFactory = (props: object) => {
  return mount(SubmitButton, {
    props: {
      ...props,
      msg
    }
  })
}

describe('SubmitButton.vue', () => {
  it('Render the message for unauthorized users', () => {
    const wrapper = wrapperFactory({})
    expect(wrapper.find('span').text()).toBe('Not authorized')
    expect(wrapper.find('button').text()).toBe("Войти")
  })
  it('Render message for admin', () => {
    const wrapper = wrapperFactory({ isAdmin: true })
    expect(wrapper.find('span').text()).toBe('Admin Privileges')
    expect(wrapper.find('button').text()).toBe("Войти")
  })
})