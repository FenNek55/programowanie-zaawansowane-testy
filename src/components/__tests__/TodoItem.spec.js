import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import TodoItem from '../TodoItem.vue'

describe('TodoItem', () => {
    it ('should render the component with todo text', () => {
        const wrapper = mount(TodoItem, {
        props: {
            todoText: 'New Todo'
        }
        })
        expect(wrapper.find('p').text()).toBe('New Todo')
    })
    
    it ('should emit an event when clicking the button', async () => {
        const wrapper = mount(TodoItem, {
        props: {
            todoText: 'New Todo'
        }
        })
        await wrapper.find('button').trigger('click.prevent')
        expect(wrapper.emitted()).toHaveProperty('mark-as-done')
    })
})