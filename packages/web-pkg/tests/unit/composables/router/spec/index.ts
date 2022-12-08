import Vue, { defineComponent, SetupFunction, Data } from 'vue'
import { createLocalVue, mount, Wrapper } from '@vue/test-utils'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(VueRouter)

export const createWrapper = (
  setup: SetupFunction<Data, Data>,
  { router, template }: { router?: VueRouter; template?: string }
): Wrapper<Vue> =>
  mount(
    defineComponent({
      setup,
      template: `<div>${template}</div>`
    }),
    {
      localVue,
      router
    }
  )
