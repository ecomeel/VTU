import { mount } from "@vue/test-utils"
import FormSubmitter from "@/components/FormSubmitter.vue"

describe('FormSubmitter', () => {
  it('Show the message after sending', async () => {
    const wrapper = mount(FormSubmitter)

    await wrapper.find('[data-username]').setValue('Алиса')
    await wrapper.find('form').trigger("submit.prevent")
    expect(wrapper.find('.message').text()).toBe('Thanks for your message, Алиса')
  })
})