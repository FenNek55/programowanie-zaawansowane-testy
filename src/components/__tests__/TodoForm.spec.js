import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import TodoForm from '../TodoForm.vue'

describe('TodoForm', () => {
  it ('should render the component with input and button', () => {
    const wrapper = mount(TodoForm)
    expect(wrapper.find('input').exists()).toBe(true)
    expect(wrapper.find('button').exists()).toBe(true)
  })

  it ('should have an empty input value', () => {
    const wrapper = mount(TodoForm)
    expect(wrapper.find('input').element.value).toBe('')
  })

  it ('should update the input value when typing', async () => {
    const wrapper = mount(TodoForm)
    await wrapper.find('input').setValue('New Todo')
    expect(wrapper.find('input').element.value).toBe('New Todo')
  })

  it ('should emit an event when clicking the button', async () => {
    const wrapper = mount(TodoForm)
    await wrapper.find('input').setValue('New Todo')
    await wrapper.find('button').trigger('click.prevent')
    expect(wrapper.emitted()).toHaveProperty('addTodo')
    expect(wrapper.emitted().addTodo[0]).toEqual(['New Todo'])
  })
})