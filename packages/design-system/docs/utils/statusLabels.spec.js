import { createLocalVue, mount } from '@vue/test-utils'
import ExampleComponent from '@/ExampleComponent.vue'
import statusLabels from './statusLabels.js'

// create an extended `Vue` constructor
const localVue = createLocalVue()

// install plugins as normal
localVue.mixin(statusLabels)

const MockComponent = {
  name: 'example',
  status: 'prototype',
  template: "<div id='Example-container'><label class='status original'>undefined</label></div>"
}

const div = document.createElement('div')
document.body.appendChild(div)

const wrapper = mount(ExampleComponent, {
  attachTo: div,
  localVue
})

describe('statusLabels.js', () => {
  it('should render status labels', () => {
    expect(wrapper.get('label')).toBeTruthy()
  })

  it('should render correct text value inside label', () => {
    const el = wrapper.find('label')
    expect(el.text()).toBe('prototype')
  })

  it('should remove existing labels', () => {
    const wrapper2 = mount(MockComponent, {
      attachTo: div,
      localVue
    })
    // Wait that statusLabels is finished
    setTimeout(() => {
      const child = wrapper2.find('.original')
      expect(child.exists()).toBe(false)
    }, 0)
  })
})
